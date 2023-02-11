import Itemvideo from "../composants/Itemvideo";
import Header from "../layout/Header";

export default function Immobilier({immobilier}) {

  return (
    <>
      <Header />
          <main>
        {immobilier.map((item) => {
          return (
            <Itemvideo
              name={item.name}
              location={item.location}
              description={item.description}
              video={item.video}
              iframe={item.iframe}
              position={item.position}
              key={item.video}
            />
          );
        })}
      </main>
    </>
  );
}
