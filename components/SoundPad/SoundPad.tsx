import { Cloudinary } from "@cloudinary/url-gen";
import { RefObject } from "react";

import { useSound } from "../../hooks/useSound";
import { useDynamicDurationProperty } from "../../hooks/useDynamicDurationProperty";
import SoundWave from "../SoundWave/SoundWave";
import { COLOR_SCHEME } from "../../contexts/colorScheme";

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
  soundPublicId?: string;
  title?: string;
  className?: string;
  colorScheme?: COLOR_SCHEME;
}

const SoundPad = ({
  soundPublicId,
  title,
  className,
  colorScheme = COLOR_SCHEME.teal,
}: ISoundPad) => {
  const { audioRef, isPlaying, play } = useSound();
  const { elementRef } = useDynamicDurationProperty(
    "--pulse-duration",
    isPlaying
  );
  const sound = cld.video(soundPublicId);
  sound.format("mp3");

  const rootStyles = [styles.root, styles[colorScheme]];
  if (className) rootStyles.push(className);
  if (isPlaying) rootStyles.push(styles.isPlaying);
  if (!soundPublicId) rootStyles.push(styles.isEmpty);

  return (
    <button
      className={rootStyles.join(" ")}
      onClick={play}
      ref={elementRef as RefObject<HTMLButtonElement>}
      disabled={!soundPublicId}
    >
      {soundPublicId && (
        <>
          <div className={styles.waves}>
            <hr className={styles.flatWave} />
            <SoundWave className={styles.soundWave} />
          </div>
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
          <span className={styles.title}>{title}</span>
        </>
      )}
    </button>
  );
};

export default SoundPad;
