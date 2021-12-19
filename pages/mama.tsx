import type { NextPage } from "next";

import SoundPads from "../components/SoundPads/SoundPads";
import { ColorSchemeContext, COLOR_SCHEME } from "../contexts/colorScheme";
import { MUM_SOUNDS } from "../data/sounds/mama";

const Mum: NextPage = () => {
  return (
    <ColorSchemeContext.Provider value={COLOR_SCHEME.yellow}>
      <SoundPads sounds={MUM_SOUNDS} />
    </ColorSchemeContext.Provider>
  );
};

export default Mum;
