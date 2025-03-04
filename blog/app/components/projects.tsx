import { formatDate } from 'app/blog/utils'
import Link from 'next/link'

export function Projects() {

  return (
    <div className='flex flex-col gap-3'>
      <Link href={`https://koaris.me/?utm_source=portifolio&utm_medium=site&campaign=seemyprojects&utm_content=${new Date().toISOString().split("T")[0]}`}>
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
            {formatDate('2025-03-03', false)} - Present
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Koaris.me
          </p>
        </div>
      </Link>
      <Link href={`https://koaris.com.br/tools/?utm_source=portifolio&utm_medium=site&campaign=seemyprojects&utm_content=${new Date().toISOString().split("T")[0]}`}>
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
            {formatDate('2025-02-24', false)} - {formatDate('2025-03-03', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Marketing Tools
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/koaris/koaris-auth">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
            {formatDate('2024-11-05', false)} - Present
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Koaris Auth
          </p>
        </div>
      </Link>
      <Link href={`https://koaris.com.br/?utm_source=portifolio&utm_medium=site&campaign=seemyprojects&utm_content=${new Date().toISOString().split("T")[0]}`}>
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
            {formatDate('2023-08-05', false)} - Present
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Koaris
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://koaris.github.io/bloom-ui/">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
            {formatDate('2023-12-04', false)} - Present
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Design System - Bloom-ui
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/smaug-preco-do-poder">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
            {formatDate('2023-08-24', false)} - {formatDate('2023-11-27', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Visual Novel - Preço do poder
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/ekko-project">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
            {formatDate('2022-04-01', false)} - {formatDate('2022-07-26', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Platform game - Ekko
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[160px] min-w-20 tabular-nums">
            {formatDate('2020-06-18', false)} - {formatDate('2021-10-20', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Graphyk
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/messenger-clone">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 min-w-20 tabular-nums">
            {formatDate('2020-08-14', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Messenger Clone for Mobile
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/nlw2-Proffy">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 min-w-20 tabular-nums">
            {formatDate('2020-08-11', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Rocketseat - Proffy
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/ecoleta">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 min-w-20 tabular-nums">
            {formatDate('2020-06-02', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Rocketseat - Ecoleta
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/to-be-hero">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 min-w-20 tabular-nums">
            {formatDate('2020-03-27', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Rocketseat - To be hero
          </p>
        </div>
      </Link>
    </div>
  )
}
