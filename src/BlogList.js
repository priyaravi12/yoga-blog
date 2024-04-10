const BlogList = ({ blogs, title }) => {
    //const blogs =props.blogs;
    //const title =props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blogpreview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h4>written by {blog.author}</h4>
                    {/* <button onClick={() => handleDelete(blog.id)}>delete</button> */}
                </div>
            ))}
        </div>
    );
};

export default BlogList;
