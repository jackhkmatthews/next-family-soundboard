export enum BREAKPOINT_NAMES {
  xsm = "xsm",
  sm = "sm",
  md = "md",
  lg = "lg",
}

export const BREAKPOINTS = new Map([
  [BREAKPOINT_NAMES.xsm, { width: 400 }],
  [BREAKPOINT_NAMES.sm, { width: 600 }],
  [BREAKPOINT_NAMES.md, { width: 1000 }],
  [BREAKPOINT_NAMES.lg, { width: 1200 }],
]);
