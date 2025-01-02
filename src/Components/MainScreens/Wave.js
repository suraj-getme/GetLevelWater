// import {
//   Canvas,
//   Circle,
//   Group,
//   Path,
//   Skia,
//   rect,
//   rrect,
//   useClockValue,
//   useComputedValue,
//   useValue,
// } from '@shopify/react-native-skia';
// import {curveBasis, line} from 'd3';
// import React, {useEffect} from 'react';
// import { View, Text } from 'react-native';

// const Wave = ({size = 110, progress = 80, space = 5}) => {
//   const r = size / 2;
//   const padding = size / 25; // This is the stroke width
//   const strokeSpace = space; // Space between the stroke and inner circle

//   // Calculate the outer circle radius and inner circle size
//   const outerCircleRadius = r - padding / 2; // Outer circle radius
//   const innerCircleSize = size - (strokeSpace * 2) - padding; // Inner circle size adjusted for stroke space

//   const frequency = 3;
//   const amplitude = 10;
//   const verticalOffset = useValue(100);
//   const clock = useClockValue();

//   useEffect(() => {
//     verticalOffset.current = (1 - progress / 100) * innerCircleSize;
//   }, [progress, size, innerCircleSize]);

//   const createAnimatedPath = (phase = 20) => {
//     const d3Points = Array.from({length: size}).map((_, i) => {
//       const angle = (i / size) * (Math.PI * frequency) + phase;
//       return [i, (Math.sin(angle) * amplitude) / 4 + verticalOffset.current];
//     });
//     const lineGenerator = line().curve(curveBasis);
//     const wavePath = lineGenerator(d3Points);
//     return `${wavePath} L ${size}, ${size} ${0}, ${size} Z`;
//   };

//   const animatedPath = useComputedValue(() => {
//     const current = (clock.current / 250) % 200;
//     const start = Skia.Path.MakeFromSVGString(createAnimatedPath(current));
//     const end = Skia.Path.MakeFromSVGString(
//       createAnimatedPath(current * Math.PI),
//     );
//     return start.interpolate(end, 0.5);
//   }, [clock, progress, size]);

//   // Adjust the rounded rectangle to account for the stroke space
//   const roundedRectangle = rrect(
//     rect(padding - 2.5 + strokeSpace, padding - 2.5 + strokeSpace, innerCircleSize, innerCircleSize),
//     r,
//     r,
//   );

//   return (
//     <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
//       <Canvas style={{width: size, height: size}}>
//         <Circle
//           cx={r}
//           cy={r}
//           r={outerCircleRadius}
//           style="stroke"
//           strokeWidth={padding}
//           color= 'green'
//         />
//         <Group clip={roundedRectangle}>
//           <Path path={animatedPath} color="green" />
//         </Group>
//       </Canvas>
//       <Text style={{
//       position: 'absolute',
//       bottom: r - 15, // Adjust this value to center the text vertically
//       left: r - 20, // Adjust this value to center the text horizontally
//       fontSize: 24,
//       fontWeight: 'bold',
//       // color: 'white',
//        color: progress >= 40 ? 'white' : 'black'
//     }}>
//   {progress}%
// </Text> 
//     </View>
//   );
// };
// export default Wave;


// import {
//   Canvas,
//   Circle,
//   Group,
//   Path,
//   Skia,
//   rect,
//   rrect,
//   useClockValue,
//   useComputedValue,
//   useValue,
// } from '@shopify/react-native-skia';
// import { curveBasis, line } from 'd3';
// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';

// const Wave = ({ size = 110, progress = 80, space = 5 }) => {
//   const r = size / 2;
//   const padding = size / 25; // This is the stroke width
//   const strokeSpace = space; // Space between the stroke and inner circle

//   // Calculate the outer circle radius and inner circle size
//   const outerCircleRadius = r - padding / 2; // Outer circle radius
//   const innerCircleSize = size - (strokeSpace * 2) - padding; // Inner circle size adjusted for stroke space

//   const frequency = 3;
//   const amplitude = 10;
//   const verticalOffset = useValue(100);
//   const clock = useClockValue();

//   // Update verticalOffset when progress or size changes
//   useEffect(() => {
//     verticalOffset.current = (1 - progress / 100) * innerCircleSize;
//   }, [progress, size, innerCircleSize]);

//   // Generate animated wave path
//   const createAnimatedPath = (phase = 20) => {
//     const d3Points = Array.from({ length: size }).map((_, i) => {
//       const angle = (i / size) * (Math.PI * frequency) + phase;
//       return [i, (Math.sin(angle) * amplitude) / 4 + verticalOffset.current];
//     });
//     const lineGenerator = line().curve(curveBasis);
//     const wavePath = lineGenerator(d3Points);
//     return `${wavePath} L ${size}, ${size} ${0}, ${size} Z`;
//   };

