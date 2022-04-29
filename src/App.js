// Import packages
import { range } from "d3";
//Import components
import { Face } from "./Face";

// Variables for smiley face parts
const width = 200;
const height = 200;
const eyeRadius = 25;

const faceArray = range(50);

const App = () =>
  faceArray.map(() => (
    <Face
      width={width}
      height={height}
      centreX={width / 2}
      centreY={height / 2}
      strokeWidth={20 + Math.random() * 6}
      eyeOffsetX={30 + Math.random() * 10}
      eyeOffsetY={25 + Math.random() * 12}
      eyeRadius={eyeRadius + Math.random() * 25}
      mouthWidth={8 + Math.random() * 4}
      mouthRadius={60 + Math.random() * -10}
      eyeFill={"white"}
      eyeStroke={"black"}
      eyeStrokeWidth={2}
      pupilRadius={eyeRadius / 4 + Math.random() * 10}
      pupilFill={"black"}
    />
  ));

export default App;
