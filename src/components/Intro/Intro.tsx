import Button from "../Button/Button";

const Intro = () => {
  return (
    <div
      className="px-6 md:px-0 pt-32 pb-40 z-10
      flex flex-col items-center justify-center text-center"
    >
      <h1 className="font-semibold leading-[55px] text-4xl md:text-6xl text-white">
        A modern publishing platform
      </h1>
      <span className="font-light text-xl text-white">
        Grow your audience and build your online brand
      </span>

      <div className="mt-12 flex items-center gap-4">
        <Button text="Start for Free" primary />
        <Button text="Lean More" secondary />
      </div>
    </div>
  );
};

export default Intro;
