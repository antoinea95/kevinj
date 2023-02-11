import kevin from "../images/assets/kevin-1.webp";

export default function Presentation() {
  
  return (
    <>
      <main id="presentation">
        <div className="presentation--picture">
          <img src={kevin} alt="Kevin Jacquet" />
        </div>
        <div className="presentation--text">
          <h2> Kevin Jacquet</h2>
          <h3>  Bienvenue sur mon site officiel ! </h3>
          <p>
            Véritable passionné de photographie
            et de vidéo depuis plus de 10 ans, j’arpente les territoires
            montagneux et urbain dans le but de laisser une trace de mon passage
            sur terre à travers ce que j’appelle des « souvenirs ».
            <br></br>
            <br></br>
            Vous y
            trouverez des endroits riches et variés qui peuvent être ont été
            visités par vous également. Aujourd’hui, j’évolue sur le territoire
            du chablais. Un terrain de jeu immense pour un photographe/
            vidéaste. Entre sommet, lac, biens immobiliers, etc. Je vous propose
            une immersion totale de ma région en espérant qu’elle vous donnera
            envie de venir la voir. 
            <br></br>
            <br></br>
            Je vous rassure, la diversité du monde ne se
            résume pas à ma région. De ce fait, vous pourrez aussi observer des
            images provenant de différents lieux en Europe.
            <br></br>
            <br></br>
            En tout temps, je me
            ferais un plaisir de discuter avec vous, que ce soit sur les lieux
            visités ou les prestations que je peux proposer. 
            <br></br>
            <br></br>
            Bonne visite et à
            bientôt, pour de nouveaux décors. 
            <br></br>
            Kevin
          </p>
        </div>
      </main>
      <div className="test"></div>
    </>
  );
}
