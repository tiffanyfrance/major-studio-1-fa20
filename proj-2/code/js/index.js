const genres = [
  // 'leaf',
  'indigenous',
  'corridos',
  'ranchera',
  'son-jarocho',
  'banda',
  'norteno',
  'son-huasteco',
  'mariachi'
];

const genreData = {
  'indigenous': {
    map: 'main-map.svg',
    title: 'Native / Early Mestiza',
    x: '672.82',
    textBlock: 'Music was an important part of the culture of native tribes of Mexico, including the Aztecs, Mayans, and Yaqui. These songs display primitive instruments of the pre-Columbus time, as well as the early Spanish influence on indegenious music.',
  },
  'corridos': {
    map: 'main-map.svg',
    title: 'Corridos',
    x: '850',
    textBlock: 'Corridos became popular during the Mexican Revolution. These songs were used as a means of telling the news to a public which was largely unable to read. The themes include oppression, history, daily life for criminals, and other socially relevant topics. They were often set against a Spanish guitar or other string instrument.',
  },
  'ranchera': {
    map: 'main-map.svg',
    title: 'Canción Ranchera',
    x: '715',
    textBlock: 'Ranchera music originiated in the ranches and countryside of Mexico in the late 18th century, marked by vocal slurs and gritos. Love, patriotism, and nature were common themes for this genre. Ranchera is the inspiration for Jalisco music which is the inspiration for Mariachi.',
  },
  'son-jarocho': {
    map: 'son-jarocho-map.svg',
    title: 'Son Jarocho',
    x: '797',
    textBlock: 'Son Jarocho translates to "Sounds of Jarocho", a blended music from the state of Veracruz on the Gulf of Mexico. This genre dates back to the 18th century and contains native themes mixed with Spanish, African, and Carribean influences.',
  },
  'banda': {
    map: 'banda-map.svg',
    title: 'La Banda',
    x: '850',
    textBlock: 'Banda music in Mexico dates from the middle of the 19th century with the arrival of piston metal instruments, such as trumpets and horns. This type of music became popular when communities tried to imitate the military bands, then began to use the genre for dancing. ',
  },
  'norteno': {
    map: 'norteno-map.svg',
    title: 'Norteño',
    x: '862.82',
    textBlock: 'When Maximilian\'s empire was defeated, many of his former army and fellow countrymen fled north into what is now the southwestern United States. Norteño music is a blending of Mexican and Spanish oral and musical traditions, military brass band instrumentation, and Germanic musical styles (e.g. polka and waltz).',
  },
  'son-huasteco': {
    map: 'son-huasteco-map.svg',
    title: 'Son Huasteco / Huapango',
    x: '612',
    textBlock: 'Son Huasteco contains Spanish and indigenous influences. Emsembles include guitarra quinta huapanguera, a Jarana huasteca, a violin, and falsetto singing. The son huasteco is known for flamboyant and virtuoso violin parts. Footwork often danced to son huasteco is called Zapateado. Dates from mid 1800’s.',
  },
  'mariachi': {
    map: 'mariachi-map.svg',
    title: 'Mariachi',
    x: '854',
    textBlock: 'The usual mariachi group today consists of as many as eight violins, two trumpets and at least one guitar, including a high-pitched vihuela and an acoustic bass guitar called a guitarrón, and all players taking turns singing lead and doing backup vocals.',
  },
};

