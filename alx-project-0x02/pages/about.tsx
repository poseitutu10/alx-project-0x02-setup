import Button from "@/components/common/Button";

const About: React.FC = () => {
  return(
    <>
      <h1>Hey! This is my about page</h1>
      <Button title="Add to cart" styles="bg-pink-500 px-5 py-2 rounded-full" />
      <Button title="Remove from cart" styles="bg-red-500 p-5 rounded-md" />
      <Button title="Update cart" styles="bg-blue-500 px-5 py-2 rounded-sm" />
    </>
  )
}

export default About;