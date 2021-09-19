import React from "react";
import { Meta } from "@storybook/react";
import { Abilities } from "./";

export default {
  component: Abilities,
  title: "Components/Abilities",
} as Meta;

export const Primary: React.VFC<{}> = () => <Abilities />;
