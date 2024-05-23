// carousels/BootstrapCarousel.tsx
import { useState, SyntheticEvent } from "react";
import { Carousel } from "react-bootstrap";
import "./Bootstrap.module.css";
import styles from "./Bootstrap.module.css";
import items from "./Items.json";


type CarouselItem = {
  id: number;
  imageUrl: string;
  title: string;
  body: string;
};

type Items = {
  bootstrap: CarouselItem[];
};

export default function BootstrapCarousel() {
  const  bootstrap:CarouselItem[]  = items.items.bootstrap;
  const [index, setIndex] = useState(0);
  const handleSelect = ({selectedIndex, e}:any) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">Visit Docs</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
