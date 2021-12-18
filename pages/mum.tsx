import type { GetStaticProps, NextPage } from "next";

import SoundBoard from "../components/SoundBoard/SoundBoard";
import { MUM_SOUNDS } from "../data/sounds/mum";
import styles from "../styles/Dad.module.scss";
import getImages, { MEMBER } from "../utils/cloudinary";

const Mum: NextPage<{ images: string[] }> = ({ images }) => {
  return (
    <div>
      <h1 className={styles.title}>Mum</h1>
      <SoundBoard sounds={MUM_SOUNDS} imagePublicIds={images} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const images = await getImages(MEMBER.mum);

  return {
    props: {
      images: images.map(({ public_id }) => public_id),
    },
  };
};

export default Mum;
