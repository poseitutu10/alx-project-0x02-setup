import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return <div className="bg-sky-300 p-5">
    <h2>{title}</h2>
    <p>{content}</p>
    <p>UserId: {userId}</p>
  </div>;
};



export default PostCard;
