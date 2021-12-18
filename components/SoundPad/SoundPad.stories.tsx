import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SoundPad from "./SoundPad";

export default {
  title: "Components/SoundPad",
  component: SoundPad,
} as ComponentMeta<typeof SoundPad>;

const Template: ComponentStory<typeof SoundPad> = (args) => (
  <SoundPad {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imagePublicId: "family-soundboard/holly/holly-school-smile_mowm1j",
  soundPublicId: "family-soundboard/holly/brother-john_chxydf.m4a",
  title: "Brother John",
};
