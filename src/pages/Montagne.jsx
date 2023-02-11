import { useEffect } from 'react';
import gsap from 'gsap';



export default function Montagne({montagne}) {

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
        showing(".montagne");
      }, [])

    return(
        <div className='montagne'>
            <div className='montagne--list'>
              {montagne.map(item => {
                return  <img  key={item} src={item} alt="montagne" loading='lazy' className='montagne--list__item'/>
          
              })}
            </div>
        </div>
    )
}