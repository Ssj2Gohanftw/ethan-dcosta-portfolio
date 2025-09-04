// import DotGrid from "./DotGrid";
import PixelBlast from "./PixelBlast";
const BackGround = () => {
  return (
    <div
      style={{
        position: "fixed", // Ensures it sticks in place while scrolling
        top: 0,
        left: 0,
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        zIndex: -4, // Push it behind all content
        pointerEvents: "none", // Prevents blocking clicks
      }}
    >
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />
    </div>
  );
};
export default BackGround;
