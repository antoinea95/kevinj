import Caroussel from "../composants/Caroussel"

export default function Shooting({shooting, chill}) {
  
  return(
    <>
      <Caroussel shoot={shooting} name='Dizygote' model='Eliot, Chloé & Lucie' year='2022' />  
      <Caroussel shoot={chill} name='Take A Chill Pill' model='April, Laura, Gabriela, Kat & Camille' year='2019' />  
    </>
  )
}
