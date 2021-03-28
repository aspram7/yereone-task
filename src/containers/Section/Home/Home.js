import React, { useEffect, useState } from "react";
import cx from "classnames";
import Button from "components/Button/Button";

import sliderImage from "assets/sections/section-image-large.jpg";
import sliderImagePastelGreen from "assets/sections/section-image-large-pastel-green.jpg";
import sliderImageRose from "assets/sections/section-image-large-rose.jpg";
import rightImage1 from "assets/sections/section-image-top-right.jpg";
import rightImage2 from "assets/sections/section-image-bottom-right.jpg";
import bestGift from "assets/sections/best-gift.jpg";
import kitchenCup from "assets/sections/kitchen-cup.jpg";
import bookAuthor from "assets/sections/book-author.jpg";
import coffeeCup from "assets/sections/coffee-cup.jpg";

import styles from "./Home.module.scss";

const sliderImages = [sliderImage, sliderImagePastelGreen, sliderImageRose];

const Home = () => {
  const [activeSlider, setActiveSlider] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlider((prev) => (prev >= sliderImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.slider}>
        <img src={sliderImages[activeSlider]} alt="slider" />
        <div>
          <p className={styles.watches}>ԺԱՄԱՑՈՒՅՑՆԵՐ</p>
          <p className={styles.sale}>ԶԵՂՉ</p>
          <p className={styles.salePercent}>20%-30%</p>
          <Button>ԱՎԵԼԻՆ</Button>
          <div className={styles.sliderDots}>
            <div>
              <div
                className={cx(styles.sliderDot, activeSlider === 0 && styles.active)}
                onClick={() => setActiveSlider(0)}
              >
                <span></span>
              </div>
              <div
                className={cx(styles.sliderDot, activeSlider === 1 && styles.active)}
                onClick={() => setActiveSlider(1)}
              >
                <span></span>
              </div>
              <div
                className={cx(styles.sliderDot, activeSlider === 2 && styles.active)}
                onClick={() => setActiveSlider(2)}
              >
                <span></span>
              </div>
            </div>
            <span className={styles.border1}></span>
            <span className={styles.border2}></span>
          </div>
        </div>
      </div>
      <div className={styles.imageSide1}>
        <img src={rightImage1} alt="slider" />
        <div className={styles.imageText1}>
          <p>
            ԶՎԱՐՃԱԼԻ <br /> <span>ՆՎԵՐՆԵՐ</span>
          </p>
        </div>
        <div className={styles.imageText2}>
          <p>ԺԱՄԱՑՈՒՅՑ</p>
        </div>
      </div>
      <div className={styles.imageSide2}>
        <img src={rightImage2} alt="slider" />
        <div>
          <p>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</p>
          <p className={styles.imageSideSale}>-70%</p>
        </div>
      </div>
      <div className={styles.image1}>
        <img src={bestGift} alt="slider" />
        <div>
          <p className={styles.imageSale1}>-10%</p>
          <p className={styles.imageText1}>
            ԼԱՎԱԳՈՒՅՆ <br /> <span>ՆՎԵՐՆԵՐ</span>
          </p>
        </div>
      </div>
      <div className={styles.image2}>
        <img src={kitchenCup} alt="slider" />
        <div>
          <p className={styles.imageTextKitchen2}>ԽՈՀԱՆՈՑԱՅԻՆ</p>
          <p className={styles.imageTextCup2}>ԲԱԺԱԿ</p>
        </div>
      </div>
      <div className={styles.image3}>
        <img src={bookAuthor} alt="slider" />
        <div>
          <p className={styles.imageTextBook3}>ԳԻՐՔ</p>
          <p className={styles.imageTextAuthor3}>ՀԵՂԻՆԱԿ</p>
        </div>
      </div>
      <div className={styles.image4}>
        <img src={coffeeCup} alt="slider" />
        <div>
          <p className={styles.imageTextNewProducts4}>Նոր Տեսականի</p>
          <p className={styles.imageTextCoffee4}>ՍՈՒՐՃԻ</p>
          <p className={styles.imageTextCup4}>ԲԱԺԱԿ</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
