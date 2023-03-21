import {ChangeEvent} from "react"
import ICustomInputParams from "./ICustomInputParams"
import CustomInput from "./customInput"

interface IParams extends ICustomInputParams {
    onChange?: (value: number) => any,
    min?: number
}
function NumberInput(params : IParams) {

    const {onChange, min} = params

    const onTyped = ({target} : ChangeEvent<HTMLInputElement>) => {
        const value = Number(target.value)
        if(isNaN(value) || target.value === "") return "Невірний тип числа"
        if(min && value < min) return "Число менше, ніж мінімальне"
        onChange && onChange(value)
        return null
    }

    return (<CustomInput {...{...params, onChange : onTyped}} />)
}

export default NumberInput