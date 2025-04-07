import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!url) return;
        setLoading(true);
        async function getData() {
            try {
                let response = await fetch(url);
                let res = await response.json();
                if (res.error) {
                    setError(res.error.message);    
                }
                let res2 = res;
                setData(res2);
            }
            catch (error) {
                setError("Something went wrong");
            }
            finally {
                setLoading(false);
            }
        }
        getData();
    }, [url])

    return { data, error, loading };
}

export default useFetch;