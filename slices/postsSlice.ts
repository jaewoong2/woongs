import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const POSTS_SLICE = 'slice/posts'

type Post = {
  id: string
  title: string
  tags: string[]
  thumbnail: string
  createdTime: string
} | null

export type POST = {
  posts: Post[]
  tags: string[][]
}

const initialState: POST = {
  posts: [],
  tags: [],
}

export const postsSlice = createSlice({
  name: POSTS_SLICE,
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<POST['posts']>) {
      state.posts = action.payload
    },
    setTags(state, action: PayloadAction<POST['tags']>) {
      state.tags = action.payload
    },
  },
})

export const { setPosts, setTags } = postsSlice.actions
export default postsSlice.reducer
