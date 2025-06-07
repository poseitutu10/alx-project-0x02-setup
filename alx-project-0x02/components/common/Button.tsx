import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({title, size, shape}) => {
  return  (
    <button className={`${size} ${shape}`}>{title}</button>
  )
}

export default Button;