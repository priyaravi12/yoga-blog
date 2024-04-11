import { useParams } from "react-router-dom/cjs/react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    return <h2>Blog detail {id}</h2>;
};

export default BlogDetails;
