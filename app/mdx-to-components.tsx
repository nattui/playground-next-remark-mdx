import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import rehypeReact from "rehype-react"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

export async function mdxToComponents(mdx: string) {
  // Order of plugins matters
  const { result } = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    // @ts-expect-error: suggested in documentation due to missing types
    .use(rehypeReact, {
      Fragment,
      components: {
        // Example
        h1: ({ children }) => (
          <h1 className="mb-4 text-3xl font-bold">{children}</h1>
        ),
        p: ({ children }) => <p className="mb-2">{children}</p>,
        // a: Link,
      },
      jsx,
      jsxs,
    })
    .process(mdx)

  return result
}
