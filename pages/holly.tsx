import type { NextPage } from "next";

import SoundPads from "../components/SoundPads/SoundPads";
import { ColorSchemeContext, COLOR_SCHEME } from "../contexts/colorScheme";
import { HOLLY_SOUNDS } from "../data/sounds/holly";

const Holly: NextPage = () => {
  return (
    <ColorSchemeContext.Provider value={COLOR_SCHEME.teal}>
      <SoundPads sounds={HOLLY_SOUNDS} />
    </ColorSchemeContext.Provider>
  );
};

export default Holly;
