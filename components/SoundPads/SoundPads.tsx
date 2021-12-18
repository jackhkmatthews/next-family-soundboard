import { ISound } from "../../types/sounds";
import SoundPad from "../SoundPad/SoundPad";

import styles from "./SoundPads.module.scss";

export interface ISoundPads {
  sounds: ISound[];
  imagePublicIds: string[];
}

const SoundPads = ({ sounds, imagePublicIds }: ISoundPads) => {
  return (
    <ul className={styles.root}>
      {sounds.map((sound, index) => (
        <li key={index} className={styles.padsItem}>
          <SoundPad
            className={styles.pad}
            soundPublicId={sound.cloudinaryPublicId}
            title={sound.title}
            imagePublicId={imagePublicIds[index % imagePublicIds.length]}
          />
        </li>
      ))}
    </ul>
  );
};

export default SoundPads;
