import IllustrationPhones from "../../assets/illustration-phones.svg";
import useWindowDimensions from "../../hooks/useWindowSize";

const MobileSection = () => {
  const { width } = useWindowDimensions();

  const style =
    width > 768
      ? {
          backgroundPositionX: "-220px, 100%",
          backgroundPositionY: "-530px, 100%",
        }
      : {
          backgroundPositionX: "50%, 100%",
          backgroundPositionY: "-280px, 100%",
        };

  return (
    <section
      style={style}
      className="bg-mobile-section-pattern bg-no-repeat bg-mobile-section-pattern-size-mobile md:bg-mobile-section-pattern-size-desktop h-fit md:h-[400px] w-full rounded-bl-[100px] rounded-tr-[100px] mt-64 md:mt-14 px-6 md:px-[8%]
      flex flex-col md:flex-row items-center break-words"
    >
      <img
        src={IllustrationPhones}
        className="md:w-[400px] lg:w-[552px] -mt-44 md:mt-8 md:mr-[3%]"
      />
      <div className="mb-24 md:mb-0">
        <h2 className="font-semibold text-4xl leading-[61px] text-white pb-1">
          State of the Art Infrastructure
        </h2>
        <p className="text-white text-justify">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
};

export default MobileSection;
