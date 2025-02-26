import Footer from "./components/footer"
import { Navbar } from "./components/nav"

export default function Page() {
  return (
    <div className="flex-auto min-w-0 flex flex-col mx-4 mt-8 px-2 md:px-0 max-w-xl sm:mx-auto">
    <Navbar />
    <section>
      <div className="flex items-baseline flex-col-reverse md:flex-row justify-between">
        <div>
          <h1 className="mb-6  text-2xl font-semibold tracking-tighter">
            Hi! My name is Guilherme,
          </h1>
          <p className="mb-4">
            {`but you can call me Guibs. I graduated in Systems Development from ETEC and am currently studying Digital Games at Fatec. `}
          </p>
        </div>
        <img src="https://avatars.githubusercontent.com/u/36766110?v=4&size=116" className="w-[116px] h-[116px] rounded-full m-auto object-cover max-md:mb-4" />
      </div>
      <p className="mb-4">
          {`I’m passionate about technology, and over the past few years, my ambition has been to create a software development company. This company would not only focus on building innovative solutions but also be responsible for managing access to the software it creates.`}
      </p>
      <p className="mb-4">
        {`Let’s connect and create something amazing!`}
      </p>
      </section>
      <Footer />
    </div>
  )
}
