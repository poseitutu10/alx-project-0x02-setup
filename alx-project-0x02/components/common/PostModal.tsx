import { CardProps, PostProps, PostPropsNew } from "@/interfaces";
import { useState } from "react";

const PostModal: React.FC<PostPropsNew> = ({onClose, handlePost, isOpen}) => {

  const [form, setForm] = useState<CardProps>({
    title: "",
    content: ""
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setForm(content => ({...content, [name]: value}))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    handlePost(form)
    console.log("Submitting")
    onClose()
  }


  return (
    <div className={`${!isOpen ? "hidden": "fixed"} bg-gray-800 inset-0 flex items-center justify-center`}>
      <form onSubmit={handleSubmit} aria-label="post-form" className="flex flex-col gap-5 w-1/4 bg-white p-5">
        <h2>User form</h2>
        <input type="text" name="title" value={form.title} placeholder="Title" onChange={handleChange} className="border" />
        <textarea name="content" value={form.content} placeholder="Content" maxLength={100} onChange={handleChange} className="border"/>
        <button className="bg-blue-500 text-white text-sm p-2 cursor-pointer">Submit</button>
      </form>
    </div>
  )
}

export default PostModal;