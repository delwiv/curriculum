'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function Education() {
  const education = [
    {
      school: 'IMIE',
      year: '2014',
      degree: 'Concepteur Développeur Informatique',
      location: 'Angers, France',
    },
    {
      school: 'AFPA',
      year: '2010',
      degree: 'Développeur Logiciel',
      location: 'Angers, France',
    },
  ]

  const languages = [
    { language: 'Français', level: 'Natif' },
    { language: 'Anglais', level: 'Professionnel' },
  ]

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="04, Bagage" title="Formation & langues" />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Formation
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-xl border border-border bg-card/40 transition-colors hover:border-brand/30"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-brand">
                      <GraduationCap size={20} />
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-brand">
                        {edu.school}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.location} • {edu.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Langues
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-xl border border-border bg-card/40 transition-colors hover:border-brand/30"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-foreground">
                      {lang.language}
                    </h4>
                    <span className="rounded-full bg-brand-muted px-3 py-1 text-sm font-medium text-brand">
                      {lang.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
