import React from "react";

export enum COLOR_SCHEME {
  pink = "pink",
  yellow = "yellow",
  teal = "teal",
}

export const ColorSchemeContext = React.createContext(COLOR_SCHEME.pink);
