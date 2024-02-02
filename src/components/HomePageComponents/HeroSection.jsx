import React from "react";
import TextComponents from "../TextComponents/TextCompponents";

const HeroSection = () => {
  const HeroSectionText = "Creativity In Our Blood Line".split("");

  return (
    <div className="flex justify-center h-[850px] items-center">
      <div className="">
        {HeroSectionText.map((letter, i) => (
          <TextComponents key={i} text={letter} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
