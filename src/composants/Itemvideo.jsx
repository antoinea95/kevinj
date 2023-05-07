import { useRef, useState } from "react";
import { useEffect } from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

export default function Video({
  name,
  location,
  description,
  video,
  iframe,
  position,
}) {
  const articleRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


    // create an event listener
    useEffect(() => {
      // define the animation
      const showing = () => {
        const elem = articleRef.current
        gsap.fromTo(
          elem,
          {
            opacity: 0,
            x: 1600,
          },
          {
            opacity: 1,
            x: 0,
            delay: 0.2,
            duration: 1,
            scrollTrigger: {
              trigger: elem,
              start: "-350rem center",
              end: "400rem center",
              toggleActions: "play complete pause reset",
            },
          }
        );
      }

      showing();
    }, []);

  const [fullVideo, setFullVideo] = useState(false);

  function handleOpenFullVideo() {
    setFullVideo(true);
  }

  function handleCloseFullVideo() {
    setFullVideo(false);
  }


  return (
    <article className="article" ref={articleRef}>
      { fullVideo ? (
        <section className="article--fullVideo">
             <button
            className="article--fullVideo__btn"
            onClick={handleCloseFullVideo}
          >
            {" "}
            X{" "}
          </button>
          {iframe}
        </section>
      ) : (
        <>
          <section className="article--video" onClick={handleOpenFullVideo}>
            <video loop autoPlay muted playsInline preload="none">
              <source src={video} type="video/mp4" />
            </video>
          </section>
          <section className="article--info">
            <div className="article--info__title">
              <h2> {name}</h2>
            </div>

            <p>{description}</p>
           
            <div className="article--info__lieu">
            <FontAwesomeIcon icon={faLocationDot} /> 
            <p>{location}</p>
            </div>
          </section>
        </>
      )}
    </article>
  )
}
