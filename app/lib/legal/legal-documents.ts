/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Layer: Public Legal
 * Purpose: Provides shared legal document rendering for public legal pages.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: legal@skygenesisenterprise.com
 */

export type LegalDocumentSlug =
  | "privacy"
  | "terms"
  | "cookies"
  | "gdpr"
  | "security"
  | "licence";

export type LegalDocumentSection = {
  id: string;
  title: string;
  content: string[];
};

export type LegalDocumentHighlight = {
  title: string;
  description: string;
};

export type LegalDocument = {
  slug: LegalDocumentSlug;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  lastUpdated: string;
  effectiveDate?: string;
  contactEmail: string;
  sections: LegalDocumentSection[];
  highlights?: LegalDocumentHighlight[];
};

export const legalDocumentOrder: LegalDocumentSlug[] = [
  "privacy",
  "terms",
  "cookies",
  "gdpr",
  "security",
  "licence",
];

export const legalDocuments: Record<LegalDocumentSlug, LegalDocument> = {
  privacy: {
    slug: "privacy",
    title: "Politique de confidentialité",
    shortTitle: "Confidentialité",
    badge: "Confidentialité",
    description:
      "Comment Sky Genesis Enterprise collecte, utilise, protège et conserve les données personnelles.",
    lastUpdated: "8 mai 2026",
    effectiveDate: "8 mai 2026",
    contactEmail: "privacy@skygenesisenterprise.com",
    highlights: [
      {
        title: "Collecte limitée",
        description:
          "Nous cherchons à limiter les données traitées à ce qui est nécessaire au fonctionnement des services.",
      },
      {
        title: "Usage encadré",
        description:
          "Les données peuvent être utilisées pour fournir les services, sécuriser les accès et répondre aux demandes.",
      },
      {
        title: "Demandes dédiées",
        description:
          "Les questions liées à la confidentialité peuvent être adressées à l'équipe privacy.",
      },
    ],
    sections: [
      {
        id: "scope",
        title: "Champ d'application",
        content: [
          "Cette politique décrit les pratiques générales de Sky Genesis Enterprise concernant les données personnelles traitées via ses sites publics, interfaces, formulaires et services associés.",
          "Certains services, contrats ou espaces clients peuvent prévoir des conditions complémentaires lorsque le contexte opérationnel ou réglementaire l'exige.",
        ],
      },
      {
        id: "data-collected",
        title: "Données que nous pouvons collecter",
        content: [
          "Nous pouvons traiter des informations d'identification, des coordonnées, des informations de compte, des préférences de communication, des données techniques et des éléments transmis volontairement dans un formulaire ou un échange avec nos équipes.",
          "Des journaux techniques peuvent également être générés pour assurer la disponibilité, la sécurité, la prévention des abus et le diagnostic des services.",
        ],
      },
      {
        id: "use",
        title: "Utilisation des données",
        content: [
          "Les données peuvent être utilisées pour fournir les services demandés, gérer les comptes, répondre aux sollicitations, améliorer la fiabilité des plateformes, respecter des obligations applicables et protéger les systèmes.",
          "Nous évitons d'utiliser les données pour des finalités incompatibles avec le contexte dans lequel elles ont été collectées.",
        ],
      },
      {
        id: "sharing",
        title: "Partage et prestataires",
        content: [
          "Certaines données peuvent être partagées avec des prestataires techniques, partenaires opérationnels ou autorités lorsque cela est nécessaire à la fourniture du service, à la sécurité ou à une obligation applicable.",
          "Lorsque nous faisons appel à des prestataires, nous cherchons à encadrer leur intervention et à limiter leur accès aux informations nécessaires.",
        ],
      },
      {
        id: "retention",
        title: "Conservation",
        content: [
          "Les durées de conservation varient selon la nature des données, la finalité du traitement, les exigences contractuelles et les obligations applicables.",
          "Lorsque les données ne sont plus nécessaires, nous cherchons à les supprimer, les anonymiser ou en limiter l'accès selon le contexte.",
        ],
      },
      {
        id: "rights",
        title: "Droits et demandes",
        content: [
          "Selon votre situation et la réglementation applicable, vous pouvez disposer de droits d'accès, de rectification, d'effacement, d'opposition, de limitation ou de portabilité.",
          "Pour exercer une demande ou obtenir une précision, contactez l'adresse indiquée sur cette page en décrivant le contexte de votre demande.",
        ],
      },
      {
        id: "updates",
        title: "Évolutions du document",
        content: [
          "Cette politique peut évoluer pour refléter des changements de services, d'organisation, de sécurité ou de réglementation.",
          "La date de dernière mise à jour permet d'identifier la version actuellement publiée.",
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Conditions d'utilisation",
    shortTitle: "Conditions",
    badge: "Conditions",
    description:
      "Les règles d'accès et d'utilisation des sites, services et plateformes Sky Genesis Enterprise.",
    lastUpdated: "8 mai 2026",
    effectiveDate: "8 mai 2026",
    contactEmail: "legal@skygenesisenterprise.com",
    highlights: [
      {
        title: "Accès responsable",
        description:
          "L'utilisation des services doit respecter les lois applicables, les droits de tiers et la sécurité des plateformes.",
      },
      {
        title: "Services évolutifs",
        description:
          "Les fonctionnalités, contenus et conditions opérationnelles peuvent évoluer avec le temps.",
      },
      {
        title: "Contact légal",
        description:
          "Les questions contractuelles ou juridiques peuvent être adressées à l'équipe legal.",
      },
    ],
    sections: [
      {
        id: "acceptance",
        title: "Acceptation des conditions",
        content: [
          "En accédant aux sites, services ou plateformes de Sky Genesis Enterprise, vous acceptez de les utiliser conformément aux présentes conditions et aux règles complémentaires éventuellement applicables.",
          "Si vous agissez pour une organisation, vous confirmez disposer de l'autorité nécessaire pour utiliser les services dans ce contexte.",
        ],
      },
      {
        id: "services",
        title: "Description générale des services",
        content: [
          "SGE fournit des sites, ressources, plateformes et services numériques orientés entreprise, productivité, sécurité, communication et infrastructure.",
          "Les descriptions publiques ne constituent pas toujours un engagement exhaustif de disponibilité ou de fonctionnalités, sauf stipulation contractuelle spécifique.",
        ],
      },
      {
        id: "accounts",
        title: "Comptes et accès",
        content: [
          "Certaines fonctionnalités peuvent nécessiter un compte, une authentification ou des droits d'accès spécifiques.",
          "Vous êtes responsable de la confidentialité de vos identifiants et devez nous signaler toute suspicion d'accès non autorisé.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Usage acceptable",
        content: [
          "Il est interdit d'utiliser les services pour porter atteinte à la sécurité, contourner des contrôles, perturber les systèmes, publier du contenu illicite ou violer les droits de tiers.",
          "Nous pouvons prendre des mesures proportionnées en cas d'usage abusif, de risque pour la plateforme ou de demande légitime d'une autorité compétente.",
        ],
      },
      {
        id: "content",
        title: "Contenus et propriété intellectuelle",
        content: [
          "Les contenus, marques, interfaces, textes, visuels et éléments techniques publiés par SGE restent protégés par les droits applicables.",
          "Sauf autorisation explicite, aucune licence générale n'est accordée pour reproduire, modifier ou exploiter ces éléments en dehors d'un usage normal du service.",
        ],
      },
      {
        id: "availability",
        title: "Disponibilité et modifications",
        content: [
          "Nous cherchons à maintenir les services accessibles et fiables, sans garantir que chaque fonctionnalité sera disponible sans interruption dans tous les contextes.",
          "Les services, contenus et conditions peuvent être modifiés pour des raisons techniques, de sécurité, opérationnelles, commerciales ou réglementaires.",
        ],
      },
      {
        id: "updates",
        title: "Évolution des conditions",
        content: [
          "Ces conditions peuvent être mises à jour afin de refléter l'évolution de nos services ou du cadre applicable.",
          "La version publiée avec sa date de mise à jour constitue la référence disponible sur le site public.",
        ],
      },
    ],
  },
  cookies: {
    slug: "cookies",
    title: "Politique relative aux cookies",
    shortTitle: "Cookies",
    badge: "Cookies",
    description:
      "Comment nous utilisons les cookies, traceurs et préférences de consentement.",
    lastUpdated: "8 mai 2026",
    effectiveDate: "8 mai 2026",
    contactEmail: "privacy@skygenesisenterprise.com",
    highlights: [
      {
        title: "Fonctionnement du site",
        description:
          "Certains cookies peuvent être nécessaires pour assurer la navigation, la sécurité ou les préférences essentielles.",
      },
      {
        title: "Mesure et amélioration",
        description:
          "Des mesures agrégées peuvent nous aider à comprendre l'usage du site lorsque le contexte le permet.",
      },
      {
        title: "Contrôle utilisateur",
        description:
          "Les préférences peuvent être ajustées selon les mécanismes disponibles dans le navigateur ou l'interface.",
      },
    ],
    sections: [
      {
        id: "definition",
        title: "Que sont les cookies ?",
        content: [
          "Les cookies et technologies similaires sont de petits éléments stockés ou lus sur un terminal afin de permettre certaines fonctionnalités, mémoriser des préférences ou mesurer l'utilisation d'un service.",
          "Le terme cookies couvre ici les traceurs, identifiants locaux et mécanismes techniques comparables lorsque leur usage est pertinent.",
        ],
      },
      {
        id: "categories",
        title: "Catégories de cookies",
        content: [
          "Nous pouvons utiliser des cookies nécessaires au fonctionnement du site, des cookies de préférence, des cookies de mesure d'audience et, selon les services, des traceurs liés à la sécurité ou à l'intégration de contenus.",
          "Les cookies non essentiels sont traités selon les choix disponibles et les exigences applicables.",
        ],
      },
      {
        id: "purposes",
        title: "Finalités d'utilisation",
        content: [
          "Les cookies peuvent aider à maintenir une session, protéger les formulaires, mémoriser une langue, comprendre les performances d'une page ou détecter des comportements anormaux.",
          "Nous cherchons à limiter leur usage aux finalités utiles au site, à la sécurité et à l'amélioration de l'expérience.",
        ],
      },
      {
        id: "third-parties",
        title: "Services tiers",
        content: [
          "Certains services tiers intégrés à nos pages peuvent déposer ou lire leurs propres traceurs selon leur rôle et leurs politiques.",
          "Lorsque cela est possible, nous privilégions des intégrations sobres et des paramètres limitant la collecte non nécessaire.",
        ],
      },
      {
        id: "choices",
        title: "Gestion des préférences",
        content: [
          "Vous pouvez gérer certains cookies via les paramètres de votre navigateur, les contrôles proposés par le site ou les mécanismes fournis par les services concernés.",
          "Le refus de certains cookies peut limiter des fonctionnalités non essentielles ou modifier l'expérience de navigation.",
        ],
      },
      {
        id: "duration",
        title: "Durée de vie",
        content: [
          "La durée de conservation d'un cookie dépend de sa finalité, de sa nature technique et des paramètres du service ou du navigateur.",
          "Certains cookies expirent à la fin de la session, tandis que d'autres peuvent rester actifs pour mémoriser une préférence ou assurer une fonction récurrente.",
        ],
      },
      {
        id: "updates",
        title: "Mises à jour",
        content: [
          "Cette politique peut être mise à jour en cas d'évolution du site, des outils utilisés ou du cadre applicable.",
          "La date de dernière mise à jour indique la version actuellement disponible.",
        ],
      },
    ],
  },
  gdpr: {
    slug: "gdpr",
    title: "Conformité RGPD",
    shortTitle: "RGPD",
    badge: "Protection des données",
    description:
      "Nos engagements autour de la protection des données et des droits des utilisateurs européens.",
    lastUpdated: "8 mai 2026",
    effectiveDate: "8 mai 2026",
    contactEmail: "dpo@skygenesisenterprise.com",
    highlights: [
      {
        title: "Principes de protection",
        description:
          "Nous intégrons les principes de minimisation, sécurité et transparence dans nos pratiques de traitement.",
      },
      {
        title: "Droits des personnes",
        description:
          "Les demandes liées aux droits RGPD peuvent être transmises à l'adresse de contact dédiée.",
      },
      {
        title: "Approche documentée",
        description:
          "Les pratiques peuvent être précisées par des contrats, annexes ou notices propres à certains services.",
      },
    ],
    sections: [
      {
        id: "role",
        title: "Rôle de SGE",
        content: [
          "Selon le service et le contexte, Sky Genesis Enterprise peut agir comme responsable de traitement, sous-traitant ou fournisseur technique.",
          "Le rôle exact dépend notamment du contrat, du service utilisé, des instructions du client et des données concernées.",
        ],
      },
      {
        id: "principles",
        title: "Principes appliqués",
        content: [
          "Nous cherchons à appliquer les principes de licéité, loyauté, transparence, minimisation, limitation des finalités, exactitude, sécurité et responsabilité.",
          "Ces principes guident la conception des services, les contrôles d'accès et les procédures internes liées aux données.",
        ],
      },
      {
        id: "legal-bases",
        title: "Bases et finalités",
        content: [
          "Les traitements peuvent reposer sur l'exécution d'un contrat, l'intérêt légitime, le consentement, une obligation légale ou une autre base applicable selon le contexte.",
          "Les finalités sont précisées dans les documents pertinents lorsque le traitement est rattaché à un service ou à une relation contractuelle donnée.",
        ],
      },
      {
        id: "rights",
        title: "Droits RGPD",
        content: [
          "Les personnes concernées peuvent disposer de droits d'accès, rectification, effacement, limitation, opposition et portabilité dans les conditions prévues par la réglementation.",
          "Nous pouvons demander des informations complémentaires raisonnables afin d'identifier la demande et d'y répondre de manière appropriée.",
        ],
      },
      {
        id: "transfers",
        title: "Localisation et transferts",
        content: [
          "Les données peuvent être traitées dans différents environnements techniques selon les services, les prestataires et les obligations contractuelles.",
          "Lorsque des transferts internationaux sont nécessaires, nous cherchons à nous appuyer sur des garanties adaptées au contexte.",
        ],
      },
      {
        id: "security",
        title: "Sécurité des traitements",
        content: [
          "Nous mettons en place des mesures organisationnelles et techniques destinées à réduire les risques de perte, accès non autorisé, altération ou divulgation non souhaitée.",
          "Le niveau de protection dépend de la nature du service, des données et des risques identifiés.",
        ],
      },
      {
        id: "updates",
        title: "Évolutions",
        content: [
          "Cette page peut évoluer pour refléter des changements réglementaires, contractuels ou opérationnels.",
          "Elle ne remplace pas les clauses spécifiques applicables à un contrat ou à un service donné.",
        ],
      },
    ],
  },
  security: {
    slug: "security",
    title: "Sécurité",
    shortTitle: "Sécurité",
    badge: "Sécurité",
    description:
      "Notre approche de la sécurité, de la confidentialité et de la protection des systèmes.",
    lastUpdated: "8 mai 2026",
    effectiveDate: "8 mai 2026",
    contactEmail: "security@skygenesisenterprise.com",
    highlights: [
      {
        title: "Protection par conception",
        description:
          "Les mesures de sécurité sont pensées autour des accès, des données, de l'exploitation et de la résilience.",
      },
      {
        title: "Surveillance raisonnable",
        description:
          "Des journaux et contrôles peuvent être utilisés pour détecter les incidents et protéger les plateformes.",
      },
      {
        title: "Signalement dédié",
        description:
          "Les sujets de sécurité peuvent être transmis à une adresse spécialisée pour qualification.",
      },
    ],
    sections: [
      {
        id: "approach",
        title: "Approche générale",
        content: [
          "SGE adopte une approche de sécurité proportionnée aux services, aux données traitées et aux risques opérationnels identifiés.",
          "Les mesures peuvent inclure des contrôles d'accès, de la journalisation, des revues techniques, de la segmentation et des processus de réponse aux incidents.",
        ],
      },
      {
        id: "access",
        title: "Gestion des accès",
        content: [
          "Les accès aux systèmes et données sont généralement limités aux personnes ou services qui en ont besoin pour une finalité légitime.",
          "Des mécanismes d'authentification, de droits et de revue peuvent être utilisés selon la criticité des environnements.",
        ],
      },
      {
        id: "data",
        title: "Protection des données",
        content: [
          "Nous cherchons à protéger les données contre les accès non autorisés, pertes, modifications non souhaitées ou divulgations inappropriées.",
          "Les mesures exactes varient selon le service, la configuration, le niveau de sensibilité et les contraintes d'exploitation.",
        ],
      },
      {
        id: "monitoring",
        title: "Journalisation et surveillance",
        content: [
          "Des journaux techniques peuvent être collectés pour comprendre l'activité, diagnostiquer les erreurs, sécuriser les accès et détecter des anomalies.",
          "L'accès à ces informations est limité selon les besoins opérationnels et les politiques internes.",
        ],
      },
      {
        id: "incidents",
        title: "Gestion des incidents",
        content: [
          "Lorsqu'un incident est identifié, nous cherchons à le qualifier, le contenir, en réduire l'impact et documenter les actions nécessaires.",
          "Les notifications éventuelles sont évaluées selon le contexte, les obligations applicables et les relations contractuelles concernées.",
        ],
      },
      {
        id: "responsible-disclosure",
        title: "Signalement de vulnérabilités",
        content: [
          "Les signalements de vulnérabilités peuvent être adressés à l'adresse de contact de cette page avec les informations permettant de reproduire ou comprendre le problème.",
          "Nous demandons d'éviter toute action susceptible de perturber les services, d'accéder à des données non autorisées ou de compromettre des utilisateurs.",
        ],
      },
      {
        id: "updates",
        title: "Amélioration continue",
        content: [
          "Les pratiques de sécurité évoluent avec les services, les risques, les outils et les exigences applicables.",
          "Cette page peut être ajustée pour refléter ces changements sans détailler des informations sensibles.",
        ],
      },
    ],
  },
  licence: {
    slug: "licence",
    title: "Licence",
    shortTitle: "Licence",
    badge: "Licence",
    description:
      "Informations relatives aux licences, contenus, marques, logiciels et ressources publiées par SGE.",
    lastUpdated: "8 mai 2026",
    effectiveDate: "8 mai 2026",
    contactEmail: "legal@skygenesisenterprise.com",
    highlights: [
      {
        title: "Contenus protégés",
        description:
          "Les contenus publics restent soumis aux droits applicables sauf indication explicite contraire.",
      },
      {
        title: "Logiciels tiers",
        description:
          "Certains services peuvent intégrer des composants régis par leurs propres licences.",
      },
      {
        title: "Demandes d'autorisation",
        description:
          "Les demandes de réutilisation peuvent être adressées à l'équipe legal.",
      },
    ],
    sections: [
      {
        id: "scope",
        title: "Champ de la licence",
        content: [
          "Cette page présente les principes généraux applicables aux contenus, marques, ressources et logiciels publiés ou mis à disposition par Sky Genesis Enterprise.",
          "Des licences ou contrats spécifiques peuvent compléter ou remplacer ces principes pour certains produits, dépôts, documents ou services.",
        ],
      },
      {
        id: "website-content",
        title: "Contenus du site",
        content: [
          "Les textes, visuels, interfaces, éléments graphiques, documents et ressources publiés sur le site sont protégés par les droits applicables.",
          "La consultation du site n'autorise pas automatiquement la reproduction, modification, redistribution ou exploitation commerciale de ces contenus.",
        ],
      },
      {
        id: "trademarks",
        title: "Marques et signes distinctifs",
        content: [
          "Les noms, logos, marques, produits et signes distinctifs associés à SGE ne peuvent pas être utilisés d'une manière créant une confusion ou suggérant une approbation non autorisée.",
          "Toute demande d'utilisation de marque doit préciser le contexte, le support, la durée et la finalité envisagée.",
        ],
      },
      {
        id: "software",
        title: "Logiciels et composants",
        content: [
          "Les logiciels, bibliothèques ou extraits de code publiés par SGE peuvent être soumis à des licences distinctes indiquées dans leurs dépôts ou documents associés.",
          "En cas de différence entre cette page et une licence jointe à un logiciel, la licence spécifique du logiciel doit être consultée en priorité.",
        ],
      },
      {
        id: "third-party",
        title: "Éléments tiers",
        content: [
          "Certains services ou contenus peuvent incorporer des composants, images, polices, bibliothèques ou données fournis par des tiers.",
          "Ces éléments peuvent être soumis à leurs propres conditions, restrictions ou obligations de mention.",
        ],
      },
      {
        id: "permissions",
        title: "Autorisations",
        content: [
          "Pour toute réutilisation non couverte par une licence explicite, contactez l'adresse indiquée sur cette page avec une description du projet et des éléments concernés.",
          "L'absence de réponse ne doit pas être interprétée comme une autorisation d'usage.",
        ],
      },
      {
        id: "updates",
        title: "Mises à jour",
        content: [
          "Cette page peut évoluer pour refléter de nouveaux contenus, logiciels, marques ou obligations de licence.",
          "La date de dernière mise à jour permet d'identifier la version publique actuellement applicable.",
        ],
      },
    ],
  },
};

export function getLegalDocument(slug: LegalDocumentSlug): LegalDocument {
  return legalDocuments[slug];
}
