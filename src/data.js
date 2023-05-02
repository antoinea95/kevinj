import archi1 from "./images/photos/architecture/archi-1.webp";
import archi2 from "./images/photos/architecture/archi-2.webp";
import archi3 from "./images/photos/architecture/archi-3.webp";
import archi4 from "./images/photos/architecture/archi-4.webp";
import archi5 from "./images/photos/architecture/archi-5.webp";
import archi6 from "./images/photos/nature/montagne-10.webp";

import shoot2 from "./images/photos/shooting/DSC_0099.webp";
import shoot1 from "./images/photos/shooting/DSC_2311.webp";
import shoot12 from "./images/photos/shooting/DSC_2318.webp";
import shoot3 from "./images/photos/shooting/DSC_2324.webp";
import shoot5 from "./images/photos/shooting/DSC_2351.webp";
import shoot9 from "./images/photos/shooting/DSC_2359.webp";
import shoot7 from "./images/photos/shooting/DSC_2364.webp";
import shoot8 from "./images/photos/shooting/DSC_2377.webp";
import shoot11 from "./images/photos/shooting/DSC_2473.webp";
import shoot10 from "./images/photos/shooting/DSC_2564.webp";
import shoot6 from "./images/photos/shooting/DSC_2620.webp";
import shoot4 from "./images/photos/shooting/DSC_2628.webp";

import chill1 from "./images/photos/shooting/chill/chill_01.webp";
import chill2 from "./images/photos/shooting/chill/chill_02.webp";
import chill3 from "./images/photos/shooting/chill/chill_03.webp";
import chill4 from "./images/photos/shooting/chill/chill_04.webp";
import chill5 from "./images/photos/shooting/chill/chill_05.webp";
import chill6 from "./images/photos/shooting/chill/chill_06.webp";
import chill7 from "./images/photos/shooting/chill/chill_07.webp";
import chill8 from "./images/photos/shooting/chill/chill_08.webp";
import chill9 from "./images/photos/shooting/chill/chill_09.webp";
import chill10 from "./images/photos/shooting/chill/chill_10.webp";
import chill11 from "./images/photos/shooting/chill/chill_11.webp";
import chill12 from "./images/photos/shooting/chill/chill_12.webp";
import chill13 from "./images/photos/shooting/chill/chill_13.webp";
import chill14 from "./images/photos/shooting/chill/chill_14.webp";
import chill15 from "./images/photos/shooting/chill/chill_15.webp";
import chill16 from "./images/photos/shooting/chill/chill_16.webp";
import chill17 from "./images/photos/shooting/chill/chill_17.webp";
import chill18 from "./images/photos/shooting/chill/chill_18.webp";
import chill19 from "./images/photos/shooting/chill/chill_19.webp";
import chill20 from "./images/photos/shooting/chill/chill_20.webp";
import chill21 from "./images/photos/shooting/chill/chill_21.webp";
import chill22 from "./images/photos/shooting/chill/chill_22.webp";
import chill23 from "./images/photos/shooting/chill/chill_23.webp";
import chill24 from "./images/photos/shooting/chill/chill_24.webp";

import nature1 from "./images/photos/nature/nb1.webp";
import nature2 from "./images/photos/nature/nb2.webp";
import nature3 from "./images/photos/nature/nb3.webp";
import nature4 from "./images/photos/nature/nb4.webp";
import nature5 from "./images/photos/nature/Caméléon.jpg";
import nature6 from "./images/photos/nature/Coucou.jpg";
import nature7 from "./images/photos/nature/Hamster.jpg";
import nature8 from "./images/photos/nature/Loup.jpg";

import montagne1 from "./images/photos/nature/montagne-1.webp";
import montagne2 from "./images/photos/nature/montagne-2.webp";
import montagne3 from "./images/photos/nature/montagne-3.webp";
import montagne4 from "./images/photos/nature/montagne-4.webp";
import montagne5 from "./images/photos/nature/montagne-5.webp";
import montagne6 from "./images/photos/nature/montagne-6.webp";
import montagne7 from "./images/photos/nature/montagne-7.webp";
import montagne8 from "./images/photos/nature/montagne-8.webp";
import montagne9 from "./images/photos/nature/montagne-9.webp";
import montagne10 from "./images/photos/nature/montagne-11.webp";
import montagne11 from "./images/photos/nature/montagne-12.webp";
import montagne12 from "./images/photos/nature/montagne-13.webp";
import montagne13 from "./images/photos/nature/montagne-14.webp";
import montagne14 from "./images/photos/nature/montagne-15.webp";

import fouilloux from "./images/video/fouilloux-short.mp4";
import villa from "./images/video/villa-renee-short.mp4";
import lac from "./images/video/Lac-Taney-short.mp4";
import montchanais from "./images/video/mont-chanais-short.mp4";
import montgrange from "./images/video/montgrange.mp4"
import animauxmontgrange from "./images/video/animauxgrange.mp4"
import novel from "./images/video/novel.mp4"

