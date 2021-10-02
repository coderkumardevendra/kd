export default function Post() {
  return (
    <div>
      post
    </div>
  )
}


export async function getStaticPaths() {
  const res = await fetch('https://dn.wcprojects.in/api/all/posts')
  const posts = await res.json()
  const paths = posts.map((post) => ({
      params: { slug: post.slug }
  }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {

  const res = await fetch(`https://dn.wcprojects.in/api/english/post/${params.slug}`)
  const data = (await res.json());
  console.log(data)
  return { props: { data }, revalidate: 1 }
}