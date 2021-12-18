import type { GetStaticProps, NextPage } from "next";

import SoundBoard from "../components/SoundBoard/SoundBoard";
import { DAD_SOUNDS } from "../data/sounds/dad";
import styles from "../styles/Dad.module.scss";
import getImages, { MEMBER } from "../utils/cloudinary";

const Dad: NextPage<{ images: string[] }> = ({ images }) => {
  return (
    <div>
      <h1 className={styles.title}>Dad</h1>
      <SoundBoard sounds={DAD_SOUNDS} imagePublicIds={images} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const images = await getImages(MEMBER.dad);

  return {
    props: {
      images: images.map(({ public_id }) => public_id),
    },
  };
};

export default Dad;
