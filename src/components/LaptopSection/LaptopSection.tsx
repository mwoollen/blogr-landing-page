import useWindowDimensions from "../../hooks/useWindowSize";

import IllustrationLaptopDesktop from "../../assets/illustration-laptop-desktop.svg";
import IllustrationLaptopMobile from "../../assets/illustration-laptop-mobile.svg";

const LaptopSection = () => {
  const { width } = useWindowDimensions();

  return (
    <section className="mt-20 md:mt-28">
      <div className="flex flex-col md:flex-row">
        <figure className="mb-12 md:mb-0 md:flex-[3_1_0] md:-ml-36">
          <img
            src={
              width > 768 ? IllustrationLaptopDesktop : IllustrationLaptopMobile
            }
          />
        </figure>
        <aside className="flex flex-col justify-center flex-[2_1_0] px-[10%] text-center md:text-justify">
          <div className="pb-16">
            <h2 className="font-semibold text-2xl text-very-dark-blue pb-4">
              Free, open, simple
            </h2>
            <p className="text-very-light-blue">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-very-dark-blue  pb-4">
              Powerful tooling
            </h2>
            <p className="text-very-light-blue">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default LaptopSection;
