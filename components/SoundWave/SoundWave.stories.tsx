import { ComponentMeta, ComponentStory } from "@storybook/react";

import SoundWave from "./SoundWave";

export default {
  title: "Components/SoundWave",
  component: SoundWave,
} as ComponentMeta<typeof SoundWave>;

const Template: ComponentStory<typeof SoundWave> = (args) => (
  <SoundWave {...args} />
);

export const Default = Template.bind({});
Default.args = {};
