import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [postData, setPostData] = useState<CardProps[]>([
    { title: "Easy", content: "hdjkahjadhjkhdajhdjahk" },
  ]);

  const handlePost = (data: CardProps) => {
    setPostData((content) => {
      return {
        ...content,
        data,
      };
    });
  };

  const handleClose = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className="flex justify-between p-5">
        <h2 className="text-xl font-serif">User Content</h2>
        <button
          className="bg-blue-500 text-white px-5 py-2 text-sm cursor-pointer"
          onClick={() => {
            setIsModalOpen((prev) => !prev);
          }}
        >
          Add Card
        </button>
      </div>
      <div className="grid grid-cols-3 p-5">
        <Card
          title="m365Connect"
          content="This is a recuitment company that provide services to companies by providing top-professionals for projects"
        />
        <Card
          title="SeveighTech"
          content="This is a software company that deals with delivering high software"
        />
      </div>
      {postData &&
        postData.map(({ title, content }, key) => {
          return <Card title={title} content={content} key={key} />;
        })}

      <PostModal
        isOpen={isModalOpen}
        onClose={handleClose}
        handlePost={handlePost}
      />

      <h1>Hey! This is the home page</h1>
    </>
  );
};

export default Home;
