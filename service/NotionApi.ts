import { Client } from '@notionhq/client/build/src'
import { NotionAPI as Notion } from 'notion-client'
import { getParentDBName } from '@utils/index'

const PROPERTIES = 'properties'
const TITLE = '이름'
const CREATED_TIME = '생성 일시'
const TAGS = 'Tags'

export type Item = {
  slug: string
  thumbnail: string
  createdTime: string
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
  notionALGORITHMKey = process.env.NOTION_ALGORITHM_KEY

  notion = new Client({ auth: this.notionKey })
  notionX = new Notion({
    activeUser: process.env.NOTION_ACTIVE_USER,
    authToken: process.env.NOTION_TOKEN_V2,
  })

  async getTagsMap() {
    const r = await this.notion.search({
      filter: { property: 'object', value: 'page' },
    })

    const map: any = {}

    r.results.forEach((v: any) => {
      const c = {
        id: v.id,
        tags: v.properties['Tags']?.multi_select?.map((v: any) => v.name),
      }

      c?.tags?.forEach((tag: string) => {
        if (!(tag in map)) {
          map[tag] = []
        }
        map[tag].push(c.id)
      })
    })

    return map
  }

  async getPage(pageId: string) {
    const recordMap = await this.notionX.getPage(pageId)
    return recordMap
  }

  async getAllTags() {
    if (this.notionDatabaseKey) {
      const response = await this.notion.databases.query({
        database_id: this.notionDatabaseKey,
      })

      const result = response.results.map((result) => {
        if (PROPERTIES in result) {
          if (result.properties[TAGS].type === 'multi_select') {
            return result.properties[TAGS].multi_select.map((select) => select.name)
          }
          return ['']
        }
        return ['']
      })

      return result
    }

    return null
  }

  async getAllPosts() {
    if (this.notionDatabaseKey) {
      const response = await this.notion.databases.query({
        database_id: this.notionDatabaseKey,
      })

      const results = response.results
        .map((result) => {
          if (PROPERTIES in result) {
            if (
              result.properties[TITLE].type === 'title' &&
              result.properties[CREATED_TIME].type === 'created_time' &&
              result.properties[TAGS].type === 'multi_select'
            ) {
              return {
                title: result.properties[TITLE].title?.[0]?.plain_text,
                tags: result.properties[TAGS].multi_select.map(({ name }) => name),
                id: result.id,
                createdTime: result.properties[CREATED_TIME].created_time,
              }
            }
          }
          return null
        })
        .filter((v) => !!v?.title)

      return results
    }

    return null
  }

  async getSlug() {
    if (this.notionDatabaseKey) {
      const response = await this.notion.databases.query({
        database_id: this.notionDatabaseKey,
      })

      const results = response.results
        .map((result) => {
          if (PROPERTIES in result) {
            if (
              result.properties[TITLE].type === 'title' &&
              result.properties[CREATED_TIME].type === 'created_time'
            ) {
              return {
                slug: result.properties[TITLE].title?.[0]?.plain_text,
                createdTime: result.properties[CREATED_TIME].created_time,
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
            ...result,
            post: {
              id: result?.id,
              nextId: results[index + 1],
              prevId: null,
            },
          }
        }

        if (index + 1 === results.length) {
          return {
            ...result,
            post: {
              id: result?.id,
              nextId: null,
              prevId: results[index - 1],
            },
          }
        }

        return {
          ...result,
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
    try {
      const slugs = await this.getSlug()
      const block = await this.notion.blocks.retrieve({ block_id: pageId })
      const page = (await this.notion.pages.retrieve({ page_id: pageId })) as any
      const recordMap = await this.notionX.getPage(pageId)

      if ('created_time' in block && 'child_page' in block && 'properties' in page) {
        if (slugs) {
          const info = slugs.find((slug) => (slug?.post.id === pageId ? slug.post : null))
          return {
            title: block.child_page.title,
            parentName: getParentDBName(page.parent.database_id) ?? '',
            recordMap,
            tags: page.properties.Tags.multi_select.map(({ name }: { name: string }) => name),
            ...info?.post,
          }
        }
      }

      return null
    } catch (err) {
      return null
    }
  }
}

const notion = new NotionApi()

export default notion
