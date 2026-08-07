'use client'

import { motion } from 'framer-motion'
import { Code2, Server, ShoppingBag, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  const domains = [
    {
      icon: Code2,
      title: 'Développement Fullstack Node.js & React',
      description:
        "Applications web complètes, du backend au frontend. Node.js avec Express et Fastify, APIs REST et architectures microservices. React et son écosystème : Next.js, React Router (ex Remix), Gatsby, React Native. Rendu serveur pour la performance et le SEO, applications headless, progressive web apps. Intégration de paiement et d'abonnement (Stripe, Adyen).",
    },
    {
      icon: ShieldCheck,
      title: 'IA & souveraineté numérique',
      description:
        'Déploiement de modèles open-weight sur infrastructure maîtrisée, en datacenter français ou européen, plutôt que sur des API tierces. Conformité RGPD par conception, aucune donnée sortant du périmètre, coûts prévisibles. Inférence et fine tuning de LLM en local, moteurs vLLM, llama.cpp et ExLlama. Mise en place from scratch ou intégration sur une infra existante.',
    },
    {
      icon: Server,
      title: 'Infrastructure, DevOps & CI/CD',
      description:
        'Mise en place et gestion d’infrastructures de production. AWS (Lambda, ECS avec scaling horizontal, EC2, CloudFormation), infrastructure as code avec Terraform, conteneurisation Docker. Pipelines CI/CD sur GitHub Actions et GitLab CI, y compris runners self-hosted. Reverse proxy et serveurs web (Traefik, nginx, Apache). Tests end to end avec Cypress.',
    },
    {
      icon: ShoppingBag,
      title: 'Plateformes e-commerce & Shopify',
      description:
        'Développement sur mesure pour des boutiques à enjeux : applications custom via Gadget.dev, thèmes Liquid entièrement sur mesure, services de livraison personnalisés, gestion de taxes et de facturation. Intégrations complexes avec APIs tierces, webhooks et métafields. Dashboards marchands et logiques métier avancées.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01, Expertise"
          title="Domaines de compétences"
          description="Développeur fullstack JavaScript, 11 ans d'expérience dont 9 en freelance. J'interviens sur des projets from scratch, des refontes et des reprises de code existant, en lead technique ou intégré à une équipe."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-7 rounded-xl border border-border bg-background transition-all hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-muted text-brand transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {domain.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
