import lagrangePolynomial from "./lagrangePolynomial"
import {TMathFunction} from "../utils"
import {useMemo} from "react"
import ScaledPlot from "../../../utils/components/ScaledPlot"

interface IParams {
    mathFunction: TMathFunction,
    xList: number[],
    plotXList: number[],
    name: string
}

function usePlotPolynomial({mathFunction, xList, plotXList, name}: IParams) {
    const [polynomial] = lagrangePolynomial(xList, mathFunction)
    const plotMathYList = useMemo(() => plotXList.map(mathFunction), [mathFunction, plotXList])
    const plotDotsYList = useMemo(() => xList.map(mathFunction), [mathFunction, xList])
    const plotPolynomialYList = useMemo(() => plotXList.map(polynomial), [plotXList, polynomial])

    const data = [
        { x: plotXList, y: plotMathYList, name: "Оригінальна функція"},
        { x: plotXList, y: plotPolynomialYList, name: "Поліном" },
        { x: xList, y: plotDotsYList, name: "" }
    ]

    return (<ScaledPlot data={data} title={name}/>)
}

export default usePlotPolynomial