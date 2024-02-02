import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="w-7 h-7 rounded-full border border-black fixed z-50"
      style={{ left: `${position.x+5}px`, top: `${position.y+5}px` }}
    > <span className="text-md p-2 text-orange-200 font-bold">.</span></motion.div>
  );
};

export default Cursor;
