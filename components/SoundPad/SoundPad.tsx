import Image from "next/image";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

import { useSound } from "../../hooks/useSound";

import styles from "./SoundPad.module.scss";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dmqr7syhe",
  },
  url: {
    secure: true,
    analytics: false,
  },
});

export interface ISoundPad {
  soundPublicId: string;
  imagePublicId: string;
  title: string;
  className?: string;
}

const SoundPad = ({
  soundPublicId,
  imagePublicId,
  title,
  className,
}: ISoundPad) => {
  const { audioRef, isPlaying, play } = useSound();
  const sound = cld.video(soundPublicId);
  const image = cld.image(imagePublicId);
  sound.format("mp3");
  image.resize(fill().width(100).height(100));

  const rootStyles = [className, styles.root];
  if (isPlaying) rootStyles.push(styles.isPlaying);

  function handleMouseDown() {
    play();
  }

  return (
    <button className={rootStyles.join(" ")} onMouseDown={handleMouseDown}>
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <figure className={styles.front}>
        <Image
          className={styles.img}
          src={image.toURL()}
          alt={title}
          layout="fill"
        />
        <figcaption className={styles.name}>{title}</figcaption>
        <audio
          className={styles.audio}
          src={sound.toURL()}
          id={soundPublicId}
          ref={audioRef}
          preload="auto"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </button>
  );
};

export default SoundPad;
