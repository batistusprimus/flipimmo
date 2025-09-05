export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO string YYYY-MM-DD
  excerpt: string;
  content: string; // HTML string rendered from your provided markdown-like text
  status: "published" | "draft";
};

// KISS: on stocke le contenu en HTML minimal pour un rendu rapide côté client
export const posts: BlogPost[] = [
  {
    slug: "marchand-de-biens-2025-opportunites-marche",
    title: "Marchand de biens en 2025 : les nouvelles opportunités du marché immobilier français",
    date: "2025-01-02",
    excerpt:
      "Perspectives 2025 : taux stabilisés, nouvelles attentes des acquéreurs, segments porteurs et zones à privilégier.",
    status: "published",
    content: `
<div class="text-sm text-slate-500">📅 2 janvier 2025</div>
<h2>Marchand de biens en 2025 : les nouvelles opportunités du marché immobilier français</h2>
<p>Le marché immobilier français entame l'année 2025 avec des perspectives renouvelées pour les marchands de biens. Après une période d'ajustement liée aux évolutions des taux d'intérêt et aux nouvelles réglementations, le secteur présente aujourd'hui des opportunités inédites pour les entrepreneurs avisés.</p>

<h2>Un contexte de marché favorable aux professionnels agiles</h2>
<h3>La stabilisation progressive des taux d'intérêt</h3>
<p>Après la forte hausse des taux observée en 2022-2023, le marché du crédit immobilier montre des signes de stabilisation. Cette évolution crée un environnement plus prévisible pour les marchands de biens, qui peuvent désormais planifier leurs opérations avec une meilleure visibilité sur les coûts de financement.</p>
<p>Les banques, initialement prudentes face à la volatilité des taux, retrouvent progressivement leur appétit pour le financement des opérations d'achat-revente. Cette tendance bénéficie particulièrement aux marchands de biens expérimentés, capables de présenter des dossiers solides et des historiques de réussite.</p>

<h3>L'évolution des attentes des acquéreurs</h3>
<p>Les comportements d'achat ont profondément évolué depuis la crise sanitaire. Les acquéreurs privilégient désormais les biens "prêts à habiter", avec une attention particulière portée à la qualité de la rénovation et à la performance énergétique. Cette évolution des mentalités crée un terrain favorable pour les marchands de biens spécialisés dans la valorisation immobilière.</p>
<p>La demande pour les espaces extérieurs (balcons, terrasses, jardins) reste soutenue, particulièrement dans les zones urbaines denses. Les biens offrant ces aménités se vendent plus rapidement et à des prix supérieurs, justifiant des investissements ciblés en aménagement extérieur.</p>

<h2>Les segments porteurs en 2025</h2>
<h3>La rénovation énergétique, un levier de valorisation majeur</h3>
<p>L'obligation de rénovation énergétique pour les logements classés F et G au DPE transforme le paysage immobilier. Cette contrainte réglementaire crée une opportunité unique pour les marchands de biens capables de maîtriser les travaux de performance énergétique.</p>
<p>Les biens "passoires thermiques" se négocient aujourd'hui avec des décotes importantes, parfois de 15 à 25% par rapport aux prix de marché. Cette situation permet aux marchands de biens d'acquérir à des prix attractifs, tout en bénéficiant des aides publiques pour financer une partie des travaux de rénovation.</p>
<p><strong>Exemple concret :</strong> Un appartement de 70m² classé G, acheté 180 000€ au lieu de 220 000€ (décote de 18%), peut être rénové pour 35 000€ avec 15 000€ d'aides publiques. Après rénovation et passage en classe B, sa valeur de revente atteint 250 000€, générant une marge brute de 50 000€.</p>

<h3>Les petites surfaces en centre-ville</h3>
<p>La demande pour les studios et deux-pièces en centre-ville reste dynamique, portée par plusieurs facteurs :</p>
<ul>
  <li>L'augmentation du nombre d'étudiants dans l'enseignement supérieur</li>
  <li>Le développement du télétravail hybride nécessitant des pieds-à-terre urbains</li>
  <li>La recherche de rentabilité locative par les investisseurs</li>
</ul>
<p>Ces biens, souvent délaissés par les particuliers en raison de leur surface réduite, représentent des opportunités intéressantes pour les marchands de biens. L'optimisation de l'espace et la création de rangements sur-mesure permettent de maximiser leur attractivité.</p>

<h3>Les maisons familiales en périphérie</h3>
<p>L'exode urbain amorcé pendant la crise sanitaire se poursuit, alimentant la demande pour les maisons individuelles situées à moins d'une heure des centres urbains. Cette tendance concerne particulièrement les familles avec enfants, à la recherche d'un meilleur équilibre de vie.</p>
<p>Les maisons des années 1970-1980, souvent disponibles à des prix attractifs, offrent un potentiel de valorisation important. Leur rénovation (isolation, modernisation des équipements, réaménagement des espaces) permet de répondre aux attentes contemporaines tout en conservant leur charme authentique.</p>

<h2>Les zones géographiques à privilégier</h2>
<h3>Les métropoles en croissance démographique</h3>
<p>Certaines métropoles françaises continuent d'attirer de nouveaux habitants grâce à leur dynamisme économique et à leur qualité de vie. Nantes, Toulouse, Lyon, Montpellier et Rennes figurent parmi les marchés les plus porteurs pour les marchands de biens.</p>
<p>Ces villes bénéficient d'une demande soutenue, tant pour l'accession à la propriété que pour l'investissement locatif. La rareté du foncier constructible maintient une pression sur les prix, favorable à la valorisation des biens rénovés.</p>

<h3>Le potentiel des villes moyennes</h3>
<p>Les villes de 50 000 à 150 000 habitants présentent des opportunités souvent sous-estimées. Angers, Reims, Dijon, Clermont-Ferrand ou encore Poitiers offrent des conditions d'investissement attractives :</p>
<ul>
  <li>Prix d'acquisition plus accessibles</li>
  <li>Marges de valorisation importantes</li>
  <li>Demande locative stable</li>
  <li>Coûts de rénovation maîtrisés</li>
</ul>
<p>Ces marchés permettent aux marchands de biens débutants de se former et d'acquérir de l'expérience avec des budgets plus modestes, tout en réalisant des marges confortables.</p>

<h3>Les communes périurbaines bien desservies</h3>
<p>L'amélioration des infrastructures de transport (nouvelles lignes de tramway, gares du Grand Paris Express, développement du covoiturage) valorise certaines communes périurbaines. Identifier ces zones avant leur montée en puissance permet de bénéficier de prix d'acquisition avantageux.</p>
<p>L'analyse des projets d'aménagement publics (PLU, SCOT, projets de transport) devient cruciale pour anticiper l'évolution de la demande et des prix.</p>

<h2>Les défis à anticiper</h2>
<h3>La raréfaction de la main-d'œuvre qualifiée</h3>
<p>Le secteur du bâtiment fait face à une pénurie croissante d'artisans qualifiés, particulièrement dans certaines spécialités (électricité, plomberie, carrelage). Cette situation entraîne une augmentation des coûts de main-d'œuvre et des délais d'intervention.</p>
<ul>
  <li>Constituer un réseau d'artisans fidélisés</li>
  <li>Planifier les travaux avec des délais plus longs</li>
  <li>Intégrer l'inflation des coûts dans les calculs de rentabilité</li>
  <li>Privilégier les rénovations moins techniques quand c'est possible</li>
</ul>

<h3>L'évolution de la réglementation</h3>
<p>Le durcissement des normes environnementales et de sécurité impacte les coûts de rénovation. La RE2020, l'obligation de rénovation énergétique et les nouvelles normes d'accessibilité modifient les paramètres économiques des opérations.</p>
<p>Une veille réglementaire active devient indispensable pour anticiper ces évolutions et adapter sa stratégie d'investissement.</p>

<h3>La digitalisation du secteur</h3>
<p>L'émergence des PropTech transforme les pratiques du secteur. Visites virtuelles, estimation automatisée, plateformes de mise en relation évoluent rapidement et modifient les habitudes des acquéreurs. Les marchands de biens doivent intégrer ces outils pour rester compétitifs.</p>

<h2>Conseils pour réussir en 2025</h2>
<h3>Se former aux nouvelles compétences</h3>
<ul>
  <li>Maîtrise des enjeux énergétiques et des aides publiques</li>
  <li>Connaissance des outils digitaux de commercialisation</li>
  <li>Compréhension des attentes environnementales des acquéreurs</li>
  <li>Gestion de projet dans un contexte de pénurie d'artisans</li>
</ul>

<h3>Développer un réseau de partenaires fiables</h3>
<p>Agents immobiliers, artisans, architectes, notaires : chaque partenaire contribue au succès des opérations. Investir du temps dans ces relations représente un avantage concurrentiel durable.</p>

<h3>Adopter une approche data-driven</h3>
<p>L'analyse des données de marché (prix, délais de vente, évolution des stocks) permet d'identifier les opportunités et d'optimiser sa stratégie d'investissement. Les outils d'analyse immobilière se démocratisent.</p>

<h2>Conclusion</h2>
<p>L'année 2025 s'annonce riche en opportunités pour les marchands de biens capables de s'adapter aux nouvelles réalités du marché. La rénovation énergétique, l'évolution des modes de vie et la transformation digitale créent de nouveaux leviers de valorisation. Le succès reposera sur l'anticipation, la maîtrise technique et un réseau fiable.</p>
`,
  },
  {
    slug: "capital-de-depart-financer-premiere-operation",
    title: "Capital de départ : guide complet pour financer sa première opération de marchand de biens",
    date: "2025-01-09",
    excerpt:
      "Apport, frais de notaire, travaux, portage : décomposez le capital et optimisez le financement.",
    status: "published",
    content: `
<div class="text-sm text-slate-500">📅 9 janvier 2025</div>
<h2>Capital de départ : guide complet pour financer sa première opération de marchand de biens</h2>
<p>L'une des questions les plus fréquentes des futurs marchands de biens concerne le capital nécessaire pour débuter. Contrairement aux idées reçues, il n'est pas nécessaire de disposer de centaines de milliers d'euros pour réaliser sa première opération. Cependant, une approche méthodique et une planification rigoureuse sont indispensables pour optimiser ses chances de réussite.</p>

<h2>Comprendre les composantes du capital nécessaire</h2>
<h3>L'apport personnel : la base de votre financement</h3>
<p>L'apport personnel représente généralement 10 à 30% du prix d'acquisition du bien. Cette proportion varie selon votre profil, la nature du bien et la politique de la banque.</p>
<p><strong>Pour un bien à 150 000€</strong>, l'apport personnel peut varier de 15 000€ (10%) à 45 000€ (30%). La tendance actuelle : 15-20% pour les profils expérimentés, 20-25% pour les débutants.</p>

<h3>Les frais de notaire : un coût incompressible</h3>
<p>Les frais de notaire représentent environ 7 à 8% du prix d'acquisition pour un bien ancien, et 2 à 3% pour un bien neuf. Ils comprennent droits de mutation, émoluments, formalités et débours.</p>
<p><strong>Exemple pour un bien ancien à 150 000€ :</strong> 10 500€ à 12 000€.</p>

<h3>La réserve pour travaux : anticiper l'imprévu</h3>
<p>Même avec une estimation précise, prévoir une marge d'aléa de 15 à 25% du budget travaux et une réserve finitions.</p>

<h3>Les frais de portage : le coût du temps</h3>
<p>Intérêts, assurances, taxe foncière, charges de copropriété, assurances, sécurisation. <strong>Pour un bien à 150 000€ financé à 80%</strong> : ~500 à 700€ / mois.</p>

<h2>Calcul détaillé pour différents budgets</h2>
<h3>Opération à 100 000€ : le minimum viable</h3>
<ul>
  <li>Apport (20%) : 20 000€</li>
  <li>Frais de notaire : 7 500€</li>
  <li>Travaux : 15 000€ + aléa 3 000€</li>
  <li>Portage (8 mois) : 4 000€</li>
</ul>
<p><strong>Capital total : 49 500€</strong></p>

<h3>Opération à 200 000€ : l'équilibre optimal</h3>
<ul>
  <li>Apport (18%) : 36 000€</li>
  <li>Frais de notaire : 15 000€</li>
  <li>Travaux : 40 000€ + aléa 8 000€</li>
  <li>Portage (12 mois) : 9 000€</li>
</ul>
<p><strong>Capital total : 108 000€</strong></p>

<h3>Opération à 350 000€ : pour profils expérimentés</h3>
<ul>
  <li>Apport (15%) : 52 500€</li>
  <li>Frais de notaire : 26 250€</li>
  <li>Travaux : 80 000€ + aléa 16 000€</li>
  <li>Portage (18 mois) : 22 500€</li>
</ul>
<p><strong>Capital total : 197 250€</strong></p>

<h2>Stratégies pour optimiser son capital de départ</h2>
<h3>Le partenariat financier</h3>
<ul>
  <li><strong>50/50</strong> : capital et bénéfices partagés</li>
  <li><strong>Investisseur passif</strong> : rémunération fixe + part de bénéfices</li>
  <li><strong>Société de portage</strong> : financement contre part de plus-value</li>
</ul>

<h3>Crédit-relais / court terme</h3>
<p>Durées 12-24 mois, remboursement in fine, apport parfois 10%.</p>

<h3>Optimisation fiscale</h3>
<p>Choix du statut (BIC vs société), TVA, IS.</p>

<h3>Négociation bancaire</h3>
<p>Mise en concurrence, taux, durée, garanties alternatives.</p>

<h2>Erreurs à éviter</h2>
<ul>
  <li>Investir 100% de son capital dans une seule opération</li>
  <li>Oublier frais annexes (commercialisation, assurances, compta, déplacements)</li>
  <li>Sous-estimer délais de revente et portage</li>
</ul>
<p><strong>Règle d'or :</strong> Ne jamais investir plus de 70% de son capital dans une seule opération.</p>

<h2>Solutions alternatives pour les petits budgets</h2>
<p>Portage immobilier (sans travaux), rénovation légère (cosmétique), VEFA (paiements étalés).</p>

<h2>Financement participatif et solutions innovantes</h2>
<ul>
  <li><strong>Crowdfunding</strong> : Fundimmo, Homunity, ClubFunding, Raizers, WiSEED</li>
  <li><strong>Investisseurs privés / family offices</strong></li>
  <li><strong>Crypto</strong> comme garantie (émergent)</li>
</ul>

<h2>Construire sa stratégie financière à long terme</h2>
<ul>
  <li>Réinvestir les bénéfices pour grossir progressivement</li>
  <li>Créer une holding pour optimiser la fiscalité et le financement</li>
  <li>Évoluer vers la promotion à terme</li>
</ul>

<h2>Conclusion</h2>
<p>Le capital nécessaire varie selon le projet et la stratégie. 50 000€ peuvent suffire pour une première opération modeste ; 100 000€ à 150 000€ offrent plus de confort. La réussite repose surtout sur la méthode, la maîtrise des risques et la persévérance.</p>
`,
  },
  {
    slug: "renovation-energetique-levier-valorisation-marchands-de-biens",
    title: "Rénovation énergétique : le nouveau levier de valorisation immobilière pour les marchands de biens",
    date: "2025-01-16",
    excerpt:
      "DPE, travaux prioritaires, aides (MaPrimeRénov', CEE, éco-PTZ) et stratégies de valorisation.",
    status: "published",
    content: `
<div class="text-sm text-slate-500">📅 16 janvier 2025</div>
<h2>Rénovation énergétique : le nouveau levier de valorisation immobilière pour les marchands de biens</h2>
<p>La performance énergétique est devenue un critère déterminant dans l'achat immobilier français. Avec l'interdiction progressive de location des logements classés F et G au DPE, et la sensibilisation croissante des acquéreurs aux enjeux environnementaux, la rénovation énergétique représente aujourd'hui un levier de valorisation majeur pour les marchands de biens.</p>

<h2>Le contexte réglementaire : contraintes et opportunités</h2>
<h3>L'évolution du cadre légal</h3>
<p><strong>2023 :</strong> Interdiction d'augmenter les loyers des logements classés F et G</p>
<p><strong>2025 :</strong> Interdiction de louer les logements classés G (&gt; 450 kWh/m²/an)</p>
<p><strong>2028 :</strong> Extension aux logements classés F</p>
<p><strong>2034 :</strong> Extension aux logements classés E</p>

<h3>L'impact sur les prix de vente</h3>
<ul>
  <li><strong>A-B :</strong> prime de 5 à 15%</li>
  <li><strong>C-D :</strong> prix alignés</li>
  <li><strong>E :</strong> décote de 3 à 8%</li>
  <li><strong>F-G :</strong> décote de 10 à 25%</li>
</ul>

<h2>Comprendre le diagnostic de performance énergétique (DPE)</h2>
<h3>Critères d'évaluation</h3>
<ol>
  <li>Consommation d'énergie primaire (kWh/m²/an)</li>
  <li>Émissions de GES (kg CO2/m²/an)</li>
</ol>
<p>La classe finale correspond à la plus mauvaise des deux notes.</p>

<h3>Postes de consommation analysés</h3>
<ul>
  <li>Chauffage (60-70%)</li>
  <li>Eau chaude sanitaire (10-15%)</li>
  <li>Refroidissement</li>
  <li>Éclairage</li>
  <li>Auxiliaires (ventilation, circulateurs)</li>
</ul>

<h3>Limites et biais du DPE</h3>
<p>Méthode conventionnelle, sensibilité aux données d'entrée, évolutions possibles du calcul. Un audit énergétique complémentaire est recommandé pour les projets d'envergure.</p>

<h2>Les travaux de rénovation énergétique les plus rentables</h2>
<h3>Isolation thermique</h3>
<p><strong>Combles perdus :</strong> 20 à 50€/m² ; économies 25-30% ; aides possibles jusqu'à 100% ; gain 1 à 2 classes.</p>
<p><strong>ITE :</strong> 100 à 200€/m² ; économies 20-25% ; aides 50 à 75€/m² ; gain 1 à 3 classes ; pas de perte de surface.</p>
<p><strong>ITI :</strong> 50 à 100€/m² ; économies 15-20% ; aides 25 à 50€/m² ; perte de 10 à 15 cm par mur.</p>

<h3>Remplacement du système de chauffage</h3>
<p><strong>PAC air-eau :</strong> 8 000 à 15 000€ (aides 4 000 à 11 000€) ; gain 2 à 4 classes.</p>
<p><strong>Chaudière granulés :</strong> 10 000 à 20 000€ (aides 5 000 à 11 000€) ; gain 2 à 3 classes.</p>
<p><strong>Poêle à granulés :</strong> 3 000 à 8 000€ (aides 1 500 à 3 000€) ; gain 1 à 2 classes.</p>

<h3>Menuiseries</h3>
<p>Fenêtres double / triple vitrage : 300 à 800€/m² ; aides 40 à 100€/équipement ; gain 0,5 à 1 classe ; confort accru.</p>

<h3>Ventilation</h3>
<p><strong>VMC double flux :</strong> 3 000 à 8 000€ ; aides 2 000 à 4 000€ ; gain 0,5 à 1 classe ; qualité de l'air et récupération de chaleur.</p>

<h2>Panorama des aides financières</h2>
<h3>MaPrimeRénov'</h3>
<p>Barème 2025 (indicatif) : combles 7€/m² ; murs ext. 15€/m² ; murs int. 7€/m² ; PAC air-eau 2 000€ ; chaudière granulés 5 000€ ; fenêtres 40€/équipement. <strong>Bonus sortie de passoire :</strong> 500€.</p>

<h3>Certificats d'Économies d'Énergie (CEE)</h3>
<p>Montants indicatifs : combles 10-20€/m² ; murs 15-25€/m² ; PAC 2 500-4 000€ ; granulés 2 500-4 000€.</p>

<h3>Éco-PTZ</h3>
<p>Jusqu'à 50 000€ de travaux, sur 20 ans max ; logements avant 1990 ; entreprises RGE.</p>

<h3>Aides locales</h3>
<p>Aides régionales, départementales, communales ; exonérations de taxe foncière ; subventions.</p>

<h2>Stratégies d'investissement pour les marchands de biens</h2>
<h3>Cibler les passoires thermiques</h3>
<ol>
  <li>Identifier les biens sous-valorisés (annonces mentionnant F/G)</li>
  <li>Négocier le prix en intégrant le coût des travaux</li>
  <li>Planifier pour atteindre au moins D (idéalement C/B)</li>
  <li>Valoriser la performance lors de la commercialisation</li>
</ol>

<h3>Optimiser le plan de financement</h3>
<p><strong>Exemple :</strong> Coût 40 000€ ; MPR 8 000€ ; CEE 12 000€ ; Éco-PTZ 20 000€ ; reste à charge réel 0€.</p>

<h3>Anticiper les évolutions réglementaires</h3>
<p>Durcissement attendu : sécuriser la revente, avantage concurrentiel, réponse aux attentes.</p>

<h2>Cas pratiques</h2>
<h3>Cas n°1 : Appartement parisien des années 1960</h3>
<p>DPE initial F (380), acquisition 420 000€ (−15%), travaux 22 000€, aides 7 000€, reste 15 000€, DPE C (150), revente 480 000€ → <strong>+45 000€</strong>.</p>

<h3>Cas n°2 : Maison individuelle en banlieue</h3>
<p>DPE initial G (450), acquisition 280 000€ (−20%), travaux 44 000€, aides 27 000€, éco-PTZ 17 000€, DPE B (80), revente 380 000€ → <strong>+100 000€</strong>.</p>

<h3>Cas n°3 : Immeuble de rapport en ville moyenne</h3>
<p>Travaux 92 000€, aides 52 000€, reste 40 000€, DPE moyen C, valorisation locative +15%, revente 480 000€ → <strong>+120 000€</strong>.</p>

<h2>Gestion de projet et coordination</h2>
<ol>
  <li>Audit énergétique</li>
  <li>Gros œuvre et isolation</li>
  <li>Équipements techniques</li>
  <li>Menuiseries extérieures</li>
  <li>Finitions et contrôles</li>
</ol>
<p>Choisir des entreprises RGE, vérifier assurances et références. Suivi qualité : étanchéité à l'air, ponts thermiques, mise en service, formation des occupants.</p>

<h2>Commercialisation et valorisation</h2>
<ul>
  <li>DPE avant/après, économies estimées, confort et valeur patrimoniale</li>
  <li>Adapter le discours aux cibles (jeunes couples, investisseurs, seniors)</li>
  <li>Timing : automne/hiver (chauffage), printemps/été (confort d'été)</li>
</ul>

<h2>Évolutions technologiques</h2>
<ul>
  <li>PAC haute température, panneaux hybrides, ventilation intelligente</li>
  <li>Objets connectés : thermostats, capteurs, suivi conso</li>
  <li>Matériaux biosourcés</li>
</ul>

<h2>Conclusion</h2>
<p>La rénovation énergétique est un levier de valorisation incontournable. Le succès repose sur une analyse fine, une optimisation des aides, une exécution de qualité et une commercialisation adaptée. Maîtriser ces sujets devient un avantage concurrentiel décisif.</p>
`,
  },
  {
    slug: "choisir-biens-2025-marches-locaux",
    title: "Comment choisir ses biens en 2025 : lecture des marchés locaux",
    date: "2025-02-13",
    excerpt:
      "Indicateurs clés pour sourcer et arbitrer selon la demande locale.",
    status: "published",
    content: `
<div class="text-sm text-slate-500">📅 13 février 2025</div>
<h2>Comment choisir ses biens en 2025 : lecture des marchés locaux</h2>
<p>Bien acheter, c'est d'abord bien lire le marché. En 2025, la clé n'est plus seulement le prix au m² moyen, mais la compréhension fine de la <strong>liquidité</strong> par micro-segment (typologie, état, DPE, micro-localisation).</p>

<h2>Méthode en 5 étapes</h2>
<h3>1) Cadrer le périmètre</h3>
<ul>
  <li>Définir 2 à 3 villes cibles + 1 à 2 communes relais bien connectées (TER/tram).</li>
  <li>Limiter à 10 quartiers maximum pour rester réactif.</li>
</ul>

<h3>2) Mesurer la liquidité</h3>
<ul>
  <li><strong>Délai de vente médian</strong> (objectif: &lt; 45 j pour votre segment cible).</li>
  <li><strong>Stock</strong> (mois d'offre) et tendance 3-6 mois.</li>
  <li><strong>Taux d'écoulement</strong> (ventes/mois ÷ stock).</li>
</ul>

<h3>3) Qualifier la demande</h3>
<ul>
  <li>Flux étudiants / nouveaux emplois / créations d'entreprises.</li>
  <li>Évolution des loyers vs revenus médians (soutenabilité).</li>
  <li>Décote/prime liée au DPE par segment.</li>
</ul>

<h3>4) Cartographier les risques</h3>
<ul>
  <li>ZFE, nuisances (bruit, commerces tardifs), sinistralité.</li>
  <li>Copropriétés dégradées, travaux votés non financés.</li>
  <li>Exposition aux hausses de charges (chauffage collectif ancien, ascenseurs).</li>
</ul>

<h3>5) Décision avec scoring</h3>
<p>Score 0-5 pour Accessibilité, Demande, Offre, Capex, Risque. <strong>Seuil conseil: ≥ 18/25</strong> + marge brute cible ≥ 18%.</p>

<h2>Données et outils</h2>
<ul>
  <li><strong>DVF</strong> (prix signés), notaires, Insee.</li>
  <li>Historique d'annonces (temps de parution, baisses).</li>
  <li>Open data locaux: permis, PLU, projets mobilité.</li>
</ul>

<h2>Cas pratique</h2>
<p><strong>Quartier A (tram à 6 min)</strong> : T2 rénovés DPE C, 3,100 €/m², délai 21 j, stock 1,8 mois → cible prioritaire. <strong>Quartier B (périphérie mal desservie)</strong> : T3 à rénover DPE F, 2,100 €/m², stock 7 mois → à éviter hors très forte décote.</p>

<h2>Checklist de visite micro-locale</h2>
<ul>
  <li>Trafic/bruit aux heures de pointe, stationnement réel.</li>
  <li>Distance écoles/commerces &lt; 8 min à pied.</li>
  <li>Typologie dominante (étudiants/familles) en phase avec le bien.</li>
  <li>Charges de copro et travaux votés/à voter documentés.</li>
</ul>

<h2>Erreurs à éviter</h2>
<ul>
  <li>Se baser sur prix affichés au lieu des <em>prix actés</em>.</li>
  <li>Ignorer l'impact du DPE sur la vitesse de revente.</li>
  <li>Surévaluer la profondeur de marché d'un micro-segment.</li>
</ul>

<h2>Conclusion</h2>
<p>Décidez avec des données, validez sur le terrain, et n'engagez que sur des micro-segments <strong>liquides</strong> où votre création de valeur est claire.</p>
`,
  },
  {
    slug: "negociation-achat-2025-strategies",
    title: "Négociation à l'achat en 2025 : stratégies efficaces",
    date: "2025-04-10",
    excerpt:
      "Techniques de négociation, conditions suspensives et sécurisation du deal.",
    status: "published",
    content: `
<div class="text-sm text-slate-500">📅 10 avril 2025</div>
<h2>Négociation à l'achat en 2025 : stratégies efficaces</h2>
<p>Votre marge se joue à l'acquisition. Une négociation structurée permet de gagner 3 à 12 points de marge sans dégrader la relation.</p>

<h2>Préparation</h2>
<ul>
  <li><strong>Dossier</strong> : preuve de fonds ou accord bancaire, calendrier clair, identité projet.</li>
  <li><strong>Argumentaire</strong> : DPE, pathologies, chiffrage devis (3 devis par lot critique).</li>
  <li><strong>BATNA</strong> : alternative crédible si l'offre échoue (autres biens, délais).</li>
</ul>

<h2>Offres qui convainquent</h2>
<h3>1) Offre « propre »</h3>
<p>Prix en dessous, mais délais fermes, conditions allégées, notaire choisi, rétroplanning joint.</p>
<h3>2) Offre échelonnée</h3>
<p>Prix A (conditions complètes) vs prix B (conditions allégées) pour laisser le choix au vendeur.</p>
<h3>3) Offre réparations</h3>
<p>Décote justifiée par devis opposables, avec partage de preuves (photos, diagnostics).</p>

<h2>Clauses et sécurisation</h2>
<ul>
  <li>Accès anticipé pour études (avec assurance et protocole).</li>
  <li>Calendrier à jalons et pénalités raisonnables et réciproques.</li>
  <li>Conditions suspensives ciblées (urbanisme, servitudes, financement).</li>
</ul>

<h2>Scripts utiles</h2>
<p>« Notre offre B à 212 000€ inclut un délai acte à 30 jours, renonciation à X, et un accès études sous 10 jours. En contrepartie, nous portons le risque travaux chiffré à 23 500€ (devis joints). »</p>

<h2>Étude de cas</h2>
<p>T3 DPE F, amiante dalle : prix affiché 240k. Dossier complet + offre échelonnée, acte à 32 j, travaux justifiés : <strong>prix obtenu 214k</strong> (−10,8%).</p>

<h2>Erreurs à éviter</h2>
<ul>
  <li>Offres sans pièces jointes ni calendrier.</li>
  <li>Conditions suspensives pléthoriques sans concessions.</li>
  <li>Promesses de délai intenables.</li>
</ul>

<h2>Conclusion</h2>
<p>Soignez forme et fond : preuves, délais, clarté. La confiance raccourcit le temps de décision et se monétise.</p>
`,
  },
  {
    slug: "pilotage-travaux-2025-delais-budgets",
    title: "Pilotage des travaux en 2025 : délais, budgets et qualité",
    date: "2025-06-18",
    excerpt:
      "Planning, lots critiques, contrôles qualité et réception.",
    status: "published",
    content: `
<div class="text-sm text-slate-500">📅 18 juin 2025</div>
<h2>Pilotage des travaux en 2025 : délais, budgets et qualité</h2>
<p>La pénurie d'artisans et la pression coûts/délais exigent un pilotage rigoureux. Voici un cadre simple, répliquable.</p>

<h2>Avant-projet</h2>
<ul>
  <li>Programme travaux avec variantes (obligatoires vs optionnelles).</li>
  <li>Devis comparés (3 par lot critique) + analyse technique.</li>
  <li>Planning macro avec marges (buffer 10-15%).</li>
</ul>

<h2>Contrats et démarrage</h2>
<ul>
  <li>Marchés à prix forfaitaire, pénalités calendaires raisonnables.</li>
  <li>Assurances vérifiées (décennale), PPSPS si nécessaire.</li>
  <li>Ordre de service et jalons avec paiements partiels conditionnés.</li>
</ul>

<h2>Exécution</h2>
<h3>Planning type</h3>
<ol>
  <li>Dépose / gros œuvre</li>
  <li>Isolation / menuiseries</li>
  <li>Fluides (électricité, plomberie, CVC)</li>
  <li>Placards / cuisines / finitions</li>
  <li>Nettoyage, DPE, DOE, réception</li>
</ol>
<h3>Qualité</h3>
<ul>
  <li>Points hebdo 30 min, photos, check-list par lot.</li>
  <li>Caméra thermique pour ponts thermiques, tests si pertinent.</li>
  <li>Réceptions partielles et PV de levée de réserves.</li>
</ul>

<h2>Suivi coûts et risques</h2>
<ul>
  <li>Tableau d'engagements vs factures vs budget.</li>
  <li>Alerte automatique au-delà de +5% par lot.</li>
  <li>Registre des risques (probabilité × impact) et plans B artisans.</li>
</ul>

<h2>Documentation de vente</h2>
<p>DOE complet (plans as built, fiches techniques, garanties), DPE final, notices d'usage. C'est un accélérateur de vente et un argument de prix.</p>

<h2>Conclusion</h2>
<p>Un pilotage simple, cadencé, documenté. C'est la meilleure assurance contre les dérives qui mangent la marge.</p>
`,
  },
  {
    slug: "commercialisation-2025-pricing-staging",
    title: "Commercialisation 2025 : pricing, home staging et digital",
    date: "2025-08-22",
    excerpt:
      "Fixer le bon prix, accélérer la vente et optimiser le tunnel.",
    status: "published",
    content: `
<div class="text-sm text-slate-500">📅 22 août 2025</div>
<h2>Commercialisation 2025 : pricing, home staging et digital</h2>
<p>Un bien bien positionné et bien présenté se vend 2 à 4 fois plus vite. Voici une méthode éprouvée.</p>

<h2>Prix juste et stratégie</h2>
<ul>
  <li>Comparer aux ventes DVF (90 derniers jours) plutôt qu'aux annonces.</li>
  <li>Fixer un prix d'appel dans le <strong>top 3</strong> du segment (surface/état/DPE).</li>
  <li>Plan de reprice programmé: J+15 (micro-ajustement), J+30 (ajustement), J+60 (repositionnement).</li>
</ul>

<h2>Mise en scène et médias</h2>
<ul>
  <li>Home staging ciblé: luminaires, cuisines/sdb, rangements, linge de maison.</li>
  <li>Photos pro HDR + plan 2D/3D + visite virtuelle.</li>
  <li>Storytelling axé bénéfices: confort, charges, qualité d'air, DPE.</li>
</ul>

<h2>Distribution et tunnel</h2>
<ul>
  <li>Multi-diffusion portails + réseaux sociaux + liste d'attente acquéreurs.</li>
  <li>Créneaux groupés (2h) le samedi, fiche de visite numérique.</li>
  <li>Dossier prêt: diagnostics, factures, garanties, DPE.</li>
</ul>

<h2>Mesure et pilotage</h2>
<ul>
  <li>Vues → clics → demandes → visites → offres → ventes.</li>
  <li>Taux de conversion par canal. <strong>Seuils</strong>: clic&gt;2,5%, demande&gt;1,2%.</li>
  <li>Temps de vente vs planifié; action si écart &gt; 20%.</li>
</ul>

<h2>Cas pratique</h2>
<p>T2 rénové DPE C: prix de mise 214k (top 3), 2 sessions groupées, 19 visites, 3 offres, vente en 17 jours à 211k.</p>

<h2>Conclusion</h2>
<p>Prix juste, contenu premium, exécution rapide. La vitesse, c'est de la marge préservée.</p>
`,
  },
  {
    slug: "fiscalite-2025-marchand-de-biens",
    title: "Fiscalité 2025 du marchand de biens : points de vigilance",
    date: "2025-09-05",
    excerpt:
      "IS, TVA, frais, DO et bonnes pratiques de conformité.",
    status: "published",
    content: `
<div class="text-sm text-slate-500">📅 05 septembre 2025</div>
<h2>Fiscalité 2025 du marchand de biens : points de vigilance</h2>
<p>La fiscalité du marchand de biens est spécifique et peut impacter directement la marge. Voici les points clés à maîtriser avec votre conseil.</p>

<h2>Cadre d'activité</h2>
<ul>
  <li>Exercice habituel d'achat-revente : imposition en BIC/IS selon la structure.</li>
  <li>TVA potentielle selon la nature de l'opération (sur marge ou sur prix total).</li>
  <li>Attention aux requalifications (promotion assimilée, marchand occasionnel).</li>
</ul>

<h2>TVA : marge ou prix total ?</h2>
<ul>
  <li><strong>TVA sur marge</strong> : conditions cumulatives (bien d'occasion, pas de droit à déduction initial, revente sans transformations assimilables à du neuf, etc.).</li>
  <li><strong>TVA sur prix total</strong> : en cas de transformations lourdes (travaux assimilés à du neuf) ou acquisitions ouvrant droit à déduction.</li>
  <li>Documenter précisément l'étendue des travaux et l'origine du bien.</li>
</ul>

<h2>Impôt (IS) et frais déductibles</h2>
<ul>
  <li>Frais de commercialisation, honoraires, assurances DO/RC, frais financiers affectés au bien.</li>
  <li>Ventilation par opération (centre de coûts) pour objectiver les marges.</li>
  <li>Provisions justifiées (litiges, réserves) selon les règles comptables.</li>
</ul>

<h2>Conformité et contrôles</h2>
<ul>
  <li>Dossier technique: diagnostics, plans, factures, attestations RGE, DOE.</li>
  <li>Suivi TVA (acomptes, autoliquidation, régularisations), livres légaux.</li>
  <li>Registre des décisions (AG, conventions intragroupe, cautions).</li>
</ul>

<h2>Schémas et risques</h2>
<ul>
  <li>Holding: dividendes, avances en compte courant, conventions réglementées.</li>
  <li>Sous-traitance: traçabilité, assurances, attestation de vigilance.</li>
  <li>Prix de transfert intragroupe: principe de pleine concurrence.</li>
</ul>

<h2>Calendrier type</h2>
<ul>
  <li>Mensuel: TVA, paie si salariés.</li>
  <li>Trimestriel: acomptes IS, CFE le cas échéant.</li>
  <li>Annuel: liasse fiscale, PV AGO, rapport de gestion.</li>
</ul>

<h2>Conclusion</h2>
<p>Anticipez la qualification TVA, tenez une documentation solide et appuyez-vous sur un expert-comptable rompu aux opérations de marchands de biens.</p>
`,
  },
];

export function getAllPosts(): BlogPost[] {
  return posts
    .filter((p) => p.status === "published")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug && p.status === "published");
}

export function getAllSlugs(): string[] {
  return posts.filter((p) => p.status === "published").map((p) => p.slug);
}


