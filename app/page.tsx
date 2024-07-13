import { mdxToComponents } from "@/app/mdx-to-components"

export default async function Home() {
  const mdx = `
  # Hello

  my name is Natt
  `

  const components = mdxToComponents(mdx)

  return (
    <main className="p-16">
      <p className="mb-4">My custom component</p>
      {components}
    </main>
  )
}
