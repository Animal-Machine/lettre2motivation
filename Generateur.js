function choix(tableau) {
  return tableau[Math.floor(Math.random()*tableau.length)]
}

function generation(contenu) {
  let texte = "";
  for (i in contenu) {
    if (typeof contenu[i] === 'string') {
      texte = texte.concat(contenu[i]);
    } else if (Object.prototype.toString.call(contenu[i]) === '[object Array]') {
      texte = texte.concat(choix(contenu[i]));
    } else {
      console.log("Error!");
    }
  }
  return texte;
}

const myForm = document.querySelector('form');
const myLettre = document.querySelector('.lettredemotivation');
const emploiInput = document.querySelector('#emploi');

myForm.addEventListener('submit', (e) => {
  e.preventDefault(); /* Sans ça, j'ai la page qui se recharge */

  const formuleDAppel = choix(["Madame, Monsieur","Madame, Monsieur","Madame, Monsieur","Messieurs","Madame","mon oursin poilu","chien"])
  const contenu = [
    `\n\n\n${formuleDAppel[0].toUpperCase() + formuleDAppel.slice(1)},\n\n`,
    ["jeune dilômé en recherche documentaire","actuellement titulaire d'un DESS en communication","titulaire d'un master en informatique","me brossant les dents avec une banane depuis deux ans","m'injectant régulièrement de l'alcool à brûler dans les veines à l'aide d'une seringue","passionné par la série des gendarmes avec Louis de Funès (j'ai regardé plus de 11000 fois chaque épisode)","\"étudiant\" en psychologie","titulaire d'un brevet de natation des 25 mètres","vice-champion du monde au gobage de blanc de poulet","titulaire d'un BTS en coloriage Mickey"],
    ", c'est ",
    ["tout naturellement","en mangeant des tortillas","avec ambition mais non sans une certaine envie d'uriner","sans penser à mes testicules","avec proactivité","en recrachant une gauffre","en prenant mon bain quotidien de potage aux vermicelles","avec une grande motivation","en chantant sur un playback du club Dorothée"],
    " que ",
    ["je vous présente","j'ai l'honneur de vous présenter","j'ai l'honneur de vous adresser","m'est venue l'idée de vous présenter","je vous adresse","je chie un gros étron et vous présente"],
    " ma candidature ",
    ["pour le poste d","au poste d","pour occuper l'emploi d"],
    (('aeiouy'.includes(emploiInput.value[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()))? "'" : "e ") + emploiInput.value + " ",
    ["dans votre entreprise","dans votre société","au sein de votre société"],
    ".\n\n",
    ["D’un naturel","D’un caractère","Grâce à mes qualités naturelles d'individu"],
    " ",
    ["travailleur","sincère","têtu","poilu","consciencieux","gluant","soupçonneux","videur de truites"],
    " et ",
    ["dynamique","méticuleux","imberbe","fourbe","mangeur de chips","mou","fainéant","dépressif"],
    ", ",
    ["je pense être la personne qu'il vous faut pour ","je pense avoir les qualités requises pour ","je suis certain d'être capable d'"], /* Ajouter une adaptation en "de" mais il fait prendre en compte le morceau de texte suivant. Cela va en faveur de d'abord faire les choix, puis adapter. */
    ["occuper le poste que vous proposez","occuper ce poste","oublier mon amour propre","apporter toute mon énergie à ce poste","insulter un castor","écraser du boudin mais c'est une autre histoire. Je serais ravi de pouvoir occuper le poste que vous proposez","exploser les objectifs! J'ai une de ces patates! Aujourd'hui j'ai réussi à tartiner mes brochettes","établir le record du monde de lancer de saucisses"],
    ["", "", " les doigts dans le nez"," sans pleurer"],
    ". ",
    ["Ayant travaillé encore récemment en tant qu","Grâce à ma longue expérience professionnelle en tant qu","Ayant occupé au cours de ces dernières années l'emploi d","Ayant occupé au cours de ces dernières années le poste d","Ayant plus ou moins \"travaillé\" dernièrement en tant qu"], /* idem */
    ["'agent immobilier","e conseiller artistique","'agent spécialisé polyvalent","e cruciverbiste","e repose-pieds","e commandant Cousteau","e représentant et rapporteur officiel de la commission des finance","e gaveur de lapins","e trieur d'asperges"],
    " ",
    ["à la mairie de Paris","à l'ANPE","à la direction générale de l'équipement","dans une entreprise de maintenance informatique","dans une ferme expérimentale","pour la revue Pistaches et Cognition","dans une boulangerie","chez Mac Donalds","pour le compte d'un établissement financier"],
    ", ",
    ["je dispose d'une expertise non négligeable dans le domaine de","j'ai visionné une fois un reportage sur","j'ai eu l'occasion de parler à mon chat de","j'ai, une fois, entendu un collègue parler de","je crois avoir atteint un niveau d'expert en ce qui concerne","je suis bien entendu au fait des dernières technologies portant sur","j'ai maintenant des compétences sérieuses dans le domaine de","j'ai pu acquérir de nombreuses compétences dans le domaines de","j'ai maintenant des compétences sérieuses dans le domaine de","j'ai eu l'occasion de travailler sur les problématiques liées à","j'ai du me sortir les doigts du fion pour mener à bien des projets concernant"],
    " ",
    ["l'internet deux points zéro","la prise de décision en temps réel","l'injection de substances illicites dans mon propre avant-bras","la psychologie des meubles","la thérapie bidirectionnelle par les plantes","l'analyse décisionnelle assistée par canette de bière","l'art dramatique interactif","la programmation des pizzas digitales","l'ablation des organes vitaux","l'optimisation financière","la peste bubonique","l'étiquetage des chipolatas","la malhonnêteté intellectuelle","l'épilation des poils pubiens à l'époque de l'homme de Néandertal","la rédaction pro-active","l'invention de l'ADN","l'imitation du bruit de la photocopieuse","l'ingestion de mes propres excréments","l'aérodynamisme des crevettes","l'étiquetage des chipolatas","la numérologie comportementale","l'archivage de vieux bouts de bois"],
    ". ",
    ["Mon travail a porté principalement sur","Mon travail a particulièrement porté sur","J'ai particulièrement travaillé sur","Cependant, j'ai particulièrement travaillé sur","Cependant, l'essentiel de mon temps a porté sur","Mes réalisations les plus importantes ont concerné","Mon projet principal a concerné","Mon projet le plus important a porté sur","Je peux dire que je suis particulièrement fier du travail que j'ai pu effectuer sur","Parmis mes réalisations les plus importantes, je peux citer","Ma préoccupation première a toujours concerné"],
    " ",
    ["les insultes qui blessent","l'amélioration de la puissance de mes crachats","la fabrication de microscopes en nougat","l'empilement de petit cailloux","la congélation de l'océan indien","la fabrication de voitures fixes qui ne consomment pas d'énergie","l'enculage de mouettes","le vol à grande échelle","l'amélioration du sort des pigeons","le classement de papiers sans importance","la confection de poneys de synthèse","la fabrication de la Norvège","le remplacement des feuilles de papier A4 par des figues molles","la réalisation d'autoroutes en papier maché","les tatouages involontaires","la réorganisation du service en utilisant le principe de la roulette russe","la correction de l'orbite lunaire","la personnalisation de mon fond d'écran","la création de l'univers","le look de mes tiroirs","l'achat et la revente de morceaux de plastique","la création d'une dimension supplémentaire dans l'hyper-espace","la fabrication d'un cercueil pour chacun des membres de l'équipe","la préparation de salade composées à l'aide du contenu de mes narines","la production de protéines et d'enzymes à l'intérieur de mes cellules","le dévissage des portes de l'entreprise","le marketing à destination des foetus","l'ingestion d'oignons en très grand quantité","la création de nouvelles espèces de maïs, notamment un maïs qui se transforme spontanément en pop-corn quand vous criez \"banzaï\"","la méditation à propos du flan","l'élaboration d'un procédé transformant des crevettes en tapis de bain","la rédaction de reporting concernant l'état de la moquette dans notre entreprise","la fabrication de shampoings qui parlent, pensent, et pleurent quand on les rince","la confection d'explosifs pour enfants","le réglage de ma montre lors du passage à l'heure d'été","la création de sculptures éphémères en jus de citron","la fabrication de meubles en peau de loutre","le cirage de pompes"],
    ".\nTrès motivé à l'idée de pouvoir ",
    ["mettre mon dynamisme au service de votre entreprise","enfin occuper un poste à ma mesure","détruire lentement votre entreprise de l'intérieur","rester assis devant un écran d'ordinateur toute la journée","apporter mon savoir-faire puis l'oublier tout doucement","bénéficier de toilettes propres pendant la journée","enrichir ma collection de trombones","sniffer du plastique brûlé sous mon bureau","manger enfin autre chose que de la poussière","contribuer à un monde meilleur rien qu'en mettant en forme des reportings sous Excel","boire un grand verre de mayonnaise","démontrer ma proactivité au sein de votre société","rédiger des rapports assomants","mettre un terme définitif à ma vie sociale","démontrer ma proactivité au sein de votre société","fabriquer un delta-plane pour chats"],
    ", ",
    ["j'espère de tout coeur que vous retiendrez ma candidature","je souhaite sincèrement intégrer votre équipe","j'espère que ma candidature retiendra toute votre attention","j'espère que ma candidature saura susciter votre interêt"],
    ".\n\n",
    ["À votre disposition pour un entretien, je","Restant à votre disposition pour un éventuel entretien, je","Restant à votre disposition pour un entretien, je","Restant à votre disposition pour un rendez-vous, je","Restant à votre disposition pour une partie de bataille navale, je","Restant à votre disposition pour venir vous cirer les pompes en personne, je","Comme on dit en suédois, \"Göl gräglaaaa olglöl\" (les poneys n'ont pas de dent), je suis à votre disposition pour un entretien en face à face.\nJe","Bref, c'est pas moi qui vais vous attirer des emmerdements. Je"],
    " ",
    ["vous prie de bien vouloir agréer","vous prie de bien vouloir agréer","vous prie d'agréer","fais frire du pâté et vous prie de bien vouloir agréer","vous prie de bien vouloir montrer votre extrème bonté en acceptant de bien vouloir accepter"],
    `, ${formuleDAppel}, `,
    ["l'expression de mes salutations distinguées","l'expression des mes plus cordiales salutations","l'expressions de mes plus sincère salutations"],
    "."
  ];

  /*myLettre.textContent = generation(contenu); /* Alternative : cette ligne en combinaison avec l'utilisation des caractères \r\n et la propriété css white-space: pre-line */
  myLettre.innerHTML = generation(contenu).replace(/\n/g, "<br/>");
});
