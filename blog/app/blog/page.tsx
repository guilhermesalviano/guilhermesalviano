import Footer from 'app/components/footer'
import { Navbar } from 'app/components/nav'
import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="flex-auto min-w-0 mx-4 mt-8 flex flex-col px-2 md:px-0 max-w-xl sm:mx-auto">
      <Navbar />
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
        <BlogPosts />
      </section>
      <Footer />
    </div>
  )
}