const data = {
  archi: [archi1, archi2, archi4, archi3, archi5, archi6],
  shooting: [
    shoot1,
    shoot2,
    shoot3,
    shoot4,
    shoot5,
    shoot6,
    shoot7,
    shoot8,
    shoot9,
    shoot10,
    shoot11,
    shoot12,
  ],
  chill: [
    chill1,
    chill2,
    chill3,
    chill4,
    chill5,
    chill6,
    chill7,
    chill8,
    chill9,
    chill10,
    chill11,
    chill12,
    chill13,
    chill14,
    chill15,
    chill16,
    chill17,
    chill18,
    chill19,
    chill20,
    chill21,
    chill22,
    chill23,
    chill24,
  ],
  nature: [nature1, nature2, nature3, nature4, nature5, nature6, nature7, nature8],
  montagne: [
    montagne1,
    montagne2,
    montagne3,
    montagne4,
    montagne5,
    montagne6,
    montagne7,
    montagne8,
    montagne9,
    montagne10,
    montagne11,
    montagne12,
    montagne13,
    montagne14
  ],
  videos: [
    {
      position: "left",
      name: "Lac de Taney",
      location: "Vouvry, Suisse",
      description: `Lac situé dans les Alpes suisses, dans le canton de Vaud. Alimenté par les eaux de la rivière de la Givrine et est entouré de montagnes. Le lac de Taney est populaire pour les activités de plein air telles que la randonnée, le vélo et la baignade. Accessible en téléphérique depuis la ville de « Les Diablerets », le lac est considéré comme un site de conservation de la nature important. 
      `,
      video: lac,
      iframe: (
        <iframe
          width="1046"
          height="501"
          src="https://www.youtube.com/embed/gxQSXpPvG4c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },

    {
      position: "right",
      name: "Le Mont Chanais",
      location: "Gex, France",
      description: `Le mont Chanais est un sommet situé dans le Jura suisse, dans les alpes jurassienne et est le point culminant de la région avec une hauteur de plus de 1400 mètre. Il est accessible par un sentier de randonnée depuis le village « Les Rousses » ou la ville de « Gex ». Il offre une vue imprenable sur les Alpes et la plaine suisse. 
      Également populaire pour les activités de plein air telles que la randonnée, le vélo et le ski de fond en hiver.`,
      video: montchanais,
      iframe: (
        <iframe  width="1046"
        height="501" src="https://www.youtube.com/embed/Vxbi1eY2Gqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      ),
    },

    {
      position: "left",
      name: "Le Mont de Grange",
      location: "Châtel, France",
      description: `Montagne située dans la région du Chablais, elle offre une vue imprenable sur les Alpes suisses et le Lac Léman. Le mont est connu pour ses sentiers de randonnée et son architecture historique, notamment son château médiéval et ses maisons en bois typiques de la région. Il attire de nombreux visiteurs pour explorer ses paysages naturels et son patrimoine culturel. 
      Le Mont de Grange est un lieu de choix pour les amateurs de nature, d'histoire et d'aventure. `,
      video: montgrange,
      iframe: (
        <iframe width="1046" height="501" src="https://www.youtube.com/embed/4HRLId7Ccn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      ),
    },

    {
      position: "right",
      name: "Les animaux du Mont de Grange",
      location: "Châtel, France",
      description: `Le Mont de Grange est un véritable sanctuaire pour la faune et la flore, offrant une opportunité unique pour observer la vie sauvage dans son environnement naturel. 
      `,
      video: animauxmontgrange,
      iframe: (
        <iframe width="1046" height="501" src="https://www.youtube.com/embed/-7Myu5MLINk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      ),
    },
    {
      position: "left",
      name: "Novel, un lieu enchanteur",
      location: "Novel, Haute-Savoie",
      description: `Novel, petite station de ski située dans le chablais, en Haute-Savoie. Connue pour son domaine skiable familial et offre des pistes pour tous les niveaux de skieurs. 
      Novel est également un lieu de prédilection pour les amateurs de ski de fond, avec des pistes tracées dans les forêts environnantes. Novel est une destination idéale pour les amoureux 
      de la nature et des sports d'hiver, ainsi que pour ceux souhaitant se ressourcer dans un cadre enchanteur.  
      `,
      video: novel,
      iframe: (
        <iframe width="1046" height="501" src="https://www.youtube.com/embed/uzvRnVywqRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      
        ),
    },
  ],

  immobilier: [
    {
      position: "left",
      name: "Le Fouilloux",
      location: "Rhône",
      description: `Bienvenue dans la périphérie Lyonnaise. Une ancienne maison du siècle passé au centre d’un grand domaine aujourd’hui peu exploité. Cette maison de plusieurs niveaux, ainsi qu’une multitudes de pièces est aujourd’hui utilisé comme résidence secondaire pouvant accueillir plus de 30 personnes. 
      `,
      video: fouilloux,
      iframe: (
        <iframe width="1046" height="501" src="https://www.youtube.com/embed/paf7XfNtIiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      ),
    },

    {
      position: "right",
      name: "Villa Perle",
      location: "Vallangoujardc",
      description: `La Villa Perle est une propriété de luxe situé à Vallangoujard, dans le nord de la France près de la région parisienne. Elle est construite dans un style architectural traditionnel provençal et dispose de plusieurs chambres, d’une cuisine entièrement équipé, d’une piscine extérieure dans un jardin paysager. La villa offre un cadre paisible et tranquille. `,
      video: villa,
      iframe: (
        <iframe  width="1046"
        height="501" src="https://www.youtube.com/embed/XbSQX1xOyiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      ),
    },
  ],
};

export default data;
