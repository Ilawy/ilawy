import { autoUpdate, useFloating } from "@floating-ui/react";
import {
  BracketsIcon,
  HomeIcon,
  MenuIcon,
  MoonIcon,
  PaletteIcon,
  SunIcon,
} from "lucide-react";
import { useState } from "react";
import { useClickAway, useLocalStorage, useStateList } from "react-use";
import { AnimatePresence, motion, useCycle } from "motion/react";
import { navLinks } from "@/data";

const themes = ["system", "dark", "light"] as const;

(() => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.body.classList.add(JSON.parse(theme));
    }
  }
})();

export default function Nav() {
  const { refs, floatingStyles } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: "bottom-end",
    strategy: "fixed",
  });
  const [isOpen, setIsOpen] = useState(false);
  useClickAway(refs.floating, (e) => {
    const path = e.composedPath() as any[];
    if (path.includes(refs.reference.current)) return;
    setIsOpen(false);
  });

  const [theme, setTheme] = useLocalStorage<(typeof themes)[number]>(
    "theme",
    "system"
  );

  const setNextTheme = () => {
    const currentIndex = themes.indexOf(theme || "system");
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
    document.body.classList.remove(...themes);
    document.body.classList.add(themes[nextIndex]);
  };

  return (
    <>
      <div className="pointer-events-none flex items-center justify-end p-3 sticky top-0">
        <button
          ref={refs.setReference}
          className="pointer-events-auto! p-1.5 rounded-sm hover:bg-primary/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={refs.setFloating}
            className="w-full max-w-xs z-50 bg-accent text-accent-foreground border p-3 text-xl rounded-2xl"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.3 }}
            style={{
              ...floatingStyles,
            }}
          >
            {/* <div className="flex items-center gap-4 mb-3">
              <button
                onClick={() => setNextTheme()}
                className="p-2 rounded-sm hover:bg-primary/10 border aspect-square"
              >
                {theme === "dark" ? (
                  <MoonIcon />
                ) : theme === "light" ? (
                  <SunIcon />
                ) : (
                  <PaletteIcon />
                )}
              </button>
            </div> */}
            <motion.ul className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <motion.li>
                  <a className="hover:underline" href={item.href}>
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
