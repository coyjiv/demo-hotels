import { Carousel, CarouselProps } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
    children: JSX.Element[] | JSX.Element;
} & Partial<CarouselProps>; 

const PhotoCarousel: React.FC<Props> = ({ children, ...props }) => {
    return <Carousel {...props}>{children}</Carousel>;
};

export { PhotoCarousel };