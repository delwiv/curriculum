'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Experience = {
  company: string
  period: string
  role: string
  summary: string
  description: string[]
  tech: string[]
  link?: string
}

export function Experience() {
  const experiences: Experience[] = [
    {
      company: 'CloZ',
      period: 'Juil. 2025, Nov. 2025',
      role: 'Développeur Fullstack',
      summary:
        "Application publique Shopify (Gadget) permettant aux marchands de brancher leurs produits au réseau CloZ SmartCloset.",
      description: [
        'Configuration par le marchand des correspondances entre ses champs (taille, couleur, marque, catégorie) et une structure éventuellement non standard',
        'Transmission des produits vers CloZ en appliquant les correspondances définies',
        'Gestion de plusieurs forfaits via l’API de facturation Shopify',
        'Webhook de réception des statistiques collectées sur l’app mobile CloZ',
        'Dashboard de statistiques marchand (clics, vues, achats, best sellers), avec cartes accessibles selon le forfait',
        'Suggestion de produits aux utilisateurs de l’app mobile selon leurs achats et vues récents',
      ],
      tech: ['Gadget.dev', 'Shopify', 'Node.js', 'React', 'Tailwind CSS'],
      link: 'https://www.cloz-smartcloset.com',
    },
    {
      company: 'Portfolio',
      period: 'Fév. 2025, En cours',
      role: 'Développeur Fullstack',
      summary:
        'Mon site personnel (compétences, projets, blog), construit from scratch avec une stack moderne et entièrement auto-hébergé.',
      description: [
        'Application Next.js 15 avec rendu serveur (SSR) pour le SEO',
        'Back-office de contenu avec Sanity (CMS headless)',
        'Déploiement automatisé en Docker via GitHub Actions',
        'Auto-hébergé sur un Raspberry Pi 3 B+',
        'Développé avec l’assistance d’un LLM open-weight en local (Qwen 2.5 Coder)',
      ],
      tech: ['Next.js', 'React', 'Sanity', 'Node.js', 'Tailwind CSS', 'Docker', 'GitHub Actions', 'LLM local'],
      link: 'https://www.wildredbeard.tech',
    },
    {
      company: 'IQ Spirits',
      period: 'Jan. 2025, Oct. 2025',
      role: 'Développeur Fullstack',
      summary:
        'Gestion des taxes, des réductions et des factures PDF pour une boutique de spiritueux sous Shopify et SparkLayer.',
      description: [
        'Application custom Shopify avec Gadget, synchronisation des produits et des commandes',
        'CRUD des réductions Spark via l’API',
        'Création de produits taxes cachés basés sur les métafields produits',
        'Mise à jour du thème Liquid, du panier et de l’historique de commandes injecté par Spark',
        'Génération de factures PDF à l’expédition (TVA 5,5 % et 20 %, taxes et réductions appliquées)',
        'Upload automatique des factures sur Google Drive',
      ],
      tech: ['Shopify', 'Gadget.dev', 'Node.js', 'JavaScript', 'Shopify Liquid'],
      link: 'https://iq-spirits.com',
    },
    {
      company: 'Cimaises &+',
      period: 'Oct. 2024, Déc. 2024',
      role: 'Développeur Fullstack',
      summary:
        'Service de livraison Shopify sur mesure gérant des conditions complexes selon le contenu du panier et le pays de destination.',
      description: [
        'Règles de livraison complexes selon le poids et la longueur des articles et le pays de destination',
        'Application custom Shopify (Gadget) pour configurer prestataires de livraison et conditions',
        'Enregistrement d’un carrier service auprès de Shopify pour lister les services à la confirmation de commande',
        'Détermination des méthodes disponibles selon le contenu du panier et la destination',
        'Exclusion des produits stockés en magasin, récupérables gratuitement par le client',
      ],
      tech: ['Shopify', 'Gadget.dev', 'Node.js', 'JavaScript', 'Shopify Liquid'],
      link: 'https://www.cimaises-et-plus.com',
    },
    {
      company: 'JCP Vacances',
      period: 'Août 2024, Nov. 2024',
      role: 'Développeur Fullstack',
      summary:
        'Thème Shopify entièrement sur mesure pour une entreprise de voyages clés en main.',
      description: [
        'Interface complète tout en restant intuitive',
        'Recherche complexe basée sur plusieurs facteurs (thème, destination, période, type de logement)',
        'Refonte complète des pages accueil, résultats, produit, blog, compte utilisateur et historique',
        'Développement sur les standards web : HTML, CSS, JavaScript et Web Components',
      ],
      tech: ['Shopify', 'Shopify Liquid', 'JavaScript', 'Tailwind CSS'],
      link: 'https://jcpvacances.com',
    },
    {
      company: 'Artenza',
      period: 'Juin 2024, Oct. 2024',
      role: 'Développeur Fullstack',
      summary:
        'Gestion des cadres pour une boutique de vente de tableaux et de photographie.',
      description: [
        'Produits de type cadre masqués dans la boutique',
        'Sélecteur de cadre sur les fiches produit, avec affichage du cadre choisi sur la galerie',
        'Ajout du cadre au panier et synchronisation des quantités avec le produit principal',
        'Query param pour pré-sélectionner un cadre et simplifier le partage',
      ],
      tech: ['Shopify Liquid', 'JavaScript', 'Tailwind CSS', 'Shopify'],
      link: 'https://www.artenza.fr',
    },
    {
      company: 'Rocketify',
      period: 'Mars 2024, Déc. 2025',
      role: 'Développeur Fullstack',
      summary:
        'Webapp de Rocketify, l’agence web e-commerce que j’ai cofondée, et direction technique des applications Shopify livrées.',
      description: [
        'Front Remix multilingue avec sections composables et blog',
        'Back-office de contenu avec Sanity (CMS headless)',
        'Hébergement sur Netlify',
        'Direction technique d’applications et extensions Shopify via Gadget',
        'Développement de thèmes Liquid et de Web Components',
      ],
      tech: ['Remix.js', 'React', 'Sanity', 'Tailwind CSS', 'JavaScript', 'LLM local'],
      link: 'https://www.rocketify.io',
    },
    {
      company: 'Zone Critique',
      period: 'Oct. 2023, Août 2025',
      role: 'Développeur Fullstack',
      summary:
        'Migration d’un blog WordPress vers une progressive web app de littérature, avec boutique et abonnements.',
      description: [
        'Application Gatsby (React) headless et statique pour une expérience très rapide',
        'Application responsive, performante et installable, avec notifications',
        'Gestion de produits physiques, numériques et d’abonnements',
        'Intégration de Stripe Checkout pour les paiements ponctuels et récurrents',
        'Articles premium réservés aux abonnés, avec extrait gratuit',
      ],
      tech: ['React', 'Node.js', 'Gatsby.js', 'Tailwind CSS', 'Stripe Checkout'],
      link: 'https://zone-critique.com',
    },
    {
      company: 'Explain.care',
      period: 'Fév. 2023, Août 2023',
      role: 'Lead développeur',
      summary:
        'Application headless Shopify, React Router et Sanity pour une boutique de soins de la peau.',
      description: [
        'Spécifications produit complexes via des schémas custom Sanity',
        'Pages générées côté serveur (SSR) pour la performance',
        'SEO entièrement géré par le marchand depuis Sanity',
        'Quiz de recommandation proposant une routine personnalisée parmi des centaines de possibilités',
        'Pages produit complètes, entièrement administrables via Shopify et Sanity',
      ],
      tech: ['Sanity', 'Shopify', 'React', 'React Router (ex Remix)', 'Tailwind CSS'],
      link: 'https://explain.care',
    },
    {
      company: 'Ressources Connectées',
      period: 'Fév. 2023, Avr. 2023',
      role: 'Lead développeur',
      summary:
        'Application de suivi des dons pour les églises catholiques françaises, sur une hiérarchie de plus de 20 000 sites.',
      description: [
        'Arborescence imbriquée de 20 000+ sites avec recherche',
        'Sélection de dates, affichage des dons et paiements, export PDF',
        'Next.js 13 (app router, alors en bêta)',
        'CI/CD GitLab et conteneurisation Docker',
      ],
      tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'GitLab CI'],
    },
    {
      company: 'Graneet',
      period: 'Août 2022, Oct. 2022',
      role: 'Développeur Fullstack',
      summary:
        'Logiciel de gestion de chantiers de construction : devis, achats, facturation, plannings et suivi des équipes.',
      description: [
        'Gestion des devis, du costing, des fournisseurs et de la facturation',
        'Plannings d’équipe et allocation des employés aux tâches',
        'API Nest.js et génération de documents PDF',
        'Tests end to end avec Cypress',
        'Docker Compose multi-environnements, déploiement sur AWS ECS',
      ],
      tech: ['React', 'Node.js', 'Nest.js', 'PostgreSQL', 'AWS ECS', 'Docker', 'Stripe', 'Cypress', 'GitHub Actions'],
      link: 'https://www.graneet.com',
    },
    {
      company: 'The Bradery',
      period: 'Jan. 2021, Juil. 2021',
      role: 'Lead développeur',
      summary:
        'Application mobile et infrastructure backend d’une plateforme de ventes privées de prêt-à-porter.',
      description: [
        'Application React Native développée from scratch avec builds automatisés',
        'Microservices Node.js pour les fonctions retour en stock et les campagnes d’email marketing',
        'API Node.js middleware commune aux applications web et natives',
        'CI/CD basée sur Docker',
        'Stack AWS CloudFormation avec scaling horizontal sur ECS',
      ],
      tech: ['AWS ECS', 'AWS Lambda', 'CloudFormation', 'Docker', 'React Native', 'React', 'Node.js', 'GitLab CI', 'Shopify'],
      link: 'https://thebradery.com',
    },
    {
      company: 'Ledger',
      period: 'Mars 2020, Juil. 2022',
      role: 'Développeur Fullstack',
      summary:
        'Évolutions, maintenance et services Node.js pour le fabricant de portefeuilles crypto, sur une boutique Shopify à fort trafic.',
      description: [
        'Infrastructure managée avec Terraform',
        'Création de lambdas Node.js pour les campagnes email',
        'Globalisation de la boutique, du blog et du support, avec choix de langue synchronisé entre les domaines',
        'Maintenance et évolutions du thème Shopify Liquid, dont le support mobile et la refonte de l’interface',
        'Application proof of concept pour portefeuilles Nano permettant un vote cryptographiquement sécurisé',
      ],
      tech: ['Node.js', 'React', 'AWS Lambda', 'AWS EC2', 'Terraform', 'GitHub Actions', 'Shopify', 'Shopify Liquid'],
      link: 'https://www.ledger.com',
    },
    {
      company: 'YOSS',
      period: 'Nov. 2018, Juin 2019',
      role: 'Développeur Fullstack',
      summary:
        'Plateforme de recrutement de freelances avec gestion des contrats et des paiements.',
      description: [
        'Nombreuses fonctionnalités d’expérience utilisateur (raccourcis clavier, recherche avancée)',
        'Création de yoss.works, plateforme alternative pour les métiers créatifs, à la charte épurée',
        'Déploiement sur Azure',
        'Tests end to end avec Cypress',
        'CI/CD avec GitHub Actions',
      ],
      tech: ['Node.js', 'React', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Azure', 'Cypress'],
    },
    {
      company: 'Oyst',
      period: 'Fév. 2017, Sep. 2018',
      role: 'Développeur Fullstack',
      summary:
        'Solution de paiement en un clic générique, branchable sur toute boutique e-commerce, le modèle du One Click Pay d’Amazon, deux ans avant.',
      description: [
        'Microservices Node.js pour la gestion des utilisateurs, des marchands et des paiements',
        'Application React en iframe pour WooCommerce, Shopify, PrestaShop, Magento et intégrations custom',
        'Authentification par codes à 4 chiffres envoyés par SMS',
        'Paiement par carte avec Adyen',
        'Paiement en un clic chez tous les marchands du réseau après une seule inscription',
        'Prise du lead sur la refonte du front en v2',
      ],
      tech: ['React', 'Node.js', 'Docker', 'AWS Lambda', 'AWS EC2', 'PostgreSQL', 'Adyen'],
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 bg-card/30 border-y border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="03, Projets"
          title="Projets & réalisations"
          description="15 projets livrés depuis 2017, du produit à fort trafic à l'application from scratch, en lead technique ou intégré à une équipe."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <ProjectCard key={`${exp.company}-${index}`} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

const COVERS: Record<string, string> = {
  CloZ: '/projects/cloz.webp',
  Portfolio: '/projects/portfolio.webp',
  'IQ Spirits': '/projects/iq-spirits.webp',
  'Cimaises &+': '/projects/cimaises.webp',
  'JCP Vacances': '/projects/jcp-vacances.webp',
  Artenza: '/projects/artenza.webp',
  Rocketify: '/projects/rocketify.webp',
  'Zone Critique': '/projects/zone-critique.webp',
  'Ressources Connectées': '/projects/ressources-connectees.webp',
  'Explain.care': '/projects/explain.webp',
  Graneet: '/projects/graneet.webp',
  'The Bradery': '/projects/the-bradery.webp',
  Ledger: '/projects/ledger.webp',
  YOSS: '/projects/yoss.webp',
  Oyst: '/projects/oyst.webp',
}

function ProjectCard({ exp }: { exp: Experience }) {
  const [open, setOpen] = useState(false)
  const isLead = exp.role.toLowerCase().includes('lead')
  const cover = COVERS[exp.company]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors hover:border-brand/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
        {cover && (
          <img
            src={cover}
            alt={`Aperçu du projet ${exp.company}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        {isLead && (
          <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-brand-foreground shadow">
            Lead
          </span>
        )}
        {!exp.link && (
          <span className="absolute right-3 top-3 rounded-full bg-background/85 px-2.5 py-0.5 text-xs font-medium text-muted-foreground backdrop-blur">
            Hors ligne
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3 className="text-lg font-semibold text-foreground">
            {exp.company}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {exp.period}
          </span>
        </div>

        <p className="text-sm font-medium text-brand mb-2.5">{exp.role}</p>

        <p className="text-[14px] text-muted-foreground leading-relaxed">
          {exp.summary}
        </p>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand hover:opacity-80 transition-opacity"
        >
          {open ? 'Masquer les détails' : `Voir les détails (${exp.description.length})`}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <ul className="space-y-1.5 pt-4">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-[13.5px] text-muted-foreground flex gap-2.5 leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-brand transition-colors"
            >
              Voir le site
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
