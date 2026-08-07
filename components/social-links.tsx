'use client'

import { Mail, Globe, type LucideIcon } from 'lucide-react'

export type Social = {
  name: string
  href: string
  handle: string
} & (
  | { kind: 'img'; src: string }
  | { kind: 'lucide'; Icon: LucideIcon }
)

export const SOCIALS: Social[] = [
  {
    name: 'Email',
    href: 'mailto:louis.cathala@protonmail.com',
    handle: 'louis.cathala@protonmail.com',
    kind: 'lucide',
    Icon: Mail,
  },
  {
    name: 'Calendly',
    href: 'https://calendly.com/louis-cathala',
    handle: 'Réserver un créneau',
    kind: 'img',
    src: '/social/calendly.png',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lcathala/',
    handle: 'in/lcathala',
    kind: 'img',
    src: '/social/linkedin.png',
  },
  {
    name: 'Malt',
    href: 'https://www.malt.fr/profile/louiscathala1',
    handle: 'louiscathala1',
    kind: 'img',
    src: '/social/malt.png',
  },
  {
    name: 'Collective',
    href: 'https://app.collective.work/collective/louis-cathala/profile',
    handle: 'louis-cathala',
    kind: 'img',
    src: '/social/collective.png',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/delwiv',
    handle: 'delwiv',
    kind: 'img',
    src: '/social/github.png',
  },
  {
    name: 'Site personnel',
    href: 'https://www.wildredbeard.tech',
    handle: 'wildredbeard.tech',
    kind: 'lucide',
    Icon: Globe,
  },
]

function isExternal(href: string) {
  return !href.startsWith('mailto')
}

export function SocialTile({ social, size = 20 }: { social: Social; size?: number }) {
  if (social.kind === 'img') {
    return (
      <span className="inline-flex h-full w-full items-center justify-center rounded-[inherit] bg-white">
        <img
          src={social.src}
          alt={social.name}
          width={size}
          height={size}
          className="object-contain"
          style={{ width: size, height: size }}
        />
      </span>
    )
  }
  const Icon = social.Icon
  return (
    <span className="inline-flex h-full w-full items-center justify-center rounded-[inherit] bg-brand-muted text-brand">
      <Icon size={size} />
    </span>
  )
}

export function SocialIconButton({
  social,
  size = 11,
}: {
  social: Social
  size?: 9 | 11
}) {
  const box = size === 9 ? 'h-9 w-9' : 'h-11 w-11'
  const base = `${box} inline-flex items-center justify-center overflow-hidden rounded-lg border border-border transition-all hover:-translate-y-0.5 hover:border-brand/50`

  if (social.kind === 'img') {
    return (
      <a
        href={social.href}
        target={isExternal(social.href) ? '_blank' : undefined}
        rel={isExternal(social.href) ? 'noopener noreferrer' : undefined}
        aria-label={social.name}
        title={social.name}
        className={`${base} bg-white`}
      >
        <img
          src={social.src}
          alt={social.name}
          className="object-contain"
          style={{ width: size === 9 ? 18 : 22, height: size === 9 ? 18 : 22 }}
        />
      </a>
    )
  }

  const Icon = social.Icon
  return (
    <a
      href={social.href}
      target={isExternal(social.href) ? '_blank' : undefined}
      rel={isExternal(social.href) ? 'noopener noreferrer' : undefined}
      aria-label={social.name}
      title={social.name}
      className={`${base} text-muted-foreground hover:text-brand`}
    >
      <Icon size={size === 9 ? 16 : 18} />
    </a>
  )
}
