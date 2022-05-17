import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [myObject, setMyObject] = useState({
        data: [],
        loading : true
    })

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setMyObject({
                    data : imgs,
                    loading: false
                });
                
        })
    }, [category])    
    
    return myObject;
}
