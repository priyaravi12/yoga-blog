import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, pending, error } = useFetch("http://localhost:8000/blogs");

    /*const handleDelete = (id) => {
        const newblogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newblogs);
    };*/

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {pending && <div>Loading...</div>}
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
