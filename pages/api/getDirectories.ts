import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getDirectories } from '@utils/index'

const LINKS: [string, string][] = [
  ['/', '🏠 home'],
  ['/about', '🤔 me?'],
]

const LINKS_MAPS: { [key: string]: [string, string] } = {
  algorithm: ['/algorithm', '🥳 algorithm'],
  frontend: ['/frontend', '💻 frontend'],
}

const handler: NextApiHandler = async (_, res) => {
  try {
    const directores = await getDirectories()

    const result = [
      LINKS[0],
      ...directores.map((dir) => LINKS_MAPS[dir]).filter((v) => !!v),
      LINKS[1],
    ]

    res.status(200).json(result)
  } catch (err) {
    res.status(500).send('Internal Server Error')
  }
}

export default handler
