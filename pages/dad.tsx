import type { NextPage } from "next";

import SoundPads from "../components/SoundPads/SoundPads";
import { DAD_IMAGES } from "../data/images/dad";
import { DAD_SOUNDS } from "../data/sounds/dad";
import styles from "../styles/Dad.module.scss";

const Dad: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>Dad</h1>
      <SoundPads sounds={DAD_SOUNDS} imagePublicIds={DAD_IMAGES} />
    </>
  );
};

export default Dad;
