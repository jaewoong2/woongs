import { useState } from 'react'
import useDebouncedMouseMove from './useMouseMove'

const useDrawer = (initialValue: boolean = false) => {
  const [drawer, setDrawer] = useState(initialValue)

  const mouseMove = (e: MouseEvent) => {
    if (e.screenX < 208) {
      setDrawer(true)
    } else {
      setDrawer(false)
    }
  }

  useDebouncedMouseMove(mouseMove, 50)

  return drawer
}

export default useDrawer
