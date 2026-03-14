// import DotGrid from "./DotGrid";
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
    ></div>
  );
};
export default BackGround;
