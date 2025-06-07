import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({name, email, address}) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>City Address:{address.city}</p>
    </div>
  )
}

export default UserCard;