import {gaussianEliminationMethod, isValidMatrix, matrixToNumbered} from "./utils"
import ResizableMatrix from "./resizableMatrix/resizableMatrix"
import {determinant} from "./determinant"
import {useState} from "react"
import variantImage from "../../../images/matrix/variant.png"
import "../utils.scss"

function FifthLab() {
    const [error, setError] = useState<string | null>(null)
    const [answers, setAnswers] = useState<number[]>([])

    const onMatrixChanged = (matrix: string[][], size: number) => {
        if(!isValidMatrix(matrix, size)) return setError("Матриця повити мати числа більше нуля")
        const adaptedMatrix = matrixToNumbered(matrix)
        if(determinant(adaptedMatrix.map(row => row.slice(0, adaptedMatrix.length))) === 0) return setError("Матриця має детермінанту = 0, тому розв'язків нема")
        setAnswers(gaussianEliminationMethod(adaptedMatrix))
        setError(null)

    }

    return (<div className={"labContainer gap-2"}>
        <img alt={""} src={variantImage}/>
        <ResizableMatrix onMatrixChanged={onMatrixChanged} />
        <div className={"d-flex flex-column gap-3 py-4"}>
           {error ?
           <span style={{color: "red"}}>{error}</span>
               :
           answers.reverse().map((answer, index) => <span key={index}>x{answers.length - index} = {answer}</span>)}
        </div>
    </div>)
}

export default FifthLab