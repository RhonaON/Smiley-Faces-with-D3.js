// import components
import { FaceContainer } from "./FaceContainer";
import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";

export const Face = ({
  width,
  height,
  centreX,
  centreY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
  eyeFill,
  eyeStroke,
  eyeStrokeWidth,
  pupilRadius,
  pupilFill,
}) => (
  <FaceContainer
    width={width}
    height={height}
    centreX={centreX}
    centreY={centreY}
  >
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
  </FaceContainer>
);
