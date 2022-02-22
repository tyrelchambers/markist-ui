const primary = (props) => (
  <button className="w-full bg-lime-300 p-3 rounded-md font-bold text-gray-700">
    {props.children}
  </button>
);

export const Button = (props) => {
  if (props.variant === "secondary") {
  }

  return primary(props);
};
