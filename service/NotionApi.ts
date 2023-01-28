import { Client } from '@notionhq/client/build/src'
import { NotionToMarkdown } from 'notion-to-md'

export default class NotionApi {
  static async getItem(): Promise<any> {
    const notionKey = process.env.NOTION_API_KEY
    const notionDatabaseKey = process.env.NOTION_DB_KEY

    const notion = new Client({ auth: notionKey })

    if (notionDatabaseKey) {
      const response = await notion.databases.query({ database_id: notionDatabaseKey })

      return response
    }
  }

  static async getPageInfo({ pageId }: { pageId: string }) {
    const notionKey = process.env.NOTION_API_KEY
    const notion = new Client({ auth: notionKey })
    const block = (await notion.blocks.retrieve({ block_id: pageId })) as Block
    const page = (await notion.pages.retrieve({ page_id: pageId })) as Page

    return {
      createdAt: block.created_time,
      title: block.child_page.title,
      tags: page.properties['태그'].multi_select,
    }
  }

  static async getPageMarkDown({ pageId }: { pageId: string }) {
    const notionKey = process.env.NOTION_API_KEY
    const notion = new Client({ auth: notionKey })

    const n2m = new NotionToMarkdown({ notionClient: notion })

    const mdblocks = await n2m.pageToMarkdown(pageId)

    const mdString = n2m.toMarkdownString(mdblocks)

    return { md: mdString }
  }
}

export type Block = {
  object: 'block'
  id: string
  parent: {
    type: string
    database_id: string
  }
  created_time: string
  last_edited_time: string
  created_by: { object: string; id: string }
  last_edited_by: { object: string; id: string }
  has_children: boolean
  archived: boolean
  type: string
  child_page: { title: string }
}

export type Tag = {
  id: string
  name: string
  color: string
}

export type PropertyTag = {
  id: string
  type: string
  multi_select: Tag[]
}

export type Property = {
  생성일: {
    id: string
    type: string
    created_time: string
  }
  태그: PropertyTag
  이름: { id: 'title'; type: 'title'; title: [[Object]] }
}

export type Page = {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: { object: string; id: string }
  last_edited_by: { object: string; id: string }
  cover: string | null
  icon: string | null
  parent: {
    type: string
    database_id: string
  }
  archived: boolean
  properties: Property
  url: 'https://www.notion.so/API-TEST1-d640f516cd1f40b3a5f933d633691e67'
}
