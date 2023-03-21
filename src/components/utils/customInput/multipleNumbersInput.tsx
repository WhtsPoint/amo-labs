import ICustomInputParams from "./ICustomInputParams"
import {ChangeEvent} from "react"
import CustomInput from "./customInput"

interface IParams extends ICustomInputParams {
    onChange?: (values: number[]) => any
}

function MultipleNumbersInput(params : IParams) {

    const onTyped = ({target} : ChangeEvent<HTMLInputElement>) => {
        const values = target.value.split(",").map(value => value.trim()).filter(value => !value.includes(" ") && value !== "").map(Number)
        if(values.some(isNaN)) return "Невірний формат рядка"
        params.onChange && params.onChange(values)
        return null
    }

    return (<CustomInput {...{...params, onChange : onTyped}} />)
}

export default MultipleNumbersInput