import { useEffect } from 'react';
import gsap from 'gsap';



export default function Lac({lac}) {

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
        showing(".lac");
      }, [])

    return(
        <div className='lac'>
            <div className='lac--list'>
              {lac.map(item => {
                return  <img  key={item} src={item} alt="lac" loading='lazy' className='lac--list__item'/>
              })}
            </div>
        </div>
    )
}