import {
  Switch,
  useMantineTheme,
  rem,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useEffect } from "react";

export default function ThemeSwitch() {
  const theme = useMantineTheme();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const isDark = computedColorScheme === "dark";

  useEffect(() => {
    setColorScheme(computedColorScheme);
  }, [computedColorScheme, setColorScheme]);

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      size="lg"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
      checked={isDark}
      onChange={() => setColorScheme(isDark ? "light" : "dark")}
    />
  );
}
