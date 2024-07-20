'use client'
import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"
const ButtonSubmit = ({type}:{type:string}) => {
    const {pending} = useFormStatus()
  return (
   <Button>{pending ? "Submitting ":type}</Button>
  )
}
export default ButtonSubmit