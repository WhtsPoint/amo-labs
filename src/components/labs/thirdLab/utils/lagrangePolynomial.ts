import {multiple, range, sum} from "../../../utils/utils"
import {TMathFunction} from "../utils"

type TReturn = [TMathFunction]

function useLagrangePolynomial(values : [number, number][]) : TReturn {
    const xList = values.map(([xList]) => xList)
    const yList = values.map(([_, yList]) => yList)

    const polynomial = (x: number) => {
        const row = range(0, xList.length - 1).map((i) => multiple(xList.filter((_, index) => index !== i).map((xI) => (x - xI) / (xList[i] - xI))) * yList[i])
        return sum(row)
    }

    return [polynomial]
}

export default useLagrangePolynomial