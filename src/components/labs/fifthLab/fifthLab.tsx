import "../utils.scss"
import ResizableMatrix from "./resizableMatrix/resizableMatrix"
import {useState} from "react"

const gaussianEliminationMethod = (matrix: number[][]): number[] => {
    for(let i = 0; i < matrix.length - 1; i++) {
        for(let j = i + 1; j < matrix.length; j++) {
            const ratio = matrix[j][i] / matrix[i][i]
            matrix[j] = matrix[j].map((value, index) => value - ratio * matrix[i][index])
        }
    }
    let answers: number[] = []
    for(let i = 0; i < matrix.length; i++) {
        const j = matrix.length - 1 - i
        let sum = 0;
        for(let k = 0; k < i; k++) sum += matrix[j][matrix.length - 1 - k] * answers[k]
        console.log(matrix[j][matrix.length], sum, matrix[j][j])
        answers[i] = (matrix[j][matrix.length] - sum) / matrix[j][j]
    }
    return answers
}

function FifthLab() {
    const [error, setError] = useState<string | null>(null)
    const [answers, setAnswers] = useState<number[]>([])

    const onMatrixChanged = (matrix: number[][], size: number) => {
        console.log(matrix, matrix.length)
        if(matrix.length !== size || matrix.some(row => row.length !== size + 1 || row.some(value => value === undefined || value <= 0))) {
            setError("Матриця повити мати числа більше нуля")
        } else {
            setAnswers(gaussianEliminationMethod(matrix))
            setError(null)
        }
    }

    return (<div className={"labContainer"}>
        <ResizableMatrix onMatrixChanged={onMatrixChanged} />
        {error ? <span style={{color: "red"}}>{error}</span> : answers.map((answer, index) => <span>x{index + 1} = {answer}</span> )}
    </div>)
}

export default FifthLab