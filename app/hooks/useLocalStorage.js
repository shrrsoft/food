
import { useEffect, useState } from "react";


export function useLocalStorage(key, initialValue) {
    useEffect(() => {
        let localCart = localStorage.getItem("cartItems")
        const [value, setValue] = useState(() => {

        if (localCart != null) {
            return JSON.parse(localCart)
        } else {
            return initialValue
        }    return [value, setValue]

    })
    }, [])
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value) )
    }, [key, value])

}