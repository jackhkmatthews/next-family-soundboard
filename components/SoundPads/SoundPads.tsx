import { useContext } from "react";

import { ColorSchemeContext } from "../../contexts/colorScheme";
import { useMediaUp } from "../../hooks/useMediaUp";
import { ISound } from "../../constants/sounds";
import SoundPad from "../SoundPad/SoundPad";

import styles from "./SoundPads.module.scss";

export interface ISoundPads {
  sounds: ISound[];
}

const SoundPads = ({ sounds }: ISoundPads) => {
  const padColorScheme = useContext(ColorSchemeContext);
  const columns = useMediaUp(
    [
      "(min-width: 400px)",
      "(min-width: 600px)",
      "(min-width: 1000px)",
      "(min-width: 1200px)",
    ],
    [4, 5, 6, 7],
    4
  );
  const columnsInLastRow = sounds.length % columns;
  const empties = !!columnsInLastRow
    ? new Array(columns - columnsInLastRow).fill("")
    : [];
  return (
    <ul className={styles.root}>
      {sounds.concat(empties).map((sound, index) => (
        <li key={index} className={styles.padsItem}>
          <SoundPad
            colorScheme={padColorScheme}
            className={styles.pad}
            soundPublicId={sound.cloudinaryPublicId}
            title={sound.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default SoundPads;
