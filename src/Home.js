import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    /*const handleDelete = (id) => {
        const newblogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newblogs);
    };*/

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlogs(data);
            });
    }, []);

    return (
        <div className="home">
            {blogs && (
                <BlogList
                    blogs={blogs}
                    title="Here is Yoga Blog"
                    //handleDelete={handleDelete}
                ></BlogList>
            )}
        </div>
    );
};

export default Home;
