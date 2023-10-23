import { useEffect, useRef, useState } from "react";
import "./Carousel.scss";

const IMAGE_WIDTH = 900;

const Carousel = ({ images }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const onClick = (event) => {
    const direction = event.target.dataset.control;

    if (!direction) return;

    let newSelection = direction === "left" ? selectedIdx - 1 : selectedIdx + 1;

    setSelectedIdx(newSelection);
  };

  useEffect(() => {
    if (selectedIdx < 0) {
      setSelectedIdx(images.length - 1);
      console.log(selectedIdx);
    }

    if (selectedIdx > images.length - 1) {
      setSelectedIdx(0);
    }
  }, [selectedIdx]);

  return (
    <>
      <div className="carousel">
        {images.map(({ id, text, Image }, idx) => {
          let translateX = (idx - selectedIdx) * IMAGE_WIDTH;
          return (
            <div
              key={id}
              className="carousel__item"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              <Image />
              <p>{text}</p>
            </div>
          );
        })}
      </div>
      <div className="controls">
        <div
          onClick={onClick}
          className="carousel__control"
          data-control="left"
          role="button"
        >
          ←
        </div>
        <div
          onClick={onClick}
          className="carousel__control"
          data-control="right"
          role="button"
        >
          →
        </div>
      </div>
    </>
  );
};

export default Carousel;
