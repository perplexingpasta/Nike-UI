import toast from "react-hot-toast";

export default function Button({
  label,
  value,
  iconURL,
  textColor,
  borderColor,
  backgroundColor,
  fullWidth,
}) {
  const handleSubmit = () => {
    toast.success("Successfully subscribed!", {
      duration: 5000,
      position: "top-right",
      style: {
        marginRight: "20px",
        fontSize: "1.25rem",
      },
    });
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none transition duration-300 ease-in-out hover:scale-110
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} hover:font-semibold`
          : "rounded-full border-coral-red bg-coral-red text-white hover:border-0  hover:bg-red-700 hover:text-white"
      } rounded-full ${fullWidth && "w-full"}"}    
      ${value === "Subscribe" ? "hover:-translate-x-1" : "hover:-translate-y-1"}
      `}
      onClick={handleSubmit}
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
