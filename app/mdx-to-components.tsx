import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

export async function mdxToComponents(mdx: string) {
  // Order of plugins matters
  const { result } = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    // @ts-expect-error: suggested in documentation due to missing types
    .use(rehypeReact, {
      Fragment,
      jsx,
      jsxs,
      components: {
        // Example
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold mb-4">{children}</h1>
        ),
        p: ({ children }) => <p className="text-gray-700 mb-2">{children}</p>,
        // a: Link,
      },
    })
    .process(mdx);

  return result;
}
