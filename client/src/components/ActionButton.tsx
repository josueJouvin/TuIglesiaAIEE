type actionButtonProps = {
  text: string;
  //action: () => void
};

const ActionButton = ({ text }: actionButtonProps) => {
  return <button className="py-2 px-5 bg-btn hover:bg-[#ecc560] transition-all duration-400 hover:scale-105 font-bold">{text}</button>;
};

export default ActionButton;
