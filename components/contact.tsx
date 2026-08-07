'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { SOCIALS, SocialTile } from '@/components/social-links'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 sm:p-12 text-center">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-brand/10 blur-[100px]" />

          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand" />
              <span className="font-mono text-sm font-semibold uppercase tracking-widest text-brand">
                05, Contact
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-accent-2 to-transparent" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Travaillons ensemble
            </motion.h2>

            <p className="text-lg text-muted-foreground mb-2 max-w-xl mx-auto">
              Freelance depuis 2017, disponible pour des projets from scratch,
              des refontes ou des reprises de code existant, en lead technique
              ou intégré à une équipe.
            </p>

            <div className="mb-10 mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://calendly.com/louis-cathala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand text-brand-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white">
                  <img
                    src="/social/calendly.png"
                    alt=""
                    className="h-3.5 w-3.5 object-contain"
                  />
                </span>
                Réserver un appel
              </a>
              <a
                href="/CV-Louis-Cathala.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border rounded-lg font-semibold hover:border-brand/50 hover:text-brand transition-colors"
              >
                <Download size={18} />
                Télécharger le CV
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SOCIALS.filter((s) => s.name !== 'Calendly').map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card/40 text-left transition-colors hover:border-brand/40"
                >
                  <span className="h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                    <SocialTile social={social} size={social.kind === 'img' ? 26 : 18} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">
                      {social.name}
                    </div>
                    <div className="text-sm text-muted-foreground truncate group-hover:text-brand transition-colors">
                      {social.handle}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
