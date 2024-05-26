export default function Button({
  label,
  iconURL,
  textColor,
  borderColor,
  backgroundColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex items-center justify-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-700 hover:text-white
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "rounded-full border-coral-red hover:border-0 bg-coral-red text-white"
      } rounded-full ${fullWidth && "w-full"}"}    
      `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Icon URL"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
}

// const Button = ({ label, iconURL }) => {
//   return (
//     <button>
//         {label}
//     </button>
//   )
// export default Button