const tooltips = {
  "banda-01": {
    "title": "Marcha Zacatecas",
    "audio": "Marcha-Zacatecas.mp3",
    "desc": "Alludes to the military genre, but soon turns into a highly danceable tune. As often with marches, a lyric trio alternates with the march proper. The genre was much in vogue among rural audiences, and local banderos continued to compose marches well into the twentieth century",
    "img": "bandas.jpg",
    "footerLine1": "Banda de Mocorito de Nilo Gallardo",
    "footerLine2": "Bandas Sinaloenses Música Tambora",
    "link": "https://folkways.si.edu/bandas-sinaloenses-musica-tambora/latin-world/music/album/smithsonian"
  },
  "banda-02": {
    "title": "La India Bonita",
    "audio": "La-India-Bonita.mp3",
    "desc": "Valse composed by Francisco Terrfquez from the village of La Noria, have become banda standards",
    "img": "bandas.jpg",
    "footerLine1": "Banda Típica de Mazatlán",
    "footerLine2": "Bandas Sinaloenses Música Tambora",
    "link": "https://folkways.si.edu/bandas-sinaloenses-musica-tambora/latin-world/music/album/smithsonian"
  },
  "banda-03": {
    "title": "El Guango",
    "audio": "El-Guango.mp3",
    "desc": "'El guango', for example, maybe used to ridicule a rival's manliness in public",
    "img": "bandas.jpg",
    "footerLine1": "Banda Los Guamuchileños de Culiacán",
    "footerLine2": "Bandas Sinaloenses Música Tambora",
    "link": "https://folkways.si.edu/bandas-sinaloenses-musica-tambora/latin-world/music/album/smithsonian"
  },
  "corridos-01": {
    "title": "La Llorona (The Weeping Woman)",
    "audio": "la-llorona.mp3",
    "desc": "La Llorona is a mythical figure of Mexican folklore who comes out at night, clad in white, sobbing and shrieking as she looks for her children. As anyone who looks at her dies, her appearance is considered to be a bad omen.",
    "img": "from-the-sky-of-my-childhood.jpg",
    "footerLine1": "Suni Paz",
    "footerLine2": "From the Sky of My Childhood",
    "link": "https://folkways.si.edu/suni-paz/from-the-sky-of-my-childhood/latin-world/music/album/smithsonian"
  },
  "corridos-02": {
    "title": "Corrido de Cananea",
    "audio": "corrido-de-cananea.mp3",
    "desc": "Gather round, I'll tell you my story. By the leaves of an avocado And it's all about the capture of this reckless desperado. *liberities for rhyming",
    "img": "corridos.jpg",
    "footerLine1": "Henry Cowell",
    "footerLine2": "Corridos",
    "link": "https://folkways.si.edu/mexican-corridos/latin-world/music/album/smithsonian"
  },
  "corridos-03": {
    "title": "El Arreglo Religioso",
    "audio": "el-arreglo-religioso.mp3",
    "desc": "This is the story, gentlemen, /n of the religious troubles./nAnd how before things improved /n many sad days went by. /n Those were difficult times /n in which religion was banned.",
    "img": "corridos.jpg",
    "footerLine1": "Henry Cowell",
    "footerLine2": "Corridos",
    "link": "https://folkways.si.edu/mexican-corridos/latin-world/music/album/smithsonian"
  },
  "corridos-04": {
    "title": "Prietita de Ojos Negros",
    "audio": "prietita-de-ojos-negras.mp3",
    "desc": "Ah, my dark beauty with deep black eyes! /n Don't go telling anyone /n That around here folks are saying /n That I have you in my power",
    "img": "corridos.jpg",
    "footerLine1": "Henry Cowell",
    "footerLine2": "Corridos",
    "link": "https://folkways.si.edu/mexican-corridos/latin-world/music/album/smithsonian"
  },
  "corridos-05": {
    "title": "Toma de Gelava",
    "audio": "toma-de-gelava.mp3",
    "desc": "In April, the first of the month /n On Holy Thursday in the morning, /n Villa went forth from Parral /n To launch and speed up a campaign",
    "img": "corridos.jpg",
    "footerLine1": "Henry Cowell",
    "footerLine2": "Corridos",
    "link": "https://folkways.si.edu/mexican-corridos/latin-world/music/album/smithsonian"
  },
  "corridos-06": {
    "title": "Jesús Leal",
    "audio": "Jesus-Leal.mp3",
    "desc": "On the 28th of january, I wish I could forget, Don Felix Alba came to arrest jesus Leal.",
    "img": "mex-revolution.jpg",
    "footerLine1": "",
    "footerLine2": "The Mexican Revolution Corridos",
    "link": "https://folkways.si.edu/mexican-revolution-corridos-heroes-and-events-1910-1920-and-beyond-cd/latin-world/music/album/smithsonian"
  },
  "corridos-07": {
    "title": "Adelita",
    "audio": "Adelita.mp3",
    "desc": "Adelita is the name of the ungrateful one,  the one who owned my love.  Don't ever think that I would forget her or exchange her for another woman.",
    "img": "mex-revolution.jpg",
    "footerLine1": "",
    "footerLine2": "The Mexican Revolution Corridos",
    "link": "https://folkways.si.edu/mexican-revolution-corridos-heroes-and-events-1910-1920-and-beyond-cd/latin-world/music/album/smithsonian"
  },
  "corridos-08": {
    "title": "México-Americano",
    "audio": "Mexico-Americano.mp3",
    "desc": "The song 'Mexico-Americano' urges Mexican-Americans to see the strengths of being bilingual and bicultural, and to appreciate their rich heritage.",
    "img": "corridos-chicano.jpg",
    "footerLine1": "",
    "footerLine2": "Corridos of the Chicano Movement",
    "link": "https://folkways.si.edu/rumel-fuentes/corridos-of-the-chicano-movement/latin-world/music/album/smithsonian"
  },
  "corridos-09": {
    "title": "Voy a Cantar un Corrido",
    "audio": "Voy-a-Cantar-un-Corrido.mp3",
    "desc": "I will sing a corrido, Of a friend from my village, Whose name was Valentin and who was shot and judged.",
    "img": "traditional-songs-of-mexico.jpg",
    "footerLine1": "",
    "footerLine2": "Traditional Songs of Mexico",
    "link": "https://folkways.si.edu/carlos-jaso-ruben-lopez-mario-quiroz-and-oscar-chavez/traditional-songs-of-mexico/latin-world/music/album/smithsonian"
  },
  "corridos-10": {
    "title": "El Deportado",
    "audio": "El-Deportado.mp3",
    "desc": "I'm going to tell you, gentlemen, (2X) all about my sufferings. Since I left my country, (2X) to come to this nation.",
    "img": "corridos-tragedias.jpg",
    "footerLine1": "Los Hermoanos Banuelos",
    "footerLine2": "Corridos & Tragedias de la Frontera",
    "link": "https://folkways.si.edu/corridos-tragedias-de-la-frontera-mexican-american-ballads-1928-1937/latin-world/music/album/smithsonian"
  },
  "indigenous-01": {
    "title": "Fireworks Music",
    "audio": "fireworks-music.mp3",
    "desc": "Very early in the morning 'about four o'clock' the fiesta is announced to the village by the playing of the chirimia and drum.",
    "img": "indian-music-of-mexico.jpg",
    "footerLine1": "Laura C. Bouton",
    "footerLine2": "Indian music of Mexico sound recording / recorded in Mexico by Laura Boulton",
    "link": "https://folkways-media.si.edu/liner_notes/folkways/FW08851.pdf"
  },
  "indigenous-02": {
    "title": "Flying Pole Dance",
    "audio": "flying-pole-dance.mp3",
    "desc": "Dance called Los Voladores, the Fliers, of the Otomi people.  Fliers dress as birds, wearing tall feather headdresses, and represent the sacred birds which guarded the points of the compass. The music is furnished by an older man who plays a flute and a little drum simulaneously.",
    "img": "indian-music-of-mexico.jpg",
    "footerLine1": "Laura C. Bouton",
    "footerLine2": "Indian music of Mexico sound recording / recorded in Mexico by Laura Boulton",
    "link": "https://folkways-media.si.edu/liner_notes/folkways/FW08851.pdf"
  },
  "indigenous-03": {
    "title": "Deer Dance",
    "audio": "deer-dance.mp3",
    "desc": "The principal dancer is the Deer, or el Venado. On his head he wears of carries a stuffed deer's head, decorated with ribbons and flowers. A cloth hangs down to the knees and is held by a belt which has attached to it  many deer hoofs. Anklets of dried butterfly cocoons full of pebbles produce a pleasant clicking sound while he dances. In each hand he carries a llarge gourd rattle. The dance pantomines the hunt ad death of the deer.",
    "img": "indian-music-of-mexico.jpg",
    "footerLine1": "Laura C. Bouton",
    "footerLine2": "Indian music of Mexico sound recording / recorded in Mexico by Laura Boulton",
    "link": "https://folkways-media.si.edu/liner_notes/folkways/FW08851.pdf"
  },
  "indigenous-04": {
    "title": "Las Pascolas",
    "audio": "las-pascolas.mp3",
    "desc": "Each Pascola dancer has a rattle, a rectangualr wooden frame inside of which brass or bronze discs hand on rods and give a loud jingling sound when shaken. It is suggested that perhaps certain discs of shell found by archeologists may have served a similiar purpose in ancient times. Beside the drummer there is a small fire where he ccan tune his drum by heating the membrane over the embers in the same way that African drummers tune their drums.",
    "img": "indian-music-of-mexico.jpg",
    "footerLine1": "Laura C. Bouton",
    "footerLine2": "Indian music of Mexico sound recording / recorded in Mexico by Laura Boulton",
    "link": "https://folkways-media.si.edu/liner_notes/folkways/FW08851.pdf"
  },
  "indigenous-05": {
    "title": "Yaqui Dance",
    "audio": "Yaqui-dance.mp3",
    "desc": "The music of the Yaquis has retained some original Indian aspects while adopting some Spanish factors; but this hybrid has become integrated through having been picked up by ear over a period of several hundered years.",
    "img": "music-of-the-worlds-people-iv.jpg",
    "footerLine1": "",
    "footerLine2": "Music of the World's People IV",
    "link": "https://folkways.si.edu/music-of-the-worlds-peoples-vol-4/islamica-world/album/smithsonian"
  },
  "indigenous-06": {
    "title": "Danza del Arco, Toreado",
    "audio": "Danza-del-Arco-Toreado.mp3",
    "desc": "",
    "img": "tarascan.jpg",
    "footerLine1": "",
    "footerLine2": "Tarascan and Other Music of Mexico",
    "link": "https://folkways.si.edu/tarascan-and-other-music-of-mexico-songs-and-dances-of-the-mexican-plateau/latin-world/album/smithsonian"
  },
  "indigenous-07": {
    "title": "Medley of Tarahumara Indian Songs",
    "audio": "Medley-of-Tarahumara-Indian-Songs.mp3",
    "desc": "",
    "img": "tarascan.jpg",
    "footerLine1": "Ernestine Gaspar",
    "footerLine2": "Tarascan and Other Music of Mexico",
    "link": "https://folkways.si.edu/tarascan-and-other-music-of-mexico-songs-and-dances-of-the-mexican-plateau/latin-world/album/smithsonian"
  },
  "indigenous-08": {
    "title": "Transverse Flute, With Grain and Oral Centralization, Two Orifices",
    "audio": "Transverse-Flute.mp3",
    "desc": "This diversity which existed in the case of flutes existed also in the cases of whistle jars, trurapets of clay, sea shell instruments, gongs, drums, rasps, rattles etc .",
    "img": "pre-columbia.jpg",
    "footerLine1": "",
    "footerLine2": "Pre-Columbian Instruments",
    "link": "https://folkways.si.edu/jorje-daher/pre-columbian-instruments-of-mexico/american-indian-music-instruction-world/album/smithsonian"
  },
  "mariachi-01": {
    "title": "La Malagueña",
    "audio": "La-Malaguena.mp3",
    "desc": "Sung in the falsetto style typical of some Mexican songs, this exciting song says 'what beautiful eyes you have . . . how I wish they would look at me . . . Even though I am poor I offer you all my love.'",
    "img": "mariachi-sound.jpg",
    "footerLine1": "William Clauson",
    "footerLine2": "The Mariachi Sound",
    "link": "https://folkways.si.edu/william-clauson-and-the-oro-y-plata-de-pepe-chavez-mariachi-ensemble/the-mariachi-sound/latin-world/music/album/smithsonian"
  },
  "mariachi-02": {
    "title": "From Monterrey",
    "audio": "from-monterrey.mp3",
    "desc": "Full-blown type performance born of fierce big-city competition between bands",
    "img": "mariachi-music-of-mexico.jpg",
    "footerLine1": "Sam Eskin",
    "footerLine2": "Mariachi Music of Mexico",
    "link": "https://folkways.si.edu/mariachi-music-of-mexico/latin-world/music/album/smithsonian"
  },
  "mariachi-03": {
    "title": "Ay, Jalisco No Te Rajes!",
    "audio": "ay-jalisco.mp3",
    "desc": "'Jalisco, don't back down,' the tille of this song has long been a rallying cry for all Tapatios.",
    "img": "mariachi-jalisco.jpg",
    "footerLine1": "",
    "footerLine2": "Mariachi Aguilas de Chapala",
    "link": "https://folkways.si.edu/mariachi-aguilas-de-chapala/latin-world/music/album/smithsonian"
  },
  "norteno-01": {
    "title": "Polka",
    "audio": "polka.jpg",
    "desc": "The Polka is one of a very large number of dance forms in Nortena music influenced European migrant culture.",
    "img": "spanish-mexican-folk-music.jpg",
    "footerLine1": "",
    "footerLine2": "Spanish and Mexican Folk Music of New Mexico",
    "link": "https://folkways.si.edu/spanish-and-mexican-folk-music-of-new-mexico/american-folk-latin/album/smithsonian"
  },
  "norteno-02": {
    "title": "Grasshopper Waltz",
    "audio": "grasshopper-waltz.mp3",
    "desc": "Although the composer calls it a waltz, it is too fast to be danced to and is not even in the usual waltz time.",
    "img": "spanish-mexican-folk-music.jpg",
    "footerLine1": "",
    "footerLine2": "Spanish and Mexican Folk Music of New Mexico",
    "link": "https://folkways.si.edu/spanish-and-mexican-folk-music-of-new-mexico/american-folk-latin/album/smithsonian"
  },
  "norteno-03": {
    "title": "Canción Ingles",
    "audio": "cancion-ingles.mp3",
    "desc": "Since I came to this place I have begun to learn English And I am already so advanced That I have learned to say 'yes'",
    "img": "spanish-mexican-folk-music.jpg",
    "footerLine1": "",
    "footerLine2": "Spanish and Mexican Folk Music of New Mexico",
    "link": "https://folkways.si.edu/spanish-and-mexican-folk-music-of-new-mexico/american-folk-latin/album/smithsonian"
  },
  "norteno-04": {
    "title": "Patricia",
    "audio": "patricia.mp3",
    "desc": "The unique accordion music of south Texas and northern Mexico (known as nortefzo on the Mexican side and simply as conjunto on the US side) was little known and even less recognized outside its home turf. Since then, however, this danceable, joyful, lilting music from the vast and isolated border region has developed into perhaps the most widely known of all Mexican regional styles.",
    "img": "accordion.jpg",
    "footerLine1": "Pedro Ayala",
    "footerLine2": "Accordion Conjunto Champs",
    "link": "https://folkways.si.edu/accordion-conjunto-champs/latin-world/music/album/smithsonian"
  },
  "norteno-05": {
    "title": "Yo Me Enamore",
    "audio": "Yo-Me-Enamore.mp3",
    "desc": "I fell in love with a woman thinking that she loved me; I was disillusioned by her ways. And she mocked my love.",
    "img": "tex-mex-conjuntos.jpg",
    "footerLine1": "Fred Zimmerle’s Trio San Antonio",
    "footerLine2": "Conjuntos Norteños",
    "link": "https://folkways.si.edu/los-pinguinos-fred-zimmerles-trio-san-antonio/conjuntos-nortenos/latin-world/music/album/smithsonian"
  },
  "norteno-06": {
    "title": "Yo Soy Norteño",
    "audio": "yo-soy-norteno.mp3",
    "desc": "I'm a northerner from the real north. I'm master of my sorrow; Now my passport is ready. Now I feel free in my heart.",
    "img": "tex-mex-conjuntos.jpg",
    "footerLine1": "Fred Zimmerle’s Trio San Antonio",
    "footerLine2": "Conjuntos Norteños",
    "link": "https://folkways.si.edu/los-pinguinos-fred-zimmerles-trio-san-antonio/conjuntos-nortenos/latin-world/music/album/smithsonian"
  },
  "ranchera-01": {
    "title": "Estoy como el Gallo Giro",
    "audio": "Estoy-como-el-Gallo-Giro.mp3",
    "desc": "I am like a yellowish rooster from the market fence, asking the poultrymen to give me to anyone.",
    "img": "traditional-songs-of-mexico.jpg",
    "footerLine1": "",
    "footerLine2": "Traditional Songs of Mexico",
    "link": "https://folkways.si.edu/carlos-jaso-ruben-lopez-mario-quiroz-and-oscar-chavez/traditional-songs-of-mexico/latin-world/music/album/smithsonian"
  },
  "ranchera-02": {
    "title": "Entre Cerros y Montañas",
    "audio": "Entre-Cerros-y-Montañas.mp3",
    "desc": "Between hills and mountains is the village where I was born. The memories of mornings I lived through.",
    "img": "traditional-songs-of-mexico.jpg",
    "footerLine1": "",
    "footerLine2": "Traditional Songs of Mexico",
    "link": "https://folkways.si.edu/carlos-jaso-ruben-lopez-mario-quiroz-and-oscar-chavez/traditional-songs-of-mexico/latin-world/music/album/smithsonian"
  },
  "ranchera-03": {
    "title": "Yo ya me Voy ya me Voy",
    "audio": "Yo-ya-me-Voy-ya-me-Voy.mp3",
    "desc": "Now I will go away, now I will go, because I don't belong here. My loves are far away from here, they are very far away.",
    "img": "traditional-songs-of-mexico.jpg",
    "footerLine1": "",
    "footerLine2": "Traditional Songs of Mexico",
    "link": "https://folkways.si.edu/carlos-jaso-ruben-lopez-mario-quiroz-and-oscar-chavez/traditional-songs-of-mexico/latin-world/music/album/smithsonian"
  },
  "ranchera-04": {
    "title": "El Toro Bravo (The Wild Bull)",
    "audio": "el-toro-bravo.mp3",
    "desc": "There goes the foreman So drunk he is staggering. There goes the foreman So drunk he is staggering.",
    "img": "peter-hurd.jpg",
    "footerLine1": "Peter Hurd",
    "footerLine2": "Spanish Folk Songs of New Mexico",
    "link": "https://folkways.si.edu/peter-hurd/spanish-folk-songs-of-new-mexico/american-folk-latin/music/album/smithsonian"
  },
  "ranchera-05": {
    "title": "El Palo Verde (The Palo Verde Tree)",
    "audio": "El-Palo-Verde.mp3",
    "desc": "Lady, your paloverde tree was drying; up on you Until last nieht I watered. it and Today by dawn it was in bloom.",
    "img": "peter-hurd.jpg",
    "footerLine1": "Peter Hurd",
    "footerLine2": "Spanish Folk Songs of New Mexico",
    "link": "https://folkways.si.edu/peter-hurd/spanish-folk-songs-of-new-mexico/american-folk-latin/music/album/smithsonian"
  },
  "ranchera-06": {
    "title": "El Sombrerito (The Little Hat)",
    "audio": "El-Sombrerito.mp3",
    "desc": "This hat I am wearing I have brought from Chicon. I have brought from Chicon -. ay, This hat I am wearing",
    "img": "peter-hurd.jpg",
    "footerLine1": "Peter Hurd",
    "footerLine2": "Spanish Folk Songs of New Mexico",
    "link": "https://folkways.si.edu/peter-hurd/spanish-folk-songs-of-new-mexico/american-folk-latin/music/album/smithsonian"
  },
  "ranchera-07": {
    "title": "Las Chaparreras",
    "audio": "Las-Chaparreras.mp3",
    "desc": "When I came to the city I bought myself some chaparreras And then I returned tb the ranch To make love to the ranch girls.",
    "img": "peter-hurd.jpg",
    "footerLine1": "Peter Hurd",
    "footerLine2": "Spanish Folk Songs of New Mexico",
    "link": "https://folkways.si.edu/peter-hurd/spanish-folk-songs-of-new-mexico/american-folk-latin/music/album/smithsonian"
  },
  "ranchera-08": {
    "title": "La Cariñosa (Be Kind to Me)",
    "audio": "La-Carinosa.mp3",
    "desc": "Sorrow oppresses my heart, and you my love are the cause, for being so sweet",
    "img": "songs-of-mexico.jpg",
    "footerLine1": "Timothy Harding",
    "footerLine2": "Songs of Mexico",
    "link": "https://folkways.si.edu/songs-of-mexico/latin-world/music/album/smithsonian"
  },
  "ranchera-09": {
    "title": "Tzutzuquetzutzúmacua",
    "audio": "Tzutzuquetzutzumacua.mp3",
    "desc": "",
    "img": "tarascan.jpg",
    "footerLine1": "",
    "footerLine2": "Tarascan and Other Music of Mexico",
    "link": "https://folkways.si.edu/tarascan-and-other-music-of-mexico-songs-and-dances-of-the-mexican-plateau/latin-world/album/smithsonian"
  },
  "ranchera-10": {
    "title": "La Malagueña Guerrerense",
    "audio": "La-Malaguena-Guerrerense.mp3",
    "desc": "What to do I fly away What to do I fly away Well I like joy With shame I'm singing",
    "img": "Sones-of-Mexico.jpg",
    "footerLine1": "Trio Aguilillas",
    "footerLine2": "Sones of Mexico",
    "link": "https://folkways.si.edu/trio-aguilillas/sones-of-mexico/latin-world/music/album/smithsonian"
  },
  "son-huasteco-01": {
    "title": "Balajú",
    "audio": "Balaju.mp3",
    "desc": "Balaju went off to the wars, hey; And he wouldn't take me along. And he wouldn't take me along - Baleju went off to the wars.",
    "img": "songs-of-mexico.jpg",
    "footerLine1": "Timothy Harding",
    "footerLine2": "Songs of Mexico",
    "link": "https://folkways.si.edu/songs-of-mexico/latin-world/music/album/smithsonian"
  },
  "son-huasteco-02": {
    "title": "La Petenera",
    "audio": "La-Petenera.mp3",
    "desc": "The mestiza music began to develop even a relatively short time after Cortés’s conquest of the land of Huitzilopochtli. Today, more than four centuries later, the Spanish roots can clearly be recognized in most of the songs and dances that do not preserve an outright Indian character...",
    "img": "Sones-of-Mexico.jpg",
    "footerLine1": "",
    "footerLine2": "Sones of Mexico",
    "link": "https://folkways.si.edu/trio-aguilillas/sones-of-mexico/latin-world/music/album/smithsonian"
  },
  "son-huasteco-03": {
    "title": "Huapango Los Trabajos",
    "audio": "Huapango-Los-Trabajos.mp3",
    "desc": "Whole families rose at dawn, drove to the fields, and worked in backbreaking labor until dusk. In spring there would still be frost on the ground, and in summer temperatures could reach 100 degrees.",
    "img": "corridos-chicano.jpg",
    "footerLine1": "",
    "footerLine2": "Corridos of the Chicano Movement",
    "link": "https://folkways.si.edu/rumel-fuentes/corridos-of-the-chicano-movement/latin-world/music/album/smithsonian"
  },
  "son-huasteco-04": {
    "title": "La Llorona",
    "audio": "la-llorona-2.mp3",
    "desc": "They tell me not to cry for her that she left because she wanted to and I tell you folks that crying is an urgent thing.",
    "img": "huapangos.jpg",
    "footerLine1": "",
    "footerLine2": "Huapangos y Sones Huastecos",
    "link": "https://folkways.si.edu/los-caimanes-los-caporales-de-panuco/huapangos-y-sones-huastecos/latin/music/album/smithsonian"
  },
  "son-huasteco-05": {
    "title": "El Caballito",
    "audio": "el-caballito.mp3",
    "desc": "I'm going out to hunt all the way to San Luis Potosi (2X) I'm going out to hunt",
    "img": "huapangos.jpg",
    "footerLine1": "",
    "footerLine2": "Huapangos y Sones Huastecos",
    "link": "https://folkways.si.edu/los-caimanes-los-caporales-de-panuco/huapangos-y-sones-huastecos/latin/music/album/smithsonian"
  },
  "son-huasteco-06": {
    "title": "La Gata",
    "audio": "la-gata.mp3",
    "desc": "How nice it is to work In the boss's house But I lost the job Because of the mischievous cat.",
    "img": "huapangos.jpg",
    "footerLine1": "",
    "footerLine2": "Huapangos y Sones Huastecos",
    "link": "https://folkways.si.edu/los-caimanes-los-caporales-de-panuco/huapangos-y-sones-huastecos/latin/music/album/smithsonian"
  },
  "son-huasteco-07": {
    "title": "El Relampago",
    "audio": "El-Relampago.mp3",
    "desc": "The translated title of this piece means lightening bolt and that describes the quick, driving rhythm that propels this piece.",
    "img": "border-bash.jpg",
    "footerLine1": "",
    "footerLine2": "Border Bash: Tex-Mex Dance Music, Vol. 2",
    "link": "https://folkways.si.edu/los-polkeros-de-ben-tavera-king/border-bash-tex-mex-dance-music-vol-2/latin-world/album/smithsonian"
  },
  "son-jarocho-01": {
    "title": "La Bamba (The Bamba)",
    "audio": "la-bamba.mp3",
    "desc": "If you want to dance the bamba, You must have feet that are nimble",
    "img": "songs-of-mexico.jpg",
    "footerLine1": "Timothy Harding",
    "footerLine2": "Songs of Mexico",
    "link": "https://folkways.si.edu/songs-of-mexico/latin-world/music/album/smithsonian"
  },
  "son-jarocho-02": {
    "title": "Pajarito (Little Bird)",
    "audio": "pajarito.mp3",
    "desc": "Little bird, you're pretty, But even prettier you'd be If you did me a favor, And flew with this little note, To the lady of my heart.",
    "img": "songs-of-mexico.jpg",
    "footerLine1": "Timothy Harding",
    "footerLine2": "Songs of Mexico",
    "link": "https://folkways.si.edu/songs-of-mexico/latin-world/music/album/smithsonian"
  },
  "son-jarocho-03": {
    "title": "Song of the Pollitos",
    "audio": "Song-of-the-Pollitos.mp3",
    "desc": "The Rio Blanco Singers play the original instruments of Veracruz: the harp, the jarana la small guitar), the requinto (a four-string guitar) and a regular Spanish guitar.",
    "img": "fiesta-mexicana.jpg",
    "footerLine1": "Javier de Leon",
    "footerLine2": "Fiesta Mexicana",
    "link": "https://folkways.si.edu/javier-de-leon/fiesta-mexicana-panorama-of-mexico-old-and-new/latin-world/music/album/smithsonian"
  },
  "son-jarocho-04": {
    "title": "La Cumbamba",
    "audio": "La-Cumbamba.mp3",
    "desc": "The Rio Blanco Singers play the original instruments of Veracruz: the harp, the jarana la small guitar), the requinto (a four-string guitar) and a regular Spanish guitar.",
    "img": "fiesta-mexicana.jpg",
    "footerLine1": "Javier de Leon",
    "footerLine2": "Fiesta Mexicana",
    "link": "https://folkways.si.edu/javier-de-leon/fiesta-mexicana-panorama-of-mexico-old-and-new/latin-world/music/album/smithsonian"
  },
  "son-jarocho-05": {
    "title": "El Pajaro Carpintero",
    "audio": "Song-of-El-Pajaro-Carpintero.mp3",
    "desc": "The Rio Blanco Singers play the original instruments of Veracruz: the harp, the jarana la small guitar), the requinto (a four-string guitar) and a regular Spanish guitar.",
    "img": "fiesta-mexicana.jpg",
    "footerLine1": "Javier de Leon",
    "footerLine2": "Fiesta Mexicana",
    "link": "https://folkways.si.edu/javier-de-leon/fiesta-mexicana-panorama-of-mexico-old-and-new/latin-world/music/album/smithsonian"
  },
  "son-jarocho-06": {
    "title": "El Coco",
    "audio": "el-coco.mp3",
    "desc": "While most sones feature a lead singer in close alternation with one or more singers who respond by repeating or answering lhe leader's phrase, 'Coco' is one of the l'ew that ineludes a short. repeated response, hinting at African origins. 'They say that coconut is good cooked in fine spices. but I say no. that chicken is better.'",
    "img": "la-bamba-sones-jarochos-from-veracruz.jpg",
    "footerLine1": "José Gutiérrez & Los Hermanos Ochoa",
    "footerLine2": "La Bamba: Sones Jarochos from Veracruz",
    "link": "https://folkways.si.edu/jose-gutierrez-los-hermanos-ochoa/la-bamba-sones-jarochos-from-veracruz/latin-world/music/album/smithsonian"
  },
  "son-jarocho-07": {
    "title": "El Cascabel",
    "audio": "El-Cascabel.mp3",
    "desc": "The mestiza music began to develop even a relatively short time after Cortés’s conquest of the land of Huitzilopochtli. Today, more than four centuries later, the Spanish roots can clearly be recognized in most of the songs and dances that do not preserve an outright Indian character...",
    "img": "Sones-of-Mexico.jpg",
    "footerLine1": "",
    "footerLine2": "Sones of Mexico",
    "link": "https://folkways.si.edu/trio-aguilillas/sones-of-mexico/latin-world/music/album/smithsonian"
  }
};

