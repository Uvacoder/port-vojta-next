import React from 'react'
import Layout from 'components/layout'

type ArticleProps = {
  title?: string
}

const ArticleTemplate: React.FC<React.PropsWithChildren<ArticleProps>> = ({
  title,
  children,
}) => {
  return (
    <Layout meta={{title}}>
      <main className="flex items-center justify-center mx-auto w-full py-16">
        <article className="prose mx-auto w-full prose-a:underline prose-a:underline-offset-1 prose-a:text-gray-200 prose-a:decoration-slate-600 hover:prose-a:decoration-slate-400 prose-headings:text-gray-100 prose-hr:opacity-20">
          {children}
        </article>
      </main>
    </Layout>
  )
}

export default ArticleTemplate
