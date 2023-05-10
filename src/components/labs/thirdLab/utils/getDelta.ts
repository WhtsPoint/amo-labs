import {TMathFunction} from "../utils"
import lagrangePolynomial from "./lagrangePolynomial"

interface IParams {
    mathFunction: TMathFunction,
    nodeCount: number,
    xList: number[]
    x: number
}

function getDelta({ mathFunction, xList, nodeCount, x }: IParams) {
    const [polynomial] = lagrangePolynomial(xList.slice(0, nodeCount), mathFunction)
    const [nextPolynomial] = lagrangePolynomial(xList.slice(0, nodeCount + 1), mathFunction)

    const deltaN = polynomial(x) - nextPolynomial(x)
    const deltaExact = polynomial(x) - mathFunction(x)
    const deltaK = 1 - (deltaExact / deltaN)
    return [nodeCount, deltaN, deltaExact, deltaK]
}

export default getDelta