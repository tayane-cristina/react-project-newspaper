import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error , setError] = useState(null)
    const [itemId, setItemId] = useState(null)

     //REFATORANDO POST:
     const [config, setConfig] = useState(null)
     const [method, setMethod] = useState(null)
     const [callFetch, setCallFetch] = useState(false)

     const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method)
        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
            });
            setMethod(method)
            setItemId(data)
        }
     }

    //ESTA FUNÇÃO TRAZ UM VALOR PARA DENTRO DO MEU ESTADO DATA
    useEffect(() => {
        const fetchData = async () => {
            
            setLoading(true)

            try {
                const res = await fetch(url);
                const json = await res.json()

                setData(json)
            } catch (error) {
                
                console.log(error.message)
                setError("Erro ao carregar os dados")
            }

            

            setLoading(false)
        }
        fetchData()

    }, [url, callFetch]);

    //ESTA FUNÇÃO TRAS UM VALOR PARA DENTRO DO MEU ESTADO CALLFETCH
    useEffect(() => {

        const httpRequest = async () => {

            if (method === "POST") {
    
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions);
                const json = await res.json()
    
                setCallFetch(json)
    
            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)
                const json  = await res.json()
                setCallFetch(json)
            }
        }
        httpRequest()

    }, [config, method, url, itemId])

    return { data, httpConfig, loading, error }
};