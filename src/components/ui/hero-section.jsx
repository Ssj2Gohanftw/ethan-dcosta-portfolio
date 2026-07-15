import SplitText from "@/components/SplitText";
import ProfileCard from "@/components/ProfileCard";
// import TextType from "../TextType";
// const text = [
//   "An aspiring Software Developer based in Goa,India!",
//   "I build beautiful applications for the Web and Mobile",
// ];
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="">
        <div className="flex items-center justify-center flex-1/2">
          <ProfileCard
            name="Ethan D'Costa"
            title="Software Developer"
            handle="ssj2gohanftw"
            status="Online"
            contactText="Contact Me"
            avatarUrl="./assets/images/me.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            className="p-2"
            behindGlowEnabled={false}
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            behindGlowSize={"0%"}
          />
        </div>

        <div className="flex items-center justify-center flex-1/2">
          <SplitText
            className="text-3xl lg:text-4xl"
            text="Heya! I'm Ethan D'Costa"
          />
        </div>
        <div className="flex items-center justify-center flex-1/2">
          {/* <p className="text-xl">d </p> */}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
