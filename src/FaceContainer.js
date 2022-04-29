export const FaceContainer = ({
  children,
  width,
  height,
  centreX,
  centreY,
}) => (
  <svg width={width} height={height}>
    <g transform={`translate(${centreX},${centreY})`}>({children})</g>
  </svg>
);
