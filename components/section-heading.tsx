'use client'

import { motion } from 'framer-motion'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl mb-14 ${alignment}`}
    >
      <div
        className={`flex items-center gap-3 mb-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-brand to-accent-2" />
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
