import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const onToggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }

  return (
    <>
      <DarkModeSwitch
        checked={theme === "dark" ? false : true}
        onChange={onToggleTheme}
        moonColor={"#000"}
        sunColor={theme === "dark" ? "#66cbf7" : "#000"}
        size={40}
        className="switch"
      />
    </>
  );
};
