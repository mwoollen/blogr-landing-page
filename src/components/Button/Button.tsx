interface ButtonProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
}

const Button = ({ text, primary, secondary }: ButtonProps) => {
  if (primary) {
    return (
      <button
        type="button"
        className="w-[137px] py-3 rounded-full bg-white text-light-red font-bold font-ubuntu 
        hover:bg-very-light-red hover:text-white"
      >
        {text}
      </button>
    );
  } else if (secondary) {
    return (
      <button
        type="button"
        className="text-white font-bold font-ubuntu w-[137px] py-3 border rounded-full
        hover:bg-white hover:text-light-red"
      >
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
