import Head from 'next/head'
export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>TheWebDev</title>
        <meta name='keywords' content='web-development, programming' />
      </Head>
      {articles.map(article => (
        <h3>{article.title}</h3>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
