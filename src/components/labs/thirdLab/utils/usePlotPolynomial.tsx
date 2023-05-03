import {TMathFunction} from "../utils"
import useLagrangePolynomial from "./useLagrangePolynomial"
import {useMemo} from "react"

interface IParams {
    mathFunction: TMathFunction,
    xList: number[],
    plotXList: number[]
}

function usePlotPolynomial({mathFunction, xList, plotXList}: IParams) {
    const [polynomial] = useLagrangePolynomial(xList.map((x) => [x, mathFunction(x)]))
    const plotMathYList = useMemo(() => plotXList.map(mathFunction), [mathFunction, plotXList])
    const plotDotsYList = useMemo(() => xList.map(mathFunction), [mathFunction, xList])
    const plotPolynomialYList = useMemo(() => plotXList.map(polynomial), [plotXList, polynomial])
    
    return [ 
        {x: plotXList, y: plotMathYList},
        {x: plotXList, y: plotPolynomialYList},
        {x: xList, y: plotDotsYList}
    ]
}

export default usePlotPolynomial