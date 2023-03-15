export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
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
