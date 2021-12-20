import { useContext } from "react";

import { ColorSchemeContext } from "../../contexts/colorScheme";
import { ISound } from "../../constants/sounds";
import SoundPad from "../SoundPad/SoundPad";

import styles from "./SoundPads.module.scss";

export interface ISoundPads {
  sounds: ISound[];
  columns?: number;
}

const SoundPads = ({ sounds, columns = 4 }: ISoundPads) => {
  const padColorScheme = useContext(ColorSchemeContext);
  const columnsInLastRow = sounds.length % columns;
  return (
    <ul className={styles.root}>
      {sounds.map((sound, index) => (
        <li key={index} className={styles.padsItem}>
          <SoundPad
            colorScheme={padColorScheme}
            className={styles.pad}
            soundPublicId={sound.cloudinaryPublicId}
            title={sound.title}
          />
        </li>
      ))}
      {/* Empty sound pad to aesthetically fill in grid */}
      {!!columnsInLastRow &&
        new Array(columns - columnsInLastRow).fill("").map((_, index) => (
          <li key={index} className={styles.padsItem}>
            <SoundPad className={styles.pad} />
          </li>
        ))}
    </ul>
  );
};

export default SoundPads;
