import { ReactNode } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import rehypeReact from "rehype-react"
import remarkMdx from "remark-mdx"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

const components = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="mb-4 text-3xl font-bold">{children}</h1>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="mb-2">{children}</p>
  ),
}

export async function mdxToComponents(mdx: string) {
  // Order of plugins matters
  const { result } = await unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkRehype)
    // @ts-expect-error: suggested in documentation due to missing types
    .use(rehypeReact, {
      Fragment,
      components,
      jsx,
      jsxs,
    })
    .process(mdx)

  return result
}
