import { Pressable, View, cn } from "@repo/core";
import { Typography } from "@repo/typography";
import { useTheme } from "./theme";

export const ThemeSwitcher = () => {
  const [activeTheme, setTheme] = useTheme();

  const themes = [
    { name: "light", label: "Light", icon: "☀️" },
    { name: "dark", label: "Dark", icon: "🌙" },
  ] as const;

  return (
    <View className="p-4 gap-4">
      <View className="flex gap-2 justify-center">
        {themes.map((t) => {
          const isSelected = activeTheme === t.name;
          return (
            <Pressable
              key={t.name}
              onPress={() => setTheme(t.name)}
              className={cn("px-4 py-3 rounded-lg items-center", {
                "bg-blue-500": isSelected,
                "bg-gray-200 dark:bg-gray-700": !isSelected,
              })}
            >
              <Typography className="text-2xl mb-1">{t.icon}</Typography>
              <Typography
                variant="small"
                className={cn({ "text-white": isSelected })}
              >
                {t.label}
              </Typography>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
