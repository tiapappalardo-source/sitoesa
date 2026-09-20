(() => {
  const lingua = localStorage.getItem('lingua-esa') || 'it';
  const selettore = document.querySelector('#lingua');
  const testi = {
    en: {
      label: 'Language:', nav: ['Home', 'Missions', 'ESA Centres', 'History'],
      index: {
        h1: 'European Space Agency', subtitle: 'More than just a space agency.',
        h2: ['What is ESA?', 'Main activities and centres', 'Scientific missions', 'ESA history'],
        p: [
          'The European Space Agency, known as ESA from the English name European Space Agency, is an international organisation founded in 1975. Its task is to coordinate the space projects of its member European countries.',
          'Its headquarters are in Paris, France. ESA also has several offices and research centres across Europe and works with space agencies around the world. The Director General is Josef Aschbacher, who has been in office since March 2021.',
          'ESA works on space exploration, Earth observation, scientific research, telecommunications and the development of new technologies. By working together, member countries can carry out missions that would be too large and expensive for a single state.',
          'Europe’s spaceport is the Centre Spatial Guyanais in Kourou, French Guiana. Its location near the equator is advantageous for rocket launches because it makes use of Earth’s rotation.',
          'Many ESA scientific missions originate at ESTEC, the European Space Research and Technology Centre, in Noordwijk, the Netherlands. Satellites, scientific instruments and space probes are designed and developed there.',
          'ESOC, in Darmstadt, Germany, controls satellites during their missions. ESRIN, in Frascati, Italy, collects, archives and distributes data obtained from Earth observation.',
          'Other important centres include EAC in Cologne, Germany, which trains astronauts, and ESAC in Spain, dedicated to astronomical research. ECSAT in the United Kingdom focuses on space technology and telecommunications.',
          'After the Second World War, many European scientists moved to the United States or the Soviet Union. During the 1950s it became clear that European countries could not compete alone with the great powers in space.',
          'ESRO, an organisation dedicated to space research, was founded in 1964, while ELDO had been founded in 1962 to develop a European launcher. The two organisations worked together for several years and achieved their first successes by launching scientific satellites.',
          'In 1975 the members of ESRO and ELDO combined their activities and founded the European Space Agency. Since then ESA has carried out numerous missions to study the Solar System, observe Earth and better understand the Universe.',
          'Today ESA continues to work with international space agencies, universities, companies and research institutes. Its goal is to expand knowledge and use space to improve life on Earth.'
        ], table: ['ESA Centre', 'Location', 'Main function', 'Space research and technology', 'Satellite control', 'Earth observation and satellite data']
      },
      missioni: {
        h1: 'ESA missions', h2: 'Main Space Missions and Programmes',
        h3: ['Solar System and Deep Space Exploration', 'Universe Observation and Astrophysics', 'Earth Observation and Navigation'],
        li: [
          'Giotto (1986): The first European deep-space mission, famous for photographing the nucleus of Halley’s Comet up close.',
          'Rosetta (2004–2016): A historic mission that reached comet 67P/Churyumov–Gerasimenko and landed the Philae probe on its nucleus.',
          'Mars Express (2003): An orbiter around Mars for atmospheric mapping and the search for water.',
          'JUICE (2023): Jupiter Icy Moons Explorer, travelling to Jupiter to study its icy moons Ganymede, Callisto and Europa.',
          'BepiColombo (2018): A joint mission with Japan’s JAXA to Mercury.',
          'Hipparcos (1989) & Gaia (2013): Astrometry missions dedicated to precisely measuring the position and movement of more than one billion stars in our Galaxy.',
          'Hubble Space Telescope & James Webb (JWST): Major international collaborations with NASA to observe the deep Universe in visible and infrared light.',
          'Euclid (2023): A space telescope designed to map the geometry of the Universe and study dark matter and dark energy.',
          'Copernicus Programme (Sentinels): The world’s most ambitious Earth-observation satellite network for monitoring climate, the environment and emergencies.',
          'Galileo: Europe’s highly accurate satellite navigation system, independent of the US GPS.'
        ]
      },
      centri: {
        h1: 'ESA centres', h2: 'ESA’s Main Centres in Europe', th: ['Centre', 'Location', 'Main function'],
        td: ['HQ', 'Paris (France)', 'Headquarters; political and strategic decisions.', 'ESTEC', 'Noordwijk (Netherlands)', 'Main technology centre; design and testing of satellites and spacecraft.', 'ESOC', 'Darmstadt (Germany)', 'Mission control centre for managing satellites and probes in orbit.', 'EAC', 'Cologne (Germany)', 'Home of the astronaut corps; selection and training of European astronauts.', 'ESRIN', 'Frascati / Rome (Italy)', 'Earth-observation data management (Copernicus) and Vega launcher programme.', 'ESAC', 'Villanueva de la Cañada / Madrid (Spain)', 'Scientific operations and data processing for astronomy and planetary exploration.', 'ECSAT', 'Harwell (United Kingdom)', 'Satellite telecommunications and commercial applications.', 'ESEC', 'Redu (Belgium)', 'Space safety, satellite tracking and educational programmes.', 'CSG', 'Kourou (French Guiana)', 'European spaceport for Ariane and Vega launch vehicles.']
      },
      storia: {
        h1: 'ESA history', article: 'History and Evolution of the European Space Agency (ESA)',
        h2: ['Origins and Precursors (1950s–1960s)', 'The Founding of ESA (1973–1980)', 'Scientific Missions and Achievements', 'Development of Commercial Launchers', 'Independence and International Relations'],
        li: [
          'Context: After the Second World War, Europe experienced a major loss of scientists to the USA and USSR. During the 1950s it became necessary to join the forces of individual countries to compete in space.',
          'First proposal (1958): Scientists Edoardo Amaldi and Pierre Victor Auger began discussions about founding a European space agency.',
          'ELDO and ESRO (1962): ELDO was founded by six European countries and Australia to develop an independent launcher. ESRO was officially created in 1964 by ten countries for satellite projects and successfully launched seven scientific satellites between 1968 and 1972.',
          'Unification (1973): At the Brussels conference, ELDO and ESRO members decided to merge the two organisations into one body.',
          'First milestones: In 1975 the first mission was launched, the Cos-B gamma-ray probe. On 30 October 1980, final ratification of the agreement confirmed ESA’s legal existence.',
          'Expansion: Many other European states joined the founding countries over time, along with Canada as a special partner.',
          'International collaborations: ESA participated in the IUE orbital telescope, SOHO, Ulysses, Hubble and Cassini–Huygens, whose Huygens module landed on Titan.',
          'Independent exploration: Giotto, the first probe to study Halley’s Comet in deep space, followed by Hipparcos, SMART-1 and Mars Express.',
          'Ariane 1 (1979): Developed as the successor to ELDO projects.',
          'Ariane 4 (1984–2003): Made ESA a leading global player in the commercial launch market.',
          'Ariane 5: Despite some problems in its early tests, it became a highly competitive and reliable launcher.',
          'Autonomy from the USA: From the 1990s ESA sought greater independence from NASA, partly because of US restrictions on technology exchange.',
          'Relations with Russia: An important scientific and logistical partnership with Russia was interrupted after the Russian invasion of Ukraine in 2022.'
        ]
      }
    },
    fr: {
      label: 'Langue :', nav: ['Accueil', 'Missions', 'Centres ESA', 'Histoire'],
      index: { h1: 'Agence spatiale européenne', subtitle: 'Bien plus qu’une agence spatiale.', h2: ['Qu’est-ce que l’ESA ?', 'Activités et centres principaux', 'Missions scientifiques', 'Histoire de l’ESA'], p: ['L’Agence spatiale européenne, appelée ESA, est une organisation internationale fondée en 1975. Elle coordonne les projets spatiaux de ses pays européens membres.', 'Son siège se trouve à Paris, en France. L’ESA possède aussi plusieurs bureaux et centres de recherche en Europe et collabore avec des agences spatiales du monde entier. Son directeur général est Josef Aschbacher, en fonction depuis mars 2021.', 'L’ESA travaille dans l’exploration spatiale, l’observation de la Terre, la recherche scientifique, les télécommunications et le développement de nouvelles technologies. La coopération permet de réaliser des missions trop grandes et coûteuses pour un seul État.', 'Le port spatial européen est le Centre Spatial Guyanais, à Kourou, en Guyane française. Sa position proche de l’équateur est avantageuse pour les lancements, car elle permet d’utiliser la rotation de la Terre.', 'De nombreuses missions scientifiques de l’ESA naissent à l’ESTEC, à Noordwijk, aux Pays-Bas. Les satellites, instruments scientifiques et sondes spatiales y sont conçus et développés.', 'L’ESOC, à Darmstadt en Allemagne, contrôle les satellites pendant leurs missions. L’ESRIN, à Frascati en Italie, collecte, archive et distribue les données d’observation de la Terre.', 'Parmi les autres centres importants figurent l’EAC de Cologne, qui forme les astronautes, l’ESAC en Espagne, consacré à la recherche astronomique, et l’ECSAT au Royaume-Uni, spécialisé dans les technologies spatiales et les télécommunications.', 'Après la Seconde Guerre mondiale, de nombreux scientifiques européens partirent aux États-Unis ou en Union soviétique. Dans les années 1950, il devint évident que les pays européens ne pouvaient pas rivaliser seuls dans le domaine spatial.', 'L’ESRO fut créée en 1964 pour la recherche spatiale et l’ELDO en 1962 pour développer un lanceur européen. Les deux organisations collaborèrent et lancèrent plusieurs satellites scientifiques.', 'En 1975, les membres de l’ESRO et de l’ELDO réunirent leurs activités pour fonder l’Agence spatiale européenne. Depuis, l’ESA mène des missions pour étudier le Système solaire, la Terre et l’Univers.', 'Aujourd’hui, l’ESA collabore avec des agences, universités, entreprises et instituts internationaux afin de développer les connaissances et d’améliorer la vie sur Terre.'], table: ['Centre de l’ESA', 'Lieu', 'Fonction principale', 'Recherche et technologie spatiales', 'Contrôle des satellites', 'Observation de la Terre et données satellitaires'] },
      missioni: { h1: 'Missions de l’ESA', h2: 'Principales missions et programmes spatiaux', h3: ['Exploration du Système solaire et de l’espace profond', 'Observation de l’Univers et astrophysique', 'Observation de la Terre et navigation'] },
      centri: { h1: 'Centres de l’ESA', h2: 'Les principaux centres de l’ESA en Europe', th: ['Centre', 'Lieu', 'Fonction principale'] },
      storia: { h1: 'Histoire de l’ESA', article: 'Histoire et évolution de l’Agence spatiale européenne (ESA)', h2: ['Origines et précurseurs (années 1950–1960)', 'La fondation de l’ESA (1973–1980)', 'Missions scientifiques et réussites', 'Développement des lanceurs commerciaux', 'Indépendance et relations internationales'] }
    },
    es: {
      label: 'Idioma:', nav: ['Inicio', 'Misiones', 'Centros de la ESA', 'Historia'],
      index: { h1: 'Agencia Espacial Europea', subtitle: 'Mucho más que una agencia espacial.', h2: ['¿Qué es la ESA?', 'Actividades y centros principales', 'Misiones científicas', 'Historia de la ESA'], p: ['La Agencia Espacial Europea, conocida como ESA, es una organización internacional fundada en 1975. Coordina los proyectos espaciales de sus países europeos miembros.', 'Su sede está en París, Francia. La ESA también cuenta con oficinas y centros de investigación en Europa y colabora con agencias espaciales de todo el mundo. Su director general es Josef Aschbacher, en el cargo desde marzo de 2021.', 'La ESA trabaja en exploración espacial, observación de la Tierra, investigación científica, telecomunicaciones y desarrollo de nuevas tecnologías. La cooperación permite realizar misiones demasiado grandes y costosas para un solo Estado.', 'El puerto espacial europeo es el Centre Spatial Guyanais, situado en Kourou, Guayana Francesa. Su ubicación cerca del ecuador favorece los lanzamientos al aprovechar la rotación terrestre.', 'Muchas misiones científicas de la ESA nacen en el ESTEC, en Noordwijk, Países Bajos. Allí se diseñan y desarrollan satélites, instrumentos científicos y sondas espaciales.', 'El ESOC, en Darmstadt, Alemania, controla los satélites durante sus misiones. El ESRIN, en Frascati, Italia, recopila, archiva y distribuye datos de observación de la Tierra.', 'Otros centros importantes son el EAC de Colonia, que prepara a los astronautas, el ESAC en España, dedicado a la investigación astronómica, y el ECSAT en el Reino Unido, especializado en tecnología espacial y telecomunicaciones.', 'Después de la Segunda Guerra Mundial, muchos científicos europeos se trasladaron a Estados Unidos o a la Unión Soviética. En los años cincuenta quedó claro que Europa no podía competir sola en el sector espacial.', 'El ESRO nació en 1964 para la investigación espacial y el ELDO en 1962 para desarrollar un lanzador europeo. Ambas organizaciones colaboraron y lanzaron varios satélites científicos.', 'En 1975 los miembros del ESRO y del ELDO unieron sus actividades y fundaron la Agencia Espacial Europea. Desde entonces la ESA realiza misiones para estudiar el Sistema Solar, la Tierra y el Universo.', 'Hoy la ESA colabora con agencias, universidades, empresas e institutos internacionales para ampliar el conocimiento y mejorar la vida en la Tierra.'], table: ['Centro de la ESA', 'Ubicación', 'Función principal', 'Investigación y tecnología espacial', 'Control de satélites', 'Observación de la Tierra y datos satelitales'] },
      missioni: { h1: 'Misiones de la ESA', h2: 'Principales misiones y programas espaciales', h3: ['Exploración del Sistema Solar y del espacio profundo', 'Observación del Universo y astrofísica', 'Observación de la Tierra y navegación'] },
      centri: { h1: 'Centros de la ESA', h2: 'Principales centros de la ESA en Europa', th: ['Centro', 'Ubicación', 'Función principal'] },
      storia: { h1: 'Historia de la ESA', article: 'Historia y evolución de la Agencia Espacial Europea (ESA)', h2: ['Orígenes y precursores (años 50–60)', 'La fundación de la ESA (1973–1980)', 'Misiones científicas y éxitos', 'Desarrollo de lanzadores comerciales', 'Independencia y relaciones internacionales'] }
    }
  };

  if (selettore) {
    selettore.value = lingua;
    selettore.addEventListener('change', e => { localStorage.setItem('lingua-esa', e.target.value); location.reload(); });
  }
  if (lingua === 'it') return;
  const t = testi[lingua] || testi.en;
  document.documentElement.lang = lingua;
  const label = document.querySelector('.selettore-lingua'); if (label) label.textContent = t.label;
  document.querySelectorAll('nav a').forEach((a, i) => { if (t.nav[i]) a.textContent = t.nav[i]; });
  const page = location.pathname.split('/').pop() || 'index.html';
  const key = page === 'missioni.html' ? 'missioni' : page === 'centri.html' ? 'centri' : page === 'storia.html' ? 'storia' : page === 'index.html' ? 'index' : null;
  const listeComplete = {
    fr: {
      missioni: [
        'Giotto (1986) : Première mission européenne dans l’espace profond, célèbre pour ses images du noyau de la comète de Halley.',
        'Rosetta (2004–2016) : Mission historique ayant atteint la comète 67P/Churyumov–Gerasimenko et déposé l’atterrisseur Philae sur son noyau.',
        'Mars Express (2003) : Sonde en orbite autour de Mars pour cartographier l’atmosphère et rechercher de l’eau.',
        'JUICE (2023) : Jupiter Icy Moons Explorer, en route vers Jupiter pour étudier Ganymède, Callisto et Europe.',
        'BepiColombo (2018) : Mission conjointe avec l’agence japonaise JAXA vers Mercure.',
        'Hipparcos (1989) et Gaia (2013) : Missions d’astrométrie mesurant avec précision la position et le mouvement de plus d’un milliard d’étoiles.',
        'Télescope spatial Hubble et James Webb : Grandes collaborations internationales avec la NASA pour observer l’Univers profond.',
        'Euclid (2023) : Télescope spatial destiné à étudier la matière noire et l’énergie noire.',
        'Programme Copernicus (Sentinels) : Réseau de satellites pour surveiller le climat, l’environnement et les situations d’urgence.',
        'Galileo : Système européen de navigation par satellite, très précis et indépendant du GPS américain.'
      ],
      storia: [
        'Contexte : Après la Seconde Guerre mondiale, l’Europe perdit de nombreux scientifiques au profit des États-Unis et de l’URSS. Dans les années 1950, il devint nécessaire d’unir les pays européens dans le domaine spatial.',
        'Première proposition (1958) : Edoardo Amaldi et Pierre Victor Auger commencèrent les discussions pour créer une agence spatiale européenne.',
        'Création de l’ELDO et de l’ESRO (1962) : L’ELDO développa un lanceur indépendant et l’ESRO des projets de satellites scientifiques.',
        'Unification (1973) : Lors de la conférence de Bruxelles, les membres de l’ELDO et de l’ESRO décidèrent de fusionner les deux organisations.',
        'Premiers résultats : La sonde Cos-B fut lancée en 1975. La ratification définitive de l’accord en 1980 confirma l’existence juridique de l’ESA.',
        'Expansion : De nombreux États européens rejoignirent progressivement les pays fondateurs, avec le Canada comme partenaire spécial.',
        'Collaborations internationales : L’ESA participa aux missions IUE, SOHO, Ulysses, Hubble et Cassini–Huygens.',
        'Exploration indépendante : Giotto, Hipparcos, SMART-1 et Mars Express ont marqué les succès scientifiques européens.',
        'Ariane 1 (1979) : Développée comme successeur des projets de l’ELDO.',
        'Ariane 4 (1984–2003) : A fait de l’ESA un acteur majeur du marché des lancements commerciaux.',
        'Ariane 5 : Un lanceur compétitif et fiable malgré des difficultés lors des premiers essais.',
        'Autonomie vis-à-vis des États-Unis : Depuis les années 1990, l’ESA recherche une plus grande indépendance technologique.',
        'Relations avec la Russie : Une coopération scientifique et logistique importante fut interrompue après l’invasion de l’Ukraine en 2022.'
      ]
    },
    es: {
      missioni: [
        'Giotto (1986): Primera misión europea al espacio profundo, famosa por fotografiar el núcleo del cometa Halley.',
        'Rosetta (2004–2016): Misión histórica que llegó al cometa 67P/Churyumov–Gerasimenko y depositó el módulo Philae.',
        'Mars Express (2003): Sonda en órbita de Marte para cartografiar la atmósfera y buscar agua.',
        'JUICE (2023): Jupiter Icy Moons Explorer, en viaje hacia Júpiter para estudiar Ganímedes, Calisto y Europa.',
        'BepiColombo (2018): Misión conjunta con la agencia japonesa JAXA hacia Mercurio.',
        'Hipparcos (1989) y Gaia (2013): Misiones de astrometría que miden con precisión la posición y el movimiento de más de mil millones de estrellas.',
        'Telescopios espaciales Hubble y James Webb: Grandes colaboraciones internacionales con la NASA para observar el Universo profundo.',
        'Euclid (2023): Telescopio espacial para estudiar la materia oscura y la energía oscura.',
        'Programa Copernicus (Sentinels): Red de satélites para vigilar el clima, el medio ambiente y las emergencias.',
        'Galileo: Sistema europeo de navegación por satélite, muy preciso e independiente del GPS estadounidense.'
      ],
      storia: [
        'Contexto: Después de la Segunda Guerra Mundial, Europa perdió muchos científicos frente a Estados Unidos y la URSS. En los años cincuenta fue necesario unir los países europeos en el sector espacial.',
        'Primera propuesta (1958): Edoardo Amaldi y Pierre Victor Auger iniciaron las conversaciones para crear una agencia espacial europea.',
        'Nacimiento de ELDO y ESRO (1962): ELDO desarrolló un lanzador independiente y ESRO proyectos de satélites científicos.',
        'Unificación (1973): En la conferencia de Bruselas, los miembros de ELDO y ESRO decidieron fusionar ambas organizaciones.',
        'Primeros logros: La sonda Cos-B fue lanzada en 1975. La ratificación definitiva de 1980 confirmó la existencia legal de la ESA.',
        'Expansión: Muchos Estados europeos se unieron progresivamente a los países fundadores, junto con Canadá como socio especial.',
        'Colaboraciones internacionales: La ESA participó en IUE, SOHO, Ulysses, Hubble y Cassini–Huygens.',
        'Exploración independiente: Giotto, Hipparcos, SMART-1 y Mars Express marcaron importantes éxitos científicos europeos.',
        'Ariane 1 (1979): Desarrollado como sucesor de los proyectos de ELDO.',
        'Ariane 4 (1984–2003): Convirtió a la ESA en un actor principal del mercado de lanzamientos comerciales.',
        'Ariane 5: Un lanzador competitivo y fiable a pesar de algunas dificultades iniciales.',
        'Autonomía respecto a Estados Unidos: Desde los años noventa, la ESA busca una mayor independencia tecnológica.',
        'Relaciones con Rusia: Una importante cooperación científica y logística se interrumpió tras la invasión de Ucrania en 2022.'
      ]
    }
  };
  if (key && t[key]) {
    const d = t[key];
    if (!d.li && listeComplete[lingua]?.[key]) d.li = listeComplete[lingua][key];
    const h1 = document.querySelector('body > h1'); if (h1 && d.h1) h1.textContent = d.h1;
    if (d.subtitle) { const e = document.querySelector('.sottotitolo'); if (e) e.textContent = d.subtitle; }
    if (d.article) { const e = document.querySelector('article > h1'); if (e) e.textContent = d.article; }
    document.querySelectorAll('h2').forEach((e, i) => { if (d.h2 && d.h2[i]) e.textContent = d.h2[i]; });
    document.querySelectorAll('h3').forEach((e, i) => { if (d.h3 && d.h3[i]) e.textContent = d.h3[i]; });
    if (d.p) document.querySelectorAll('.contenitore-immagine p').forEach((e, i) => { if (d.p[i]) e.textContent = d.p[i]; });
    if (d.li) document.querySelectorAll('section > ul > li, article section > ul > li').forEach((e, i) => { if (d.li[i]) e.textContent = d.li[i]; });
    if (d.th) document.querySelectorAll('th').forEach((e, i) => { if (d.th[i]) e.textContent = d.th[i]; });
    if (d.table) document.querySelectorAll('table td').forEach((e, i) => { if (d.table[i]) e.textContent = d.table[i]; });
    if (key === 'centri' && d.td) document.querySelectorAll('table td').forEach((e, i) => { if (d.td[i]) e.textContent = d.td[i]; });
  }
  document.querySelectorAll('option').forEach(o => { o.textContent = ({it:{it:'Italiano',en:'English',fr:'Français',es:'Español'},en:{it:'Italian',en:'English',fr:'French',es:'Spanish'},fr:{it:'Italien',en:'Anglais',fr:'Français',es:'Espagnol'},es:{it:'Italiano',en:'Inglés',fr:'Francés',es:'Español'}}[lingua] || {})[o.value] || o.textContent; });
  document.querySelectorAll('footer p').forEach(e => e.textContent = lingua === 'fr' ? 'Site informatif consacré à l’Agence spatiale européenne. Réalisé par Mattia Pappalardo.' : lingua === 'es' ? 'Sitio informativo dedicado a la Agencia Espacial Europea. Creado por Mattia Pappalardo.' : 'Information site dedicated to the European Space Agency. Created by Mattia Pappalardo.');

  // La pagina di dettaglio riceve voce e descrizione tramite parametri URL.
  const dettaglio = document.querySelector('#descrizione');
  if (dettaglio) {
    const voce = new URLSearchParams(location.search).get('voce') || '';
    const normalizza = testo => testo.replace(/[’‘]/g, "'").toLocaleLowerCase('it-IT');
    const chiave = normalizza(voce.split(':')[0].trim());
    const dettagli = {
      en: {
        'che cos’è l’esa?': 'The European Space Agency is an international organisation founded in 1975 to coordinate the space expertise, resources and programmes of European countries. Through cooperation, ESA carries out scientific missions, satellites and technologies that would be difficult for one country to develop alone.',
        'che cos’è l\'esa?': 'The European Space Agency is an international organisation founded in 1975 to coordinate the space expertise, resources and programmes of European countries. Through cooperation, ESA carries out scientific missions, satellites and technologies that would be difficult for one country to develop alone.',
        'attività e centri principali': 'ESA activities include Solar System exploration, Earth observation, astronomy, telecommunications, navigation and astronaut training. Its specialised centres cover every stage, from instrument design to mission control and data analysis.',
        'le missioni scientifiche': 'Scientific missions study planets, comets, stars and galaxies by collecting data that cannot be obtained from Earth. European engineers and researchers design sensitive instruments and work with universities and space agencies worldwide.',
        'la storia dell’esa': 'ESA was created by combining the experience of ESRO and ELDO. It has since developed independent expertise in the space sector, taking part in international missions and developing European launchers, satellites and scientific instruments.',
        'estec': 'ESTEC, in Noordwijk in the Netherlands, is ESA’s main technology centre. Satellites, probes and instruments are designed, built and rigorously tested there under simulated launch and space conditions.',
        'esoc': 'ESOC, in Darmstadt, Germany, is the European centre for space operations. Its teams plan mission activities, control spacecraft in orbit and respond to unexpected events to keep satellites and probes operational.',
        'esrin': 'ESRIN, in Frascati, Italy, specialises in Earth observation and satellite data management. The centre processes and distributes information used to monitor the environment, territory, agriculture and climate change.',
        'eac': 'EAC in Cologne hosts the European astronaut corps. Astronauts receive technical, medical and operational training there for work aboard the International Space Station and future exploration missions.',
        'esac': 'ESAC, near Madrid in Spain, stores and processes scientific mission data. Researchers turn it into astronomical and planetary results for the international scientific community.',
        'ecsat': 'ECSAT in Harwell, United Kingdom, supports space applications, telecommunications and innovative technologies, helping transfer research results to companies and practical services.',
        'esec': 'ESEC in Redu, Belgium, contributes to space safety, satellite tracking and education. Its activities help protect orbital infrastructure and monitor the space environment.',
        'csg': 'The Centre Spatial Guyanais in Kourou, French Guiana, is Europe’s spaceport. Its location near the equator favours orbital launches and makes efficient use of Earth’s rotation.',
        'giotto': 'Launched in 1985, Giotto was the first European deep-space probe. In 1986 it crossed the coma of Halley’s Comet and obtained close-up images of its nucleus.',
        'rosetta': 'Rosetta reached comet 67P/Churyumov–Gerasimenko in 2014 after a long interplanetary journey. It studied the comet near the Sun and released the Philae lander.',
        'mars express': 'Operating since 2003, Mars Express studies Mars through high-resolution images, atmospheric analysis and subsurface radar, providing evidence about water beneath the Martian surface.',
        'juice': 'JUICE, the Jupiter Icy Moons Explorer, is travelling to Jupiter to study Ganymede, Callisto and Europa, including their surfaces, atmospheres and possible subsurface oceans.',
        'bepicolombo': 'BepiColombo is an ESA–JAXA mission launched in 2018 to Mercury. It studies the planet’s magnetic field, surface and interior in an extreme environment.',
        'galileo': 'Galileo is Europe’s satellite navigation system. Its satellites and ground stations provide precise positioning for transport, telecommunications, agriculture, rescue services and everyday applications.',
        'copernicus': 'Copernicus is Europe’s Earth-observation programme. Sentinel satellites collect data about climate, oceans, ice, agriculture, pollution and natural disasters.'
      },
      fr: {
        'che cos’è l’esa?': 'L’Agence spatiale européenne est une organisation internationale fondée en 1975 pour coordonner les compétences, les ressources et les programmes spatiaux des pays européens. La coopération permet de réaliser des missions et des technologies impossibles pour un seul pays.',
        'attività e centri principali': 'Les activités de l’ESA comprennent l’exploration du Système solaire, l’observation de la Terre, l’astronomie, les télécommunications, la navigation et la formation des astronautes.',
        'le missioni scientifiche': 'Les missions scientifiques étudient les planètes, les comètes, les étoiles et les galaxies grâce à des instruments conçus par des ingénieurs et des chercheurs européens.',
        'la storia dell’esa': 'L’ESA est née de l’expérience de l’ESRO et de l’ELDO. Elle a développé une expertise européenne autonome dans les lanceurs, les satellites et les instruments scientifiques.',
        'estec': 'L’ESTEC, à Noordwijk aux Pays-Bas, est le principal centre technologique de l’ESA. Les satellites, sondes et instruments y sont conçus, construits et testés.',
        'esoc': 'L’ESOC, à Darmstadt en Allemagne, contrôle les missions spatiales européennes, planifie leurs activités et surveille les véhicules en orbite.',
        'esrin': 'L’ESRIN, à Frascati en Italie, est spécialisé dans l’observation de la Terre et la gestion des données satellitaires.',
        'eac': 'L’EAC de Cologne accueille le corps des astronautes européens et assure leur formation technique, médicale et opérationnelle.',
        'esac': 'L’ESAC, près de Madrid, conserve et traite les données des missions scientifiques pour la communauté internationale.',
        'galileo': 'Galileo est le système européen de navigation par satellite. Il fournit des services de positionnement précis pour de nombreuses applications.',
        'copernicus': 'Copernicus est le programme européen d’observation de la Terre. Les satellites Sentinel surveillent le climat, les océans, les glaces, l’agriculture et les catastrophes naturelles.'
      },
      es: {
        'che cos’è l’esa?': 'La Agencia Espacial Europea es una organización internacional fundada en 1975 para coordinar los conocimientos, recursos y programas espaciales de los países europeos. La cooperación permite realizar misiones y tecnologías imposibles para un solo país.',
        'attività e centri principali': 'Las actividades de la ESA incluyen la exploración del Sistema Solar, la observación de la Tierra, la astronomía, las telecomunicaciones, la navegación y la formación de astronautas.',
        'le missioni scientifiche': 'Las misiones científicas estudian planetas, cometas, estrellas y galaxias mediante instrumentos diseñados por ingenieros e investigadores europeos.',
        'la storia dell’esa': 'La ESA nació de la experiencia del ESRO y del ELDO. Desde entonces ha desarrollado capacidades europeas en lanzadores, satélites e instrumentos científicos.',
        'estec': 'El ESTEC, en Noordwijk, Países Bajos, es el principal centro tecnológico de la ESA. Allí se diseñan, construyen y prueban satélites, sondas e instrumentos.',
        'esoc': 'El ESOC, en Darmstadt, Alemania, controla las misiones espaciales europeas y supervisa los vehículos en órbita.',
        'esrin': 'El ESRIN, en Frascati, Italia, se especializa en observación de la Tierra y gestión de datos satelitales.',
        'eac': 'El EAC de Colonia acoge al cuerpo de astronautas europeo y ofrece formación técnica, médica y operativa.',
        'esac': 'El ESAC, cerca de Madrid, almacena y procesa los datos de las misiones científicas para la comunidad internacional.',
        'galileo': 'Galileo es el sistema europeo de navegación por satélite. Proporciona posicionamiento preciso para numerosas aplicaciones.',
        'copernicus': 'Copernicus es el programa europeo de observación de la Tierra. Los satélites Sentinel vigilan el clima, los océanos, el hielo, la agricultura y las catástrofes naturales.'
      }
    };
    const tradotto = dettagli[lingua]?.[chiave];
    if (tradotto) dettaglio.textContent = tradotto;
    const origine = document.querySelector('#origine');
    if (origine) origine.textContent = lingua === 'fr' ? origine.textContent.replace('Sezione:', 'Section :') : lingua === 'es' ? origine.textContent.replace('Sezione:', 'Sección:') : origine.textContent.replace('Sezione:', 'Section:');
    const indietro = document.querySelector('#indietro');
    if (indietro) indietro.textContent = lingua === 'fr' ? '← Retour à la page précédente' : lingua === 'es' ? '← Volver a la página anterior' : '← Back to previous page';
  }
})();
