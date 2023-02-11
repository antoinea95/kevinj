import next from "../images/assets/arrow-next.svg";
import prev from "../images/assets/arrow-prev.svg";
import gsap from 'gsap';
import { useEffect } from "react";
import { useRef } from "react";

export default function Caroussel({shoot, name, model, year}) {


    
    
    function handleNext() {
        let caroussel = document.getElementById(name);
                caroussel.scrollBy({
                    top: 0,
                    left: +600,
                    behavior: "smooth",
                  });
    }
    
      function handlePrev() {
        let caroussel = document.getElementById(name);
        caroussel.scrollBy({
          top: 0,
          left: -600,
          behavior: "smooth",
        });
      }
    
    
    
    
      const showing = (elem) => {
        gsap.fromTo( elem, 
          {
            opacity: 0, 
            y: -600
          }, {
            opacity: 1, 
            y: 0,
            delay: 0.4,
            duration: 1,
          })
      }
    
      useEffect(() => {
          showing(".shooting");
        }, [])
    
    
      return (
        <>      
        <article className="shooting">
                <section className="shooting--content">
            <h2 className="shooting--title"> {name} </h2>
            <div className="shooting--info">
              <p> Année : {year} </p>
              <p> Modèles: {model}</p>
            </div>
          </section>
    
          <section className="caroussel">
            <button
              onClick={handlePrev}
              className="caroussel--arrow caroussel--next"
              aria-label="afficher l'image précédente"
            >
              <img src={prev} alt="flèche précédente" />
            </button>
    
            <div className="caroussel--container" id={name}>
              
                {shoot.map((item) => {
                  return (
                     <img
                      key={item}
                      src={item}
                      alt="shooting"
                      className="caroussel--item"
                    />
                  );
                })}
    
            </div>
    
            <button
                onClick={handleNext}
              className="caroussel--arrow caroussel--prev"
              aria-label="afficher l'image suivante"
            >
              <img src={next} alt="flèche suivante" />
            </button>
          </section>
        </article>
    </> 
)
}