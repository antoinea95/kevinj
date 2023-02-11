import { useEffect } from "react";
import gsap from "gsap";
import React from "react";

export default function Architecture({ archi }) {
  

  const showing = (elem) => {
    gsap.fromTo( elem,
      {
        opacity: 0,
        y: -600
      }, {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 1,
      })
  }

  useEffect(() => {
      showing(".archi");
    }, [])

  return (
    <div className="archi">
      <div className="archi--list">
        {archi.map((item) => {
          return (
              <img
              key={item}
                src={item}
                alt="architecture"
                loading="lazy"
                className="archi--list__item"
              />
          );
        })}
      </div>
    </div>
  );
}
