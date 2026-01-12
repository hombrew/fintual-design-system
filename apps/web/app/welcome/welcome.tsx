import { ScrollView, View } from "@repo/core";
import { Typography } from "@repo/typography";
import { ThemeSwitcher } from "~/components/theme-switcher";

export function Welcome() {
  return (
    <ScrollView
      role="main"
      contentContainerClassName="flex p-6 native:pb-safe items-center justify-center"
    >
      <ThemeSwitcher />
      <View className="native:pb-12 max-w-lg">
        <Typography variant="h1">The Rainbow Forest Adventure</Typography>
        <View className="p-1.5" />
        <Typography variant="p">
          Once upon a time, in a magical forest, there lived a curious rabbit
          named Whiskers. Whiskers loved exploring and discovering new things
          every day.
        </Typography>
        <View className="p-3" />
        <Typography variant="h2">Whiskers&apos; Discovery</Typography>
        <Typography variant="p">
          One day, while hopping through the forest, Whiskers stumbled upon{" "}
          <Typography variant="p" className="font-medium">
            a mysterious rainbow-colored flower
          </Typography>
          . The flower had the power to make the forest come alive with vibrant
          colors and happy creatures.
        </Typography>
        <Typography variant="blockquote">
          &quot;Oh, what a wonderful discovery!&quot; exclaimed Whiskers.
          &quot;I must share this magic with all my forest friends!&quot;
        </Typography>
        <View className="p-4" />
        <Typography variant="h3">The Colorful Transformation</Typography>
        <View className="p-0.5" />
        <Typography variant="p">
          Whiskers excitedly gathered all the animals in the forest and showed
          them the magical rainbow flower. The animals were amazed and decided
          to plant more of these flowers to make their home even more magical.
        </Typography>
        <View className="p-1.5" />
        <Typography variant="p">
          As the rainbow flowers bloomed, the entire forest transformed into a
          kaleidoscope of colors. Birds chirped in harmony, butterflies danced
          in the air, and even the trees swayed to the rhythm of the wind.
        </Typography>
        <View className="p-3" />
        <Typography variant="h3">The Enchanted Celebration</Typography>
        <View className="p-0.5" />
        <Typography variant="p">
          The animals decided to celebrate their enchanted forest with a grand
          feast. They gathered nuts, berries, and fruits from the colorful trees
          and shared stories of their adventures. The joyous laughter echoed
          through the Rainbow Forest.
        </Typography>
        <View className="p-1.5" />
        <Typography variant="lead">
          And so, the Rainbow Forest became a place of wonder and happiness,
          where Whiskers and all the animals lived together in harmony.
        </Typography>
        <View className="p-3" />
        <Typography variant="h3">The Never-ending Magic</Typography>
        <View className="p-0.5" />
        <Typography variant="p">
          The magic of the rainbow flowers continued to spread, reaching other
          parts of the world. Soon, forests everywhere became vibrant and alive,
          thanks to the discovery of Whiskers and the enchanted Rainbow Forest.
        </Typography>
        <View className="p-1.5" />
        <Typography variant="large">
          The moral of the story is: embrace the magic of discovery, share joy
          with others, and watch as the world transforms into a colorful and
          beautiful place.
        </Typography>
        <View className="p-3" />
      </View>
    </ScrollView>
  );
}
