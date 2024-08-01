type authButtonProps = {
    text: string;
    //action: () => void
  };
  
  const AuthButton = ({ text }: authButtonProps) => {
    return <button type="submit" className="mt-4 p-4 rounded-md bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all">{text}</button>;
  };
  
  export default AuthButton;
  