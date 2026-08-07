'use client'

import { SOCIALS, SocialIconButton } from '@/components/social-links'

export function Footer() {
  const year = 2026

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start font-bold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background text-xs">
              LC
            </span>
            <span className="text-foreground">Louis Cathala</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Développeur Fullstack · Node.js · React · Infrastructure
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {SOCIALS.map((social) => (
            <SocialIconButton key={social.name} social={social} size={9} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center sm:text-left">
        <p className="text-xs text-muted-foreground">
          © {year} Louis Cathala, Freelance depuis 2017.
        </p>
      </div>
    </footer>
  )
}
