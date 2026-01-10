import type { ComponentProps } from "react";
import { View as RNView } from "react-native";
import { styled } from "../styled";

export const View = styled(RNView, { className: "style" });

export type ViewProps = ComponentProps<typeof View>;
