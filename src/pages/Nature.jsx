import { useEffect } from 'react';
import gsap from 'gsap';



export default function Nature({nature}) {

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
        showing(".nature");
      }, [])

    return(
        <div className='nature'>
            <div className='nature--list'>
              {nature.map(item => {
                return  <img  key={item} src={item} alt="nature" loading='lazy' className='nature--list__item'/>
          
              })}
            </div>
        </div>
    )
}