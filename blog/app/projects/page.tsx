import Footer from 'app/components/footer'
import { Navbar } from 'app/components/nav'
import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'My works.',
}

export default function Page() {
  return (
    <div className="flex-auto min-w-0 mx-4 mt-8 flex flex-col px-2 md:px-0 max-w-xl sm:mx-auto">
      <Navbar />
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
        <Projects />
      </section>
      <Footer />
    </div>
  )
}
