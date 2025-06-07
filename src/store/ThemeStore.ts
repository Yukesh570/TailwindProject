import { create } from "zustand";
import { persist } from "zustand/middleware";
type Theme = "light" | "dark";
interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme:
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme:dark").matches
          ? "dark"
          : "light",
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark"
          );

          //           Code	                                         Meaning
          // typeof document !== "undefined"	            Check: "Are we in the browser?" — this avoids crashing on the server.
          // document.documentElement	                    This means the <html> tag.
          // .classList.toggle("dark",newTheme === "dark")	Add the dark class to <html> if the theme is dark, remove it otherwise.
        }
        set({ theme: newTheme });
      },
    }),
    {
      name: "theme",
      onRehydrateStorage: () => (state) => {
        if (state?.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
    }
  )
);
