//Import components
import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";

// Variables for eyes
const width = 700;
const height = 700;
const centreX = width / 2;
const centreY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 120;
const eyeOffsetY = 150;
const eyeRadius = 80;
const mouthWidth = 30;
const mouthRadius = 220;
const eyeFill = "white";
const eyeStroke = "black";
const eyeStrokeWidth = 2;
const pupilRadius = eyeRadius / 4;
const pupilFill = "black";

function App() {
  // Constructor function for mouth using d3-shape lib 'arc'

  // <g> tag below refers to an svg group element - this means you can move everything inside a group element together
  return (
    <div className="App">
      <svg width={width} height={height}>
        <g transform={`translate(${centreX},${centreY})`}>
          <BackgroundCircle radius={centreY - strokeWidth} />
          <Eyes
            eyeOffsetX={eyeOffsetX}
            eyeOffsetY={eyeOffsetY}
            eyeRadius={eyeRadius}
            eyeStroke={eyeStroke}
            eyeStrokeWidth={eyeStrokeWidth}
            pupilFill={pupilFill}
            pupilRadius={pupilRadius}
            eyeFill={eyeFill}
          />
          <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
        </g>
      </svg>
    </div>
  );
}

export default App;
