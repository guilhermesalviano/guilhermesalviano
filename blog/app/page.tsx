import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi! My name is Guilherme,
      </h1>
      <p className="mb-4">
        {`but you can call me Guibs. I graduated in Systems Development from ETEC and am currently studying Digital Games at Fatec. I’m passionate about technology, innovation, and solutions that positively impact people’s lives.`}
      </p>
      <p className="mb-4">
        {`My career began as a CRM Apprentice, where I learned and grew. Since then, I’ve gained valuable experience as a CRM Developer (Mid and Senior levels) at Enext Consultoria, honing both technical and strategic skills along the way.`}
      </p>
      <p className="mb-4">
        {`Let’s connect and create something amazing!`}
      </p>
    </section>
  )
}
