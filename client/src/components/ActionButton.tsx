import React from 'react';
import { Link } from 'react-router-dom';

type ActionButtonProps = {
  text: string;
  action?: () => void;
  to?: string;
  className?: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({ text, action, to, className = '' }) => {
  const buttonClass = `py-3 px-5 bg-blue-500 text-white hover:bg-blue-700 transition-all duration-400 hover:scale-105 font-bold rounded-md ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={action} className="">
      {text}
    </button>
  );
};

export default ActionButton;