import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [pending, isPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    console.log(res);
                    if (!res.ok) {
                        throw Error("unable to fetch blogs");
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setBlogs(data);
                    isPending(false);
                    setError(null);
                })
                .catch((err) => {
                    console.log(err.message);
                    setError(err.message);
                    isPending(false);
                });
        }, 1000);
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