const deltaProgress = 1000;
const maxProgress = genres.length * deltaProgress;

const tooltipElem = d3.select('#tooltip');
const progressElem = d3.select('#progress');
let titleElem;
let textBlockElem;
let mexicoElem;

let progress = 0;
let currentGenre = 'None';
let currentTooltip = null;

let isFinal = false;

document.addEventListener('wheel', function (e) {
  if (!isFinal) {
    progress += e.deltaY;
    progress = Math.max(progress, 0);
    progress = Math.min(progress, maxProgress);

    progressElem.style('width', `${(progress / maxProgress) * 100}%`);

    let nextGenre = genres[Math.floor(progress / deltaProgress)];

    if (currentGenre != nextGenre) {
      if (nextGenre) {
        highlight(nextGenre);
      } else {
        anime({
          targets: 'svg, #progress',
          opacity: 0,
          easing: 'easeOutSine',
          duration: 250,
          complete() {
            d3.select('svg').remove();
            bar();
          }
        });
      }
      currentGenre = nextGenre;
    }
  }

  return false;
}, true);

function highlight(genre) {
  d3.selectAll('.plant').each(function () {
    this.classList.remove('dim');

    if (genre && !this.classList.contains(genre)) {
      this.classList.add('dim');
    }
  });

  tooltipElem.style('visibility', 'hidden');

  if (genre) {
    let d = genreData[genre];
    titleElem.text(d.title);
    titleElem.attr('transform', `translate(${d.x} 687.47)`)
    textBlockElem.text(d.textBlock);
    mexicoElem.attr('href', `images/mexico/${d.map}`);
  }
}

