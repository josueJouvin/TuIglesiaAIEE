type featureProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const Features = ({ icon, title, text }: featureProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="size-6 bg-blue-100/75">{icon}</div>
      <div className="">
        <span className="font-bold">{title}</span>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Features;
