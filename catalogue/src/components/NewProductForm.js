import { useState } from "react";

function NewPoemForm({ updatePoems }) {
  const [formData, setformData] = useState({
    title: "",
    content: "",
    author: "",
  });

  function onFormSubmit(e) {
    e.preventDefault();
    if(formData.title==="" || formData.content==="" || formData.author===""){
             alert("Please fill in the form")
    } else{
      fetch("http://localhost:8004/poems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          updatePoems(data);
          setformData({ ...formData, title: "", author: "", content: "" });
        });
    }
    
  }

  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form className="new-poem-form" onSubmit={onFormSubmit}>
      <input value={formData.title} name="title" placeholder="Title" onChange={handleChange} />
      <input value={formData.author} name="author" placeholder="Author" onChange={handleChange} />
      <textarea
      value={formData.content}
        name="content"
        placeholder="Write your masterpiece here..."
        rows={10}
        onChange={handleChange}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
