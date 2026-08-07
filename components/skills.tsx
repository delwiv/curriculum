'use client'

import { motion } from 'framer-motion'
import {
  Monitor,
  Server,
  Cloud,
  GitBranch,
  Database,
  ShoppingCart,
  Cpu,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function Skills() {
  const skillCategories = [
    {
      icon: Monitor,
      category: 'Frontend',
      skills: ['React', 'Next.js', 'React Router (ex Remix)', 'Gatsby.js', 'React Native', 'JavaScript', 'Tailwind CSS', 'Web Components', 'HTML', 'CSS'],
    },
    {
      icon: Server,
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Fastify', 'APIs REST', 'Microservices', 'Webhooks', 'Authentification'],
    },
    {
      icon: Cloud,
      category: 'Cloud & infrastructure',
      skills: ['AWS (Lambda, ECS, EC2, CloudFormation)', 'Terraform', 'Docker', 'Docker Compose', 'Traefik', 'nginx', 'Apache', 'Azure'],
    },
    {
      icon: GitBranch,
      category: 'CI/CD',
      skills: ['GitHub Actions', 'GitLab CI', 'Runners self-hosted', 'Builds automatisés'],
    },
    {
      icon: Database,
      category: 'Bases de données',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB'],
    },
    {
      icon: ShoppingCart,
      category: 'E-commerce',
      skills: ['Shopify (Liquid, APIs, métafields, carrier service)', 'Gadget.dev', 'Stripe Checkout', 'Adyen', 'SparkLayer', 'Mollie'],
    },
    {
      icon: Cpu,
      category: 'Intelligence Artificielle',
      skills: ['vLLM', 'Llama.cpp', 'LLM en local', 'Hardware GPU'],
    },
    {
      icon: Wrench,
      category: 'Autres',
      skills: ['Sanity (CMS headless)', 'Cypress'],
    },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02, Stack"
          title="Compétences techniques"
          description="Une stack complète, du navigateur au serveur GPU, éprouvée en production."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
                className="p-6 rounded-xl border border-border bg-card/40 transition-colors hover:border-brand/30"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-muted text-brand">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md border border-border bg-background font-mono text-sm text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
