import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-500 to-sky-500 text-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Card;