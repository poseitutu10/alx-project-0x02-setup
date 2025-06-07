import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const User: React.FC<UserProps[]> = ({ users }) => {

  console.log(users)

  return (
    <div>
      {
        users.map(({name, email, address}: UserProps, key: number ) => {
          return (
            <UserCard name={name} email={email} address={address} key={key} />
          )
        })
      }
    </div>
  )
}


export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json();

  return {
    props: {
      users
    }
  }
}

export default User;