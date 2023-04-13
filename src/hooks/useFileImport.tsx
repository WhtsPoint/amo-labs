import {useRef} from "react"

function useFileImport() : [JSX.Element, () => any] {
    const inputRef = useRef<HTMLInputElement>(null)

    const openFile = () => inputRef && inputRef.click()


    return [<input   />, openFile]
}

export default useFileImport