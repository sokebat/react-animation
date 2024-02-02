import { motion,useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextCompponents = ({ text }) => {
    const controls = useAnimationControls()

    const [display, setdisplay] = useState(false)

  return (
    <motion.span
      className="inline-block text-3xl"
      animate={controls}
      whileHover={{ scale: 1.5, transition: { duration: 1 } }}
    >
      {text}
    </motion.span>
  );
};

export default TextCompponents;
