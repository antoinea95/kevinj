import arrow from '../images/assets/arrow.svg';
import intro from '../images/video/Lac-Taney-short.mp4';
import Social from '../composants/Social';



export default function Hero() {

    return (

        <article className='container'>
            <div className='hero'> 
                <video className="hero--video" loop autoPlay muted playsInline preload='none'>
                    <source src={intro} type='video/mp4' />
                </video>
            </div>
            <Social />
            <a className='hero--arrow' href='#presentation '>
                    <img src= {arrow} alt="flèche pour scroller à la prochaine section"/>
            </a>
        </article>
    )
}