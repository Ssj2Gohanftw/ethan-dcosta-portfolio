import SplitText from "@/components/SplitText";
import ProfileCard from "@/components/ProfileCard";
import TextType from "../TextType";
const text = [
  "An aspiring Software Developer based in Goa,India!",
  "I build beautiful applications for the Web and Mobile",
];
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="">
        <div className="flex items-center justify-center flex-1/2">
          <ProfileCard
            name="Ethan D'Costa"
            title="Aspiring Software Developer"
            handle="ssj2gohanftw"
            status="Online"
            contactText="Contact Me"
            avatarUrl="./assets/images/me.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            innerGradient={false}
            className="p-2"
          />
        </div>

        <div className="flex items-center justify-center flex-1/2">
          <SplitText className="text-5xl" text="Heya! I'm Ethan D'Costa" />
        </div>
        <div className="flex items-center justify-center flex-1/2">
          <TextType text={text} className="text-xl" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
