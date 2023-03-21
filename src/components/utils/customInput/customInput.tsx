import ICustomInputParams from "./ICustomInputParams"
import {ChangeEvent, useEffect, useState} from "react"
import clsx from "clsx"

interface IParams extends ICustomInputParams {
    onChange?: (event : ChangeEvent<HTMLInputElement>) => string | null
}

function CustomInput({onChange, onError, className, placeholder} : IParams) {
    const [error, setError] = useState<string | null>(null)

    useEffect(() => onError && onError(error), [onError, error])

    const onTyped = (event : ChangeEvent<HTMLInputElement>) => onChange && setError(onChange(event) || null)

    return (<input onChange={onTyped} className={clsx(className, error && "errorInput")} placeholder={placeholder} />)
}

export default CustomInput