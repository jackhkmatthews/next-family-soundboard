import type { NextPage } from "next";

import SoundPads from "../components/SoundPads/SoundPads";
import { MUM_IMAGES } from "../data/images/mum";
import { MUM_SOUNDS } from "../data/sounds/mum";
import styles from "../styles/Mum.module.scss";

const Mum: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>Mum</h1>
      <SoundPads sounds={MUM_SOUNDS} imagePublicIds={MUM_IMAGES} />
    </>
  );
};

export default Mum;
