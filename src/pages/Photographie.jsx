import React from "react";
import Header from "../layout/Header";
import Shooting from './Shooting';
import Architecture from './Architecture';
import Montagne from "./Montagne";
import Nature from './Nature';
import { useState, useRef } from "react";
import Lac from "./Lac";

export default function Photographie({nature, shooting, archi, montagne, chill, lac}) {

  const [ComponentName, setComponentName ] = useState('Shooting');

  function selectCategory(e) {
    let items = document.querySelectorAll('.photographie--item');

    items.forEach(item => {
      let classArr = item.classList;

      if(classArr.value === 'photographie--item active') {
        item.classList.remove('active');
      }
    })

    e.target.classList.add('active');
    setComponentName(e.target.innerText);
  }

 


  return (
    <>
      <Header />
      <main>
          <ul className="photographie--category">
            <li className="photographie--item active" onClick={selectCategory}> Shooting </li>
            <li className="photographie--item" onClick={selectCategory}> Architecture </li>
            <li className="photographie--item" onClick={selectCategory}> Montagne </li>
            <li className="photographie--item" onClick={selectCategory}> Nature </li>
            <li className="photographie--item" onClick={selectCategory}> Lac </li>
          </ul>

          <>
              {ComponentName === 'Shooting' && <Shooting shooting={shooting} chill={chill} />}
              {ComponentName === 'Architecture' && <Architecture archi={archi} />}
              {ComponentName === 'Montagne' && <Montagne montagne={montagne}/>}
              {ComponentName === 'Nature' && <Nature nature={nature}/>}
              {ComponentName === 'Lac' && <Lac lac={lac}/>}
          </>
      </main>
    </>
  );
}
