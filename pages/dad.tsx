import type { NextPage } from "next";

import SoundPads from "../components/SoundPads/SoundPads";
import { ColorSchemeContext, COLOR_SCHEME } from "../contexts/colorScheme";
import { DAD_SOUNDS } from "../data/sounds/dad";

const Dad: NextPage = () => {
  return (
    <ColorSchemeContext.Provider value={COLOR_SCHEME.pink}>
      <SoundPads sounds={DAD_SOUNDS} />
    </ColorSchemeContext.Provider>
  );
};

export default Dad;
