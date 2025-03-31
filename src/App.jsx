import { useState } from "react";
import TranslatorStart from "./Components/TranslatorStart";
import TranslatorApp from "./Components/TranslatorApp";
import WorldMap from "./Components/WorldMap";

import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [showTranslatorApp, setShowTranslatorApp] = useState(false);

  return (
    <div className="w-full h-screen bg-[#0e0e0e] relative overflow-hidden flex justify-center items-center">
      {/*  월드맵을 가장 아래에, 전체 배경으로 */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }} // 천천히 나타나는 효과
      >
        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: 34.0522, lng: -118.2437 },
            },
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: -15.7975, lng: -47.8919 },
            },
            {
              start: { lat: -15.7975, lng: -47.8919 },
              end: { lat: 38.7223, lng: -9.1393 },
            },
            {
              start: { lat: 51.5074, lng: -0.1278 },
              end: { lat: 28.6139, lng: 77.209 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: 43.1332, lng: 131.9113 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: -1.2921, lng: 36.8219 },
            },
          ]}
        />
      </motion.div>

      <motion.div
        key={showTranslatorApp ? "app" : "start"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5 }}
        className=" 
        w-[90%] max-w-2xl max-[392px]:h-[90%] sm:h-auto
  bg-white/2 backdrop-blur-[3px] border border-white/10
  shadow-[0_0_60px_rgba(255,255,255,0.08)]
  rounded-xl z-10 flex flex-col relative
  ring-1 ring-white/5
  "
      >
        {/* 상단 반사 효과 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="absolute inset-0 before:absolute before:inset-x-0 before:top-0 before:h-1/2 
      before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-xl z-0"
        ></motion.div>

        <AnimatePresence mode="wait">
          {showTranslatorApp ? (
            <TranslatorApp onClose={() => setShowTranslatorApp(false)} />
          ) : (
            <TranslatorStart onStart={() => setShowTranslatorApp(true)} />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
