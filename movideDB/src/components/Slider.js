// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 11,
        slidesToSlide: 3 // optional, default to 1.

  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
        slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
      slidesToSlide: 2 // optional, default to 1.

  }
};

export default function Slider({children}){
    return(
        <Carousel responsive={responsive}>
            {children}
        </Carousel>
    )
}