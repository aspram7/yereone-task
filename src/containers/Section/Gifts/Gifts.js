import React from "react";

import teaCup from "assets/sections/best-selling/tea-cup.jpg";
import giftLight from "assets/sections/best-selling/gift-light.jpg";

import styles from "./Gifts.module.scss";

const Gifts = () => {
  return (
    <div className={styles.section}>
      <div className={styles.teaCup}>
        <img src={teaCup} alt="tea cup" />
        <div>
          <p>
            ԽՈՀԱՆՈՑԱՅԻՆ
            <br />
            <span>ԲԱԺԱԿ</span>
          </p>
          <p className={styles.teaCupPrice}>
            ՍԿՍԱԾ <span>3500Դ</span>
          </p>
        </div>
      </div>
      <div className={styles.giftLight}>
        <img src={giftLight} alt="gift light" />
        <div>
          <p>
            ԶՎԱՐՃԱԼԻ ՆՎԵՐՆԵՐ <br />
            <span>ԼՈՒՅՍԵՐ</span>
          </p>
          <p className={styles.giftLightPrice}>
            ՍԿՍԱԾ <span>1000Դ</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
