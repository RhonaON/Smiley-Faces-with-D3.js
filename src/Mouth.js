//import libraries
import { arc } from "d3-shape";

export const Mouth = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc()
    // METHOD CHAINING
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
  return <path d={mouthArc()} />;
};
