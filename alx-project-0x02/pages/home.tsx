import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3">
         <Card
        title="m365Connect"
        content="This is a recuitment company that provide services to companies by providing top-professionals for projects"
      />
      <Card
        title="SeveighTech"
        content="This is a software company that deals with delivering high software"
      />
      </div>
     
      <h1>Hey! This is the home page</h1>
    </>
  );
};

export default Home;
