import { Button } from "./ui/button";
const AboutMeSection = () => {
  return (
    <section id="about-me">
      <div className="about">
        <p className="intro-content pb-3">
          I design apps that are great to use and look at.Whether it may be
          mobile or web apps you are guaranteed to have a delightful experience.
        </p>
        <p className="intro-content pb-3">
          I primarily have experience in technologies like
          Next.js,MongoDB,Firebase and Jetpack Compose for Android Applications
        </p>
        <p className="intro-content pb-3 ">
          Whenever I feel bored out of my mind or I'm need of something to turn
          mind off of coding ,I can be found reading books ,playing video
          games,listening to music and more.
        </p>
        <p className="intro-content pb-3">
          If you've liked what you've read so far do check out my site to learn
          more about me!
        </p>
        <div className="justify-center items-center">
          <a
            className=""
            download="EthanDcosta_resume"
            href="../docs/My_Resume_2024.pdf"
          >
            <Button
              variant="secondary"
              className="text-[black] hover:bg-gray-400 hover:text-[white]"
            >
              Download My CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default AboutMeSection;
