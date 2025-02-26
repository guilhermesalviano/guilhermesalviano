import { formatDate } from 'app/blog/utils'
import Link from 'next/link'

export function Projects() {

  return (
    <div className='flex flex-col gap-3'>
      <Link target='_blank' href="https://koaris.com.br/tools/base64-decode">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2025-02-24', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Base64 Encoder & Decoder
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://koaris.com.br/tools/url-encoder">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2025-02-16', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            URL Encoder & Decoder
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://koaris.com.br/">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2025-02-20', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Koaris
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/koaris/koaris-auth">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2024-08-27', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Koaris Auth
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://koaris.github.io/bloom-ui/">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2023-12-26', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Design System - Bloom-ui
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/smaug-preco-do-poder">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2023-11-15', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Visual Novel - Preço do poder
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/ekko-project">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2022-11-26', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Platform game - Ekko
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2021-03-13', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Graphyk
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/ecoleta">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2020-06-02', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Ecoleta
          </p>
        </div>
      </Link>
      <Link target='_blank' href="https://github.com/guilhermesalviano/to-be-hero">
        <div className="w-full flex max-sm:flex-col flex-row space-x-0 sm:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[152px] tabular-nums">
            {formatDate('2020-03-27', false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            To be hero
          </p>
        </div>
      </Link>
    </div>
  )
}
