import DotGrid from "./DotGrid";

const BackGround = () => {
  return (
    <div
      style={{
        position: "fixed", // Ensures it sticks in place while scrolling
        top: 0,
        left: 0,
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        zIndex: -5, // Push it behind all content
        pointerEvents: "none", // Prevents blocking clicks
      }}
    >
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#DCDCDC"
        activeColor="#191970"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
};
export default BackGround;
