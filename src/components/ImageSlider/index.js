import { Carousel } from 'react-carousel-minimal';
import { GalleryContainer, GalleryHeading } from './ImageElements'

function Gallery() {
 const data = [
    {
      image: "https://i.imgur.com/qCxVMOV.jpg",
      caption: "Our Granite used in Walls"
    },
    {
      image: "https://i.imgur.com/lQEGgJH.jpg",
      caption: "Quarry Operations"
    },
    {
      image: "https://i.imgur.com/6mSG4c9.jpg",
      caption: "Small Boulders"
    },
    {
      image: "https://i.imgur.com/HwMt0sV.jpg",
      caption: "Granite Close Up"
    },
    {
      image: "https://i.imgur.com/rOV883Z.jpg",
      caption: "Owner"
    },
    {
      image: "https://i.imgur.com/2jCeGNW.jpg",
      caption: "Quarry Operations"
    },
    {
      image: "https://i.imgur.com/tvIz0rp.jpg",
      caption: "Loading an Order"
    },
    {
      image: "https://i.imgur.com/THPwxz8.jpg",
      caption: "All hands on deck"
    },
    {
      image: "https://i.imgur.com/4kHFnOf.jpg",
      caption: "Summer in the Quarry"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <GalleryContainer id='gallery'>
    <div className="Gallery">
      <div style={{ textAlign: "center"}}>
        <GalleryHeading>Gallery</GalleryHeading>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={4000}
            width="90vw"
            height="32em"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="black"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "400px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
    </GalleryContainer>
  );
}

export default Gallery;