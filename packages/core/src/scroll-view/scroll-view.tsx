import type { ComponentProps } from "react";
import { ScrollView as RNScrollView } from "react-native";
import { styled } from "../styled";

export const ScrollView = styled(RNScrollView, {
  className: "style",
  contentContainerClassName: "style",
});

export type ScrollViewProps = ComponentProps<typeof ScrollView>;
