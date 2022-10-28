/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from "react";

interface Object {
    payload: PromiseLike<undefined> | undefined,
    loading: boolean,
    error: string,
}

 export const callApi = async (url:string) :Promise<Object> => {

    let payload: PromiseLike<undefined> | undefined;
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
         setLoading(true);         
         fetch(url)
             .then(res => res.json())
             .then(data => payload = data)
             .catch(error => setError(error))
             .finally(() => setLoading(false));
             
            }, []);

            await Promise.resolve(payload).then(() => console.log("resolved"))
            console.log(payload)

    return { payload, loading, error}

  }
  
  export default callApi;