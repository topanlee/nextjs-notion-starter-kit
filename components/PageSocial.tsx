import React from 'react'
import cs from 'classnames'

import * as config from 'lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.twitter && {
    name: 'twitter',
    href: `https://twitter.com/${config.twitter}`,
    title: `Twitter @${config.twitter}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' />
      </svg>
    )
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    )
  },

  config.figma && {
    name: 'figma',
    href: `https://www.figma.com/${config.figma}`,
    title: `Figma ${config.author}`,
    icon: (
      <svg class="svg" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 11c0-1.657 1.343-3 3-3h5c1.657 0 3 1.343 3 3 0 1.043-.533 1.963-1.341 2.5.808.537 1.341 1.457 1.341 2.5 0 1.657-1.343 3-3 3-.768 0-1.47-.289-2-.764V21c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3 0-1.044.533-1.962 1.341-2.5-.808-.538-1.341-1.456-1.341-2.5 0-1.043.533-1.963 1.341-2.5-.808-.537-1.341-1.457-1.341-2.5zm3 2c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2h2v4h-2zm2 1h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm0 5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-2zm3-5c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2 0-1.105-.895-2-2-2zm0-1c1.105 0 2-.895 2-2 0-1.105-.895-2-2-2h-2v4h2z" fill-rule="evenodd" fill-opacity="1" fill="#000" stroke="none"></path></svg>
    )
  }
].filter(Boolean)

export const PageSocial: React.FC = () => {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
