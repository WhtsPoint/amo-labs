import {TMathFunction} from "../utils"
import lagrangePolynomial from "./lagrangePolynomial"
import {range} from "../../../utils/utils"

interface IParams {
    mathFunction: TMathFunction,
    nodeCount: number,
    x: number
}

function useDelta({ mathFunction, nodeCount, x }: IParams) {
    const generateFunctionPairs = (length: number): [number, number][] => range(1, length).map((x) => [x, mathFunction(x)])
    const [polynomial] = lagrangePolynomial(generateFunctionPairs(nodeCount))
    const [nextPolynomial] = lagrangePolynomial(generateFunctionPairs(nodeCount + 1))

    const deltaN = polynomial(x) - nextPolynomial(x)
    const deltaExact = polynomial(x) - mathFunction(x)
    const deltaK = 1 - (deltaExact / deltaN)
    return [nodeCount, deltaN, deltaExact, deltaK]
}

export default useDelta