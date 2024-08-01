type actionButtonProps = {
  text: string;
  //action: () => void
};

const ActionButton = ({ text }: actionButtonProps) => {
  return <button className="py-3 px-5 bg-blue-500 text-white hover:bg-blue-700 transition-all duration-400 hover:scale-105 font-bold rounded-md">{text}</button>;
};

export default ActionButton;
