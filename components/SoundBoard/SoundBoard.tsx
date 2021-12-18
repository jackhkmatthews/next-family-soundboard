import { ISound } from "../../types/sounds";
import SoundPad from "../SoundPad/SoundPad";

import styles from "./SoundBoard.module.scss";

export interface ISoundBoard {
  sounds: ISound[];
  imagePublicIds: string[];
}

const SoundBoard = ({ sounds, imagePublicIds }: ISoundBoard) => {
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

export default SoundBoard;
