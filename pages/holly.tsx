import type { NextPage } from "next";

import SoundBoard from "../components/SoundBoard/SoundBoard";
import { HOLLY_IMAGES } from "../data/images/holly";
import { HOLLY_SOUNDS } from "../data/sounds/holly";
import styles from "../styles/Holly.module.scss";

const Holly: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>Holly</h1>
      <SoundBoard sounds={HOLLY_SOUNDS} imagePublicIds={HOLLY_IMAGES} />
    </>
  );
};

export default Holly;
