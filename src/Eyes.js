export const Eyes = ({
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  eyeStroke,
  eyeFill,
  eyeStrokeWidth,
  pupilRadius,
  pupilFill,
}) => (
  <>
    <circle
      cx={eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill={eyeFill}
      stroke={eyeStroke}
      stroke-width={eyeStrokeWidth}
      strokeDasharray="2"
    />
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill={eyeFill}
      stroke={eyeStroke}
      stroke-width={eyeStrokeWidth}
      strokeDasharray="2"
    />
    <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={pupilRadius} fill={pupilFill} />
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={pupilRadius}
      fill={pupilFill}
    />
  </>
);
