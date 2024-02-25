import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 ${variant} border rounded-full`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={10} height={10} />}
      <label className="bold-14 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
