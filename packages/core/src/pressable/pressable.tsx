import { Pressable as RNPressable } from "react-native";
import { styled } from "../styled";

export const Pressable = styled(RNPressable, { className: "style" });

export type PressableProps = React.ComponentProps<typeof Pressable>;
