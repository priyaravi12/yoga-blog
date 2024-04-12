import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Ravi");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("blog added");
            //history.go(-1);
            history.push("/");
        });
    };

    return (
        <div className="create">
            <h1>Add new Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Blog Body</label>
                <textarea type="text" value={body} onChange={(e) => setBody(e.target.value)}>
                    Body
                </textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Ravi">"Ravi"</option>
                    <option value="Bhagyam">"Bhagyam"</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
};

export default Create;
