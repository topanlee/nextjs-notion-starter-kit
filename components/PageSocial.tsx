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
    title: `Figma ${config.figma}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5.75C5 3.67875 6.70927 2 8.81818 2H15.1818C17.2907 2 19 3.67875 19 5.75C19 7.05375 18.3216 8.20375 17.2933 8.875C18.3216 9.54625 19 10.6963 19 12C19 14.0712 17.2907 15.75 15.1818 15.75C14.2044 15.75 13.3109 15.3888 12.6364 14.795V18.25C12.6364 20.3212 10.9271 22 8.81818 22C6.70927 22 5 20.3212 5 18.25C5 16.945 5.67836 15.7975 6.70673 15.125C5.67836 14.4525 5 13.305 5 12C5 10.6963 5.67836 9.54625 6.70673 8.875C5.67836 8.20375 5 7.05375 5 5.75ZM8.81818 8.25C7.41182 8.25 6.27273 7.13125 6.27273 5.75C6.27273 4.36875 7.41182 3.25 8.81818 3.25H11.3636V8.25H8.81818ZM11.3636 9.5H8.81818C7.41182 9.5 6.27273 10.6187 6.27273 12C6.27273 13.3813 7.41182 14.5 8.81818 14.5H11.3636V9.5ZM11.3636 15.75H8.81818C7.41182 15.75 6.27273 16.8687 6.27273 18.25C6.27273 19.6313 7.41182 20.75 8.81818 20.75C10.2245 20.75 11.3636 19.6313 11.3636 18.25V15.75ZM15.1818 9.5C13.7755 9.5 12.6364 10.6187 12.6364 12C12.6364 13.3813 13.7755 14.5 15.1818 14.5C16.5882 14.5 17.7273 13.3813 17.7273 12C17.7273 10.6187 16.5882 9.5 15.1818 9.5ZM15.1818 8.25C16.5882 8.25 17.7273 7.13125 17.7273 5.75C17.7273 4.36875 16.5882 3.25 15.1818 3.25H12.6364V8.25H15.1818Z" fill="black"/>
      </svg>

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
