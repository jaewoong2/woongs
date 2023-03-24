import fs from 'fs'
import path from 'path'

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
export function getLocalStorage(key: string): boolean | null {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key)
    return value !== null ? Boolean(JSON.parse(value)) : null
  }
  return false
}

export function getParentDBName(parentDBid: string) {
  if (process.env.NOTION_DB_KEY) {
    const dbId = parentDBid.replaceAll('-', '')
    if (dbId === process.env.NOTION_DB_KEY) {
      return '알고리즘'
    }
    if (dbId === process.env.NOTION_DEV_DB_KEY) {
      return '개발'
    }
  }
  return null
}

export async function getDirectories(): Promise<string[]> {
  const pagesDir: string = path.join(process.cwd(), 'pages')

  return new Promise((resolve, reject) => {
    fs.readdir(pagesDir, (err, files) => {
      if (err) reject(err)

      const directories: string[] = files.filter((file): file is string =>
        fs.statSync(path.join(pagesDir, file)).isDirectory()
      )

      resolve(directories)
    })
  })
}