(async () => {
  await foo();
})();

async function foo() {
  let res = await fetch(`images/overview.svg`);
  let text = await res.text();
  document.body.insertAdjacentHTML('afterbegin', text);

  titleElem = d3.select('#title');

  d3.select('#text-block').style('display', 'none');

  let svg = d3.select('svg');

  svg.attr('id', 'first-svg');

  textBlockElem = svg.append('foreignObject')
    .attr('width', 583.2188888268968)
    .attr('height', 73.47154123676468)
    .attr('x', 675.359611707816)
    .attr('y', 718.9556235827478)
    .append('xhtml:div')
    .attr('class', 'text-block')
    .html(`Regional Mexican music is a diverse collection of genres, a combination of sounds from the indigenous people of Mexico with European influences. This visualization takes a look at some of the genres, using albums included in the Smithsonian Institute's Folk-ways using handcrafted Otomi-inspired shapes. Timeline: late 1700's early 1900s.`);

  mexicoElem = d3.select('#mexico');
  mexicoElem.html(`<image x="911.9918027912912" y="532.6949638099951" width="116.42" height="76.52" href="images/mexico/main-map.svg" />`);
  mexicoElem = mexicoElem.select('image');

  labelPlants('#Overview > g');
}

async function bar() {
  isFinal = true;

  let res = await fetch(`images/final.svg`);
  let text = await res.text();
  document.body.insertAdjacentHTML('afterbegin', text);

  d3.select('svg').style('opacity', 0);

  labelPlants('#final > g');

  anime({
    targets: 'svg',
    opacity: 1,
    easing: 'easeInSine',
    duration: 250,
  });
}

