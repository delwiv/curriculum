'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowDown, Download } from 'lucide-react'
import { SOCIALS, SocialIconButton } from '@/components/social-links'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stats = [
    { value: '11 ans', label: "d'expérience" },
    { value: '9 ans', label: 'en freelance' },
    { value: '15', label: 'projets' },
  ]

  const clients = ['Ledger', 'The Bradery', 'Oyst', 'YOSS', 'Zone Critique']

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 text-border/70 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,black,transparent)]" />
        <div className="absolute right-1/4 top-1/3 h-[420px] w-[520px] rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center"
        >
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start mb-5"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
                </span>
                Disponible pour de nouvelles missions
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight mb-4 text-gradient-brand"
            >
              Louis Cathala
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium text-foreground mb-4"
            >
              Développeur Fullstack{' '}
              <span className="text-brand">
                Node.js · React · Infrastructure
              </span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="max-w-xl mx-auto lg:mx-0 mb-7 text-[15px] sm:text-base text-muted-foreground leading-relaxed"
            >
              Je prends en charge la chaîne complète : le produit côté Node.js et
              React, l'infrastructure qui le fait tourner et la CI/CD qui le
              déploie. Sur des produits à fort trafic comme Ledger ou The Bradery
              et à forte valeur ajoutée comme Oyst.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-5"
            >
              <a
                href="mailto:louis.cathala@protonmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-brand-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Me contacter
              </a>
              <a
                href="/CV-Louis-Cathala.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:border-brand/50 hover:text-brand transition-colors"
              >
                <Download size={18} />
                Télécharger le CV
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-2.5"
            >
              {SOCIALS.filter((s) => s.name !== 'Email').map((social) => (
                <SocialIconButton key={social.name} social={social} size={9} />
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand/10 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border border-brand/30" />
              <img
                src="/louis-cathala.png"
                alt="Louis Cathala"
                width={360}
                height={430}
                className="w-56 sm:w-64 lg:w-full lg:max-w-[340px] aspect-[4/5] rounded-3xl object-cover object-[50%_22%] border border-border shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 border-t border-border pt-8"
        >
          <div className="grid grid-cols-3 gap-6 shrink-0">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:border-l lg:border-border lg:pl-10 flex-1">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3 text-center lg:text-left">
              Ils m'ont fait confiance
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2">
              {clients.map((c) => (
                <span
                  key={c}
                  className="text-sm font-semibold text-muted-foreground/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Défiler vers le bas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-brand transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
