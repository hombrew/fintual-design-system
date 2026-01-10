import type { ComponentProps } from "react";
import { Text as RNText } from "react-native";
import { styled } from "../styled";

export const Text = styled(RNText, { className: "style" });

export type TextProps = ComponentProps<typeof Text>;
