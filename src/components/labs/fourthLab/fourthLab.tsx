import NumberInput from "../../utils/customInput/numberInput"
import ScaledPlot from "../../utils/components/ScaledPlot"
import {rangeWithStep} from "../../utils/utils"
import {TMathFunction} from "../thirdLab/utils"
import {useEffect, useState} from "react"
import "../../../styles/inputs.scss"

const mathFunction: TMathFunction = (x) => x ** 3 + 6 * x - 5
const mathFunctionDerivative: TMathFunction = (x) => 3 * x ** 2 + 6
const mathFunctionSecondDerivative: TMathFunction = (x) => 6 * x

const mathFunctionString = "x^3 + 6x - 5"
const mathFunctionAnswer = [0.76013241]
const graphicDotsCount = 1000

const method = (f: TMathFunction, a: number, b: number, e: number) => {
    if(a === b || e === 0) throw new Error("Невірні значення проміжку або точності")
    if(f(a) * f(b) >= 0) throw new Error("Функція не є монотонною або не мах коренів на даному проміжку")
    let x
    let iterationsCount = 0
    while(Math.abs(b - a) >= e) {
        x = (a + b) / 2
        if(mathFunctionDerivative(x) * mathFunctionSecondDerivative(x) <= 0) [a, b] = [b, a]
        a = a - (f(a) * (b - a)) / (f(b) - f(a))
        b = b - f(b) / mathFunctionDerivative(b)
        iterationsCount++
    }
    return [(a + b) / 2, iterationsCount]
}

function FourthLab() {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    const [accuracy, setAccuracy] = useState<number>(0.1)
    const [answer, setAnswer] = useState<number>()
    const [error, setError] = useState<string | null>()
    const [iterationsCount, setIterationsCount] = useState<number>()

    useEffect(() => {
        let x, iterationsCount: number
        try {
            [x, iterationsCount] = method(mathFunction, a, b, accuracy)
        } catch (error) {
            setError((error as Error).message)
            return
        }
        setError(null)
        setIterationsCount(iterationsCount)
        setAnswer(x)
    }, [a, accuracy, b])

    const plotX = rangeWithStep(a, b, (b - a) / graphicDotsCount)
    let plotData = [
        { x: plotX, y: plotX.map(mathFunction) },
        { x: mathFunctionAnswer, y: mathFunctionAnswer.map(mathFunction)},
    ]
    if(answer) plotData = [...plotData, { x: [answer], y: [mathFunction(answer)]}]

    return (<div className={"labContainer"}>
        <div className={"py-4 text-center"}>
            <h4>Функція: {mathFunctionString}</h4>
            <h4>Корені рівняння: {mathFunctionAnswer.join(", ")}</h4>
        </div>
        <div className={"d-flex flex-column align-items-center gap-3"}>
            <div className={"d-flex gap-1 align-items-center"}>
                [<NumberInput className={"classicInput input-1x1"} placeholder={"a"} onChange={setA} />,
                <NumberInput className={"classicInput input-1x1"} placeholder={"b"} onChange={setB} />]
            </div>
            <NumberInput className={"classicInput"} placeholder={"Точність"} onChange={setAccuracy} />
            {error ? <span style={{color: "red"}}>{error}</span> : <span>Пораховане значення x = {answer}, Кількість ітерацій: {iterationsCount}</span>}
        </div>
        <ScaledPlot data={plotData} title={"Функція на проміжку [a,b]"}/>
    </div>)
}

export default FourthLab