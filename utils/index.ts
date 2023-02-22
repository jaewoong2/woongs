import { createCanvas } from 'canvas'

export function generateThumbnailDataURL(title: string) {
  const canvas = createCanvas(400, 300)
  const ctx = canvas.getContext('2d')!

  const gradient = ctx.createLinearGradient(0, 0, 0, 300)
  gradient.addColorStop(0, 'hsl(205, 100%, 95%)')
  gradient.addColorStop(0.5, 'hsla(240, 100%, 97%, 1)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 400, 300)

  ctx.font = '42px Nanum Gothic'
  ctx.fillStyle = 'hsla(200, 80%, 50%, 0.8)'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(title, 200, 150)

  return canvas.toDataURL('image/png')
}

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
