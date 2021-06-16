import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import "normalize.css";
import { useState } from "react";
import AnimSwitcher from "../components/AnimSwitcher";
import Navigation from "../components/Navigation";
import { animations } from "../lib/animations";
import "../styles/globals.css";

const pages = [
  { href: "/", name: "Index" },
  { href: "/page-one", name: "One" },
  { href: "/page-two", name: "Two" },
  { href: "/page-three", name: "Three" },
  { href: "/page-four", name: "Four" }
];

function MyApp({ Component, pageProps, router }: AppProps) {
  const startIndex = 0;
  const [animation, setAnimation] = useState(animations[startIndex]);

  return (
    <div className="app-wrap">
      <div className="ui-wrap">
        <Navigation pages={pages} />
        <AnimSwitcher
          anims={animations}
          setAnimation={setAnimation}
          startIndex={startIndex}
        />
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route.concat(animation.name)}
          className="page-wrap"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animation.variants}
          transition={animation.transition}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default MyApp;
