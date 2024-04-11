import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [pending, isPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortconst = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortconst.signal })
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
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        isPending(false);
                        setError(err.message);
                    }
                });
        }, 1000);

        return () => abortconst.abort();
    }, [url]);

    return { data, pending, error };
};

export default useFetch;
