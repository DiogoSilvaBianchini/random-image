import {useEffect, useState} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const httpRequest = async () => {
            const res = await fetch(url)
            const results = await res.json()
            setData(results.results)
            console.log(results)
        }

        httpRequest()
    },[url])

    return {data}
}

export default useFetch