//   // Create interpolated wave path for smooth animation
//   const animatedPath = useComputedValue(() => {
//     const current = (clock.current / 250) % 200; // Animate at a set pace
//     const start = Skia.Path.MakeFromSVGString(createAnimatedPath(current));
//     const end = Skia.Path.MakeFromSVGString(createAnimatedPath(current * Math.PI));
//     return start.interpolate(end, 0.5); // Smooth interpolation
//   }, [clock, progress, size]);

//   // Create a rounded rectangle to clip the inner circle
//   const roundedRectangle = rrect(
//     rect(padding - 2.5 + strokeSpace, padding - 2.5 + strokeSpace, innerCircleSize, innerCircleSize),
//     r,
//     r,
//   );

//   return (
//     <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
//       <Canvas style={{ width: size, height: size }}>
//         <Circle
//           cx={r}
//           cy={r}
//           r={outerCircleRadius}
//           style="stroke"
//           strokeWidth={padding}
//           color="green"
//         />
//         <Group clip={roundedRectangle}>
//           <Path path={animatedPath} color="green" />
//         </Group>
//       </Canvas>
//       <Text
//         style={{
//           position: 'absolute',
//           bottom: r - 15, // Adjust this value to center the text vertically
//           left: r - 20, // Adjust this value to center the text horizontally
//           fontSize: 24,
//           fontWeight: 'bold',
//           color: progress >= 40 ? 'white' : 'black',
//         }}
//       >
//         {progress}%
//       </Text>
//     </View>
//   );
// };

// export default Wave;


import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Canvas, Circle, Group, Path, Skia, useClockValue, useComputedValue, useValue, rrect, rect } from '@shopify/react-native-skia';
import { curveBasis, line } from 'd3';
import { Text } from 'react-native';

// Reusable Wave Animation Component
const Wave = React.memo(({ percentage, size = 110 }) => {
  const r = size / 2;
  const padding = size / 25;
  const strokeSpace = 5;

  const outerCircleRadius = r - padding / 2;
  const innerCircleSize = size - (strokeSpace * 2) - padding;

  const frequency = 3;
  const amplitude = 10;
  const verticalOffset = useValue(100);
  const clock = useClockValue();

  // Update vertical offset when percentage changes
  useEffect(() => {
    verticalOffset.current = (1 - percentage / 100) * innerCircleSize;
  }, [percentage]);

  // Memoize the path to avoid recalculating unnecessarily
  const createAnimatedPath = useCallback((phase = 20) => {
    const d3Points = Array.from({ length: size }).map((_, i) => {
      const angle = (i / size) * (Math.PI * frequency) + phase;
      return [i, (Math.sin(angle) * amplitude) / 4 + verticalOffset.current];
    });
    const lineGenerator = line().curve(curveBasis);
    const wavePath = lineGenerator(d3Points);
    return `${wavePath} L ${size}, ${size} ${0}, ${size} Z`;
  }, [verticalOffset, size]);

  const animatedPath = useComputedValue(() => {
    const current = (clock.current / 250) % 200; // Adjust for smooth animation
    const start = Skia.Path.MakeFromSVGString(createAnimatedPath(current));
    const end = Skia.Path.MakeFromSVGString(createAnimatedPath(current * Math.PI));
    return start.interpolate(end, 0.5); // Smooth transition
  }, [clock, percentage, createAnimatedPath]);

  // Replace Skia.RRect.MakeRectXY with rrect
  const roundedRectangle = rrect(
    rect(padding - 2.5 + strokeSpace, padding - 2.5 + strokeSpace, innerCircleSize, innerCircleSize),
    r, // Corner radius
    r  // Corner radius
  );

  // Determine stroke color based on the percentage
  const strokeColor = useMemo(() => {
    if (percentage < 25) return '#FFF380'; // Yellow
    if (percentage > 80) return 'red'; // Red
    return 'green'; // Green
  }, [percentage]);

  return (
    <>
    <Canvas style={{ width: size, height: size }}>
      <Circle
        cx={r}
        cy={r}
        r={outerCircleRadius}
        style="stroke"
        strokeWidth={padding}
        color={strokeColor}
      />
      <Group clip={roundedRectangle}>
        <Path path={animatedPath} color={strokeColor} />
      </Group>
    </Canvas>
      <Text
              style={{
                position: 'absolute',
                bottom: r - 15, // Adjust this value to center the text vertically
                left: r - 20, // Adjust this value to center the text horizontally
                fontSize: 24,
                fontWeight: 'bold',
                color: percentage >= 40 ? 'white' : 'black',
              }}
            >
              {percentage}%
            </Text>
            </>
  );
});

export default React.memo(Wave);


