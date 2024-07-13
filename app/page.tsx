import { mdxToComponents } from "@/app/mdx-to-components"

export default async function Home() {
  const mdx = `
export const year = 2023

# Welcome to MDX

This is a paragraph with a {year} word.

## Some code

\`\`\`javascript
const greeting = "Hello, MDX!";
console.log(greeting);
\`\`\`

You can use React components directly in your MDX!
  `

  const components = mdxToComponents(mdx)

  return (
    <main className="p-16">
      <p className="mb-4">My custom component</p>
      {components}
    </main>
  )
}
