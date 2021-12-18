import type { NextPage } from "next";

import SoundBoard from "../components/SoundBoard/SoundBoard";
import { MUM_IMAGES } from "../data/images/mum";
import { MUM_SOUNDS } from "../data/sounds/mum";
import styles from "../styles/Mum.module.scss";

const Mum: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Mum</h1>
      <SoundBoard sounds={MUM_SOUNDS} imagePublicIds={MUM_IMAGES} />
    </div>
  );
};

export default Mum;