function labelPlants(selector) {
  d3.selectAll(selector).each(function () {
    /* If third last character is '-' then label as plant */
    if (this.id[this.id.length - 3] === '-') {
      this.classList.add('plant');

      let genre = this.id.substr(0, this.id.length - 3);
      this.classList.add(genre);

      if (genres.includes(genre)) {
        d3.select(this)
          .on('mouseover', () => {
            if (!currentGenre || genre === currentGenre) {
              tooltipElem.style('visibility', 'visible');

              if (currentTooltip != this.id) {
                let t = tooltips[this.id];

                tooltipElem.html(`
                  <h3>${t.title}</h3>
                  <div>
                    <audio controls autoplay src="songs/${t.audio}"></audio>
                  </div>
                  <br>
                  <div>
                  <div class="lower-half">${t.desc}</div>
                  <br>
                  <div class="footer lower-half">
                    <img src="images/albums/${t.img}"> 
                    <div class="desc">
                      <div>${t.footerLine1}</div>
                      <div>${t.footerLine2}</div>
                      <div><a href="${t.link}">Smithsonian Folkways information</a></div>
                    <div>
                  </div>
                  </div>
                `);

                currentTooltip = this.id;
              }

              tooltipElem.select('audio').node().play();
            }
          })
          .on('mousemove', function (e, d) {
            let left = null
            let right = null;

            if (e.offsetX < document.body.clientWidth / 2) {
              left = (e.pageX + 10) + 'px';
            } else {
              let bodyMarginRight = parseInt(window.getComputedStyle(document.body).marginRight);
              let tooltipPaddingRight = parseInt(window.getComputedStyle(tooltipElem.node()).paddingRight);
              right = (document.body.clientWidth - e.pageX + bodyMarginRight + tooltipPaddingRight + 10) + 'px';
            }

            tooltipElem
              .style('top', (e.pageY - 10) + 'px')
              .style('left', left)
              .style('right', right);
          })
          .on('mouseout', () => {
            tooltipElem.select('audio').node()?.pause();
            tooltipElem.style('visibility', 'hidden');
          });
      }
    }
  });
}