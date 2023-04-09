import { ChangeEvent, useState } from "react"


interface InputProps{
    value:string,
     changeHandler : (event:ChangeEvent<HTMLInputElement>)=> void
}
export function useInput (initialValue =''):InputProps{
    const [value, setValue] = useState('')
    const changeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
    return{
        value,
        changeHandler
    }
}