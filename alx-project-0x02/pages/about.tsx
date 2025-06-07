import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <>
      <h1>Hey! This is my about page</h1>
      <Button title="Add to cart" size="small" shape="rounded-sm" />
      <Button title="Remove from cart" size="medium" shape="rounded-md" />
      <Button title="Update cart" size="large" shape="rounded-full" />
    </>
  );
};

export default About;
