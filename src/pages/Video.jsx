import Itemvideo from "../composants/Itemvideo";
import Header from "../layout/Header";

export default function Video({videos}) {

  return (
    <>
    <Header />
      <main>
        <div className="video">
        {videos.map((item) => {
          return (
            <Itemvideo
              key={item.video}
              name={item.name}
              location={item.location}
              description={item.description}
              video={item.video}
              iframe={item.iframe}
              position={item.position}
            />
          );
        })}
        </div>
      </main>
    </>
  );
}
