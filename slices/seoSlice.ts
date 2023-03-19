import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_ARTICLE_JSON_LD_PROPS, DEFAULT_NEXT_SEO_PROPS } from 'next-seo-config'
import { ArticleJsonLdProps, NextSeoProps } from 'types/seo'

const SEO_SLICE = 'slice/seo'

export type SEO = NextSeoProps & {
  article: ArticleJsonLdProps
}

const initialState: SEO = {
  ...DEFAULT_NEXT_SEO_PROPS,
  article: { ...DEFAULT_ARTICLE_JSON_LD_PROPS },
}

export const seoSlice = createSlice({
  name: SEO_SLICE,
  initialState,
  reducers: {
    setSEO(state, action: PayloadAction<Partial<SEO>>) {
      state.title = initialState.title + ' | ' + action.payload.title ?? state.title
      state.additionalMetaTags = action.payload.additionalMetaTags ?? state.additionalMetaTags
      state.article = action.payload.article ?? state.article
      state.canonical = action.payload.canonical ?? state.canonical
      state.description = action.payload.description ?? state.description
      state.openGraph = action.payload.openGraph ?? state.openGraph
    },
  },
})

export const { setSEO } = seoSlice.actions
export default seoSlice.reducer
