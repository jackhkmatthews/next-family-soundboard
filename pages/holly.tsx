import type { GetStaticProps, NextPage } from "next";

import SoundBoard from "../components/SoundBoard/SoundBoard";
import { HOLLY_SOUNDS } from "../data/sounds/holly";
import styles from "../styles/Holly.module.scss";
import getImages, { MEMBER } from "../utils/cloudinary";

const Holly: NextPage<{ images: string[] }> = ({ images }) => {
  return (
    <div>
      <h1 className={styles.title}>Holly</h1>
      <SoundBoard sounds={HOLLY_SOUNDS} imagePublicIds={images} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const images = await getImages(MEMBER.holly);

  return {
    props: {
      images: images.map(({ public_id }) => public_id),
    },
  };
};

export default Holly;
