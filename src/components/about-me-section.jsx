import { Button } from "./ui/button";
const AboutMeSection = () => {
  return (
    <section id="about-me" className="mt-10 mb-5">
      <div className="about">
        <p className="intro-content pb-3">
          I'm a software engineer who enjoys building modern, scalable
          applications with a strong focus on clean architecture, performance,
          and user experience. Whether it's designing backend services,
          developing web applications, or creating mobile experiences, I enjoy
          turning ideas into reliable software.
        </p>
        <p className="intro-content pb-3">
          I primarily have experience in technologies like .NET,
          Next.js,MongoDB,Firebase,PostgreSQl and Jetpack Compose for Android
          Applications
        </p>
        <p className="intro-content pb-3">
          I'm always looking for opportunities to learn, improve, and take on
          new technical challenges. I believe in writing clean, maintainable
          code and building solutions that are both practical and scalable.
        </p>
        <p className="intro-content pb-3 ">
          Whenever I feel bored out of my mind or I'm need of something to turn
          mind off of coding ,I can be found reading books ,playing video
          games,listening to music and more.
        </p>
        <p className="intro-content pb-3">
          If you've liked what you've read so far do read on to learn more about
          me!
        </p>
        <div className="justify-center items-center">
          <a
            className=""
            download="EthanDcosta_resume"
            href="public\docs\My_Resume_2024.pdf"
          >
            <Button
              variant="secondary"
              className="text-[black] hover:bg-accent-foreground hover:text-[white] cursor-pointer p-4"
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
