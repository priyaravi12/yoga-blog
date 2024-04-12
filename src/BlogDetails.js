import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, error, pending } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then((response) => {
                if (response.ok) {
                    console.log("JSON data deleted successfully");
                    history.push("/");
                } else {
                    console.error("Failed to delete JSON data");
                    history.push("/");
                }
            })
            .catch((error) => {
                console.error("Error deleting JSON data:", error);
            });
    };

    return (
        <div className="blogdetails">
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <h3>written by {blogs.author}</h3>
                    <div>
                        <p>{blogs.body}</p>
                    </div>
                </article>
            )}
            <button onClick={handleDelete}>delete</button>
        </div>
    );
};

export default BlogDetails;
