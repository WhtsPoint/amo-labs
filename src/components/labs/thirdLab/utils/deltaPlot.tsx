import lagrangePolynomial from "./lagrangePolynomial"
import {TMathFunction} from "../utils"
import ScaledPlot from "../../../utils/components/ScaledPlot"
import Decimal from "decimal.js"

interface IParams {
    xList: number[],
    plotXList: number[],
    mathFunction: TMathFunction,
    nodeCount: number
}

function DeltaPlot({ xList, mathFunction, nodeCount, plotXList }: IParams) {
    const [polynomial] = lagrangePolynomial(xList.slice(0, nodeCount), mathFunction)
    const [nextPolynomial] = lagrangePolynomial(xList.slice(0, nodeCount + 1), mathFunction)
    const deltaFunction = (x: number) => {
        const realX = x
        return -Math.log(polynomial(realX) - nextPolynomial(realX))
    }

    console.log(plotXList, plotXList.map(deltaFunction))
    return (<ScaledPlot data={[{
        x: plotXList,
        y: plotXList.map(deltaFunction)
    }]} title={"Похибка (-ln(|Pn(x) - Pn+1(x)|))"} />)
}

export default DeltaPlot