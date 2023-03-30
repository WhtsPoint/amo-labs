import ICustomInputParams from "./ICustomInputParams"
import CustomInput from "./customInput"

interface IParams extends ICustomInputParams {
    onChange?: (value: number) => any,
    min?: number
}
function NumberInput(params : IParams) {

    const {onChange, min} = params

    const onTyped = (value : string) => {
        const num = Number(value)
        if(isNaN(num) || value === "") return "Невірний тип числа"
        if(min && num < min) return "Число менше, ніж мінімальне"
        onChange && onChange(num)
        return null
    }

    return (<CustomInput {...{...params, onChange : onTyped}} />)
}

export default NumberInput