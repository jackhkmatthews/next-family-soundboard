import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DAD_IMAGES } from "../../data/images/dad";
import { DAD_SOUNDS } from "../../data/sounds/dad";

import SoundPads from "./SoundPads";

export default {
  title: "Components/SoundPads",
  component: SoundPads,
} as ComponentMeta<typeof SoundPads>;

const Template: ComponentStory<typeof SoundPads> = (args) => (
  <SoundPads {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imagePublicIds: DAD_IMAGES,
  sounds: DAD_SOUNDS,
};
