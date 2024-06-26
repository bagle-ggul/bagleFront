import React, { useEffect, useRef } from "react";
import SelectPageComponent from "../components/SelectPageComponent";
import { storyData } from "../utils/data4";

function Main4() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, []);

  return (
    <>
      <SelectPageComponent
        backgroundImage={"./img/road.png"}
        characterImage={"./img/character.png"}
        storyData={storyData}
        url={"/main5"}
        scene={4}
      />
      <audio ref={audioRef} src="./audio/34.mp3" loop />
    </>
  );
}

export default Main4;
