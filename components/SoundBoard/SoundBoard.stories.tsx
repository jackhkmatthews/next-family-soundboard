import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DAD_IMAGES } from "../../data/images/dad";
import { DAD_SOUNDS } from "../../data/sounds/dad";

import SoundBoard from "./SoundBoard";

export default {
  title: "Components/SoundBoard",
  component: SoundBoard,
} as ComponentMeta<typeof SoundBoard>;

const Template: ComponentStory<typeof SoundBoard> = (args) => (
  <SoundBoard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imagePublicIds: DAD_IMAGES,
  sounds: DAD_SOUNDS,
};
