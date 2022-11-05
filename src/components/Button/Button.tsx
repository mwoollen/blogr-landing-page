interface ButtonProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  buttonHeaderPrimary?: boolean;
  buttonHeader?: boolean;
}

const Button = ({
  text,
  primary,
  secondary,
  buttonHeaderPrimary,
  buttonHeader,
}: ButtonProps) => {
  if (primary) {
    return (
      <button
        type="button"
        className="w-[137px] py-3 rounded-full bg-white text-light-red font-bold sm:font-ubuntu 
        hover:bg-very-light-red hover:text-white"
      >
        {text}
      </button>
    );
  } else if (secondary) {
    return (
      <button
        type="button"
        className="text-white font-bold sm:font-ubuntu w-[137px] py-3 border rounded-full
        hover:bg-white hover:text-light-red"
      >
        {text}
      </button>
    );
  } else if (buttonHeaderPrimary) {
    return (
      <button
        type="button"
        className="w-[137px] py-3 rounded-full bg-button-pattern text-white font-bold sm:font-ubuntu"
      >
        {text}
      </button>
    );
  } else if (buttonHeader) {
    return (
      <button type="button" className="text-black font-semibold sm:font-ubuntu">
        {text}
      </button>
    );
  } else {
    return (
      <button type="button" className="text-white opacity-75 hover:border-b-2">
        {text}
      </button>
    );
  }
};

export default Button;
