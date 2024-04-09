import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "The Basics",
            body: "Yoga is a vast collection of spiritual techniques and practices aimed at integrating mind, body and spirit to achieve a state of enlightenment or oneness with the universe.",
            author: "Ravi",
            id: 1,
        },
        {
            title: "PHILOSOPHY OF YOGA",
            body: "The main philosophy of yoga is simple: mind, body, and spirit are all one and cannot be clearly separated.",
            author: "Bhagyam",
            id: 2,
        },
        {
            title: "ARTICLES ON HATHA YOGA",
            body: "The Power and Purpose of Tapas in Yoga",
            author: "Ravi",
            id: 3,
        },
    ]);

    const handleDelete = (id) => {
        const newblogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newblogs);
    };

    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title="Here is Yoga Blog"
                handleDelete={handleDelete}
            ></BlogList>
        </div>
    );
};

export default Home;
