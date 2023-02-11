import { useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  gsap.registerPlugin(ScrollTrigger);

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", () => handleResize());
  }, []);

  const showing = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: elem === ".article-left" ? 1600 : -1600,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: elem,
          start: elem === ".article-left" ? "top center" : "-250rem center",
          end: "500rem center",
          toggleActions: "play complete pause reset",
        },
      }
    );
  };

  useEffect(() => {
    showing(".article-left");
  }, []);

  useEffect(() => {
    showing(".article-right");
  }, []);

  const [fullVideo, setFullVideo] = useState(false);

  function handleOpenFullVideo() {
    setFullVideo(true);
  }

  function handleCloseFullVideo() {
    setFullVideo(false);
  }

  return position === "left" ? (
    <article className="article article-left">
      {fullVideo ? (
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
  ) : (
    <article className="article article-right">
      {fullVideo ? (
        <section className="article--fullVideo">
          <button
            className="article--fullVideo__btn"
            onClick={handleCloseFullVideo}
          >
            X
          </button>
          {iframe}
        </section>
      ) : isMobile === false ? (
        <>
          <section className="article--info article--info__right">
            <div className="article--info__title">
              <h2> {name}</h2>
            </div>

            <p>{description}</p>
            <div className="article--info__lieu">
            <FontAwesomeIcon icon={faLocationDot} /> 
            <p>{location}</p>
            </div>
          </section>
          <section className="article--video" onClick={handleOpenFullVideo}>
            <video loop autoPlay muted playsInline preload="none">
              <source src={video} type="video/mp4" />
            </video>
          </section>
        </>
      ) : (
        <>
          <section className="article--video" onClick={handleOpenFullVideo}>
            <video loop autoPlay muted playsInline preload="none">
              <source src={video} type="video/mp4" />
            </video>
          </section>
          <section className="article--info article--info__right">
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
  );
}
