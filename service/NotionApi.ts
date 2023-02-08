import { NotionToMarkdown } from 'notion-to-md'
import { Client } from '@notionhq/client/build/src'
import { NotionAPI as Notion } from 'notion-client'

export type Item = {
  slug: string
  post: {
    id: string
    nextId: {
      slug: string
      id: string
    } | null
    prevId: {
      slug: string
      id: string
    } | null
  }
}

class NotionApi {
  notionKey = process.env.NOTION_API_KEY
  notionDatabaseKey = process.env.NOTION_DB_KEY
  notion = new Client({ auth: this.notionKey })

  async getPage(pageId: string) {
    const n = new Notion({
      activeUser: process.env.NOTION_ACTIVE_USER,
      authToken: process.env.NOTION_TOKEN_V2,
    })

    const recordMap = await n.getPage(pageId)
    return recordMap
  }

  async getSlug(): Promise<(Item | null)[] | null> {
    if (this.notionDatabaseKey) {
      const response = await this.notion.databases.query({
        database_id: this.notionDatabaseKey,
      })

      const results = response.results
        .map((result) => {
          if ('properties' in result) {
            if (result.properties['이름'].type === 'title') {
              return {
                slug: result.properties['이름'].title?.[0]?.plain_text,
                id: result.id,
              }
            }
          }
          return null
        })
        .filter((v) => !!v?.slug)

      return results.map((result, index) => {
        if (!result) {
          return null
        }

        if (index === 0) {
          return {
            slug: result?.slug,
            post: {
              id: result?.id,
              nextId: results[index + 1],
              prevId: null,
            },
          }
        }

        if (index + 1 === results.length) {
          return {
            slug: result?.slug,
            post: {
              id: result?.id,
              nextId: null,
              prevId: results[index - 1],
            },
          }
        }

        return {
          slug: result?.slug,
          post: {
            id: result?.id,
            nextId: results[index + 1],
            prevId: results[index - 1],
          },
        }
      })
    }

    return null
  }

  async getPageInfo({ pageId }: { pageId: string }) {
    const slugs = await this.getSlug()
    const block = await this.notion.blocks.retrieve({ block_id: pageId })
    const page = await this.notion.pages.retrieve({ page_id: pageId })

    const n = new Notion({
      activeUser: process.env.NOTION_ACTIVE_USER,
      authToken: process.env.NOTION_TOKEN_V2,
    })

    const recordMap = await n.getPage(pageId)

    if ('created_time' in block && 'child_page' in block && 'properties' in page) {
      if (slugs) {
        const info = slugs.find((slug) => (slug?.post.id === pageId ? slug.post : null))
        return {
          title: block.child_page.title,
          recordMap,
          ...info?.post,
        }
      }
    }

    return null
  }

  async getPageMarkDown({ pageId }: { pageId: string }) {
    const n2m = new NotionToMarkdown({ notionClient: this.notion })
    const mdblocks = await n2m.pageToMarkdown(pageId)
    const mdString = n2m.toMarkdownString(mdblocks)

    return { md: mdString }
  }
}

const notion = new NotionApi()

export default notion
