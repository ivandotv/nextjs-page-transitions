import "../styles/globals.css";
import "normalize.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";

const pages = [
  { href: "/", name: "Index" },
  { href: "/page-one", name: "One" },
  { href: "/page-two", name: "Two" },
  { href: "/page-three", name: "Three" },
  { href: "/page-four", name: "Four" },
];

const variants = {
  initial: {
    opacity: 0,
    top: "100px",
  },
  animate: {
    opacity: 1,
    top: 0,
  },
  exit: {
    opacity: 0,
    top: "100px",
  },
};
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="app-wrap">
      <Navigation pages={pages} />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          className="page-wrap"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default MyApp;
