import NumberInput from "../../utils/customInput/numberInput"
import {range} from "../../utils/utils"
import {TMathFunction} from "./utils"
import {useMemo, useState} from "react"
import usePlotPolynomial from "./utils/usePlotPolynomial"
import DeltaTable from "./deltaTable/deltaTable"
import "../../../styles/inputs.scss"
import "./thirdLab.scss"
import DeltaPlot from "./utils/deltaPlot"

const MAX_NODE_COUNT = 11
const [a, b] = [0, 1]
const MATH_FUNCTION : TMathFunction = (x : number) => Math.exp(x) * Math.sin(x)
const PLOT_X_COUNT = 1000
const X_LIST = range(0, MAX_NODE_COUNT - 1).map((i) => a + (b - a) / 10 * i)

const SIN_TEXT = "sin(x)"
const MAIN_FUNCTION_TEXT = "e^x * sin(x)"

function ThirdLab() {
    const [nodeCount, setNodeCount] = useState<number>(MAX_NODE_COUNT)
    const currentXList = X_LIST.slice(0, nodeCount)

    const plotXList = useMemo(() => range(1, PLOT_X_COUNT).map((i) => (b - a) / PLOT_X_COUNT * i), [])
    const plot = usePlotPolynomial({ mathFunction: MATH_FUNCTION, xList: currentXList, plotXList, name: MAIN_FUNCTION_TEXT })
    const sinusPlot = usePlotPolynomial({ mathFunction: Math.sin, xList: currentXList, plotXList, name: SIN_TEXT })

    const deltaNodeCount = Math.min(nodeCount, MAX_NODE_COUNT - 1)

    return (<div className={"labContainer"}>
        <div className={"d-flex flex-column align-items-center"}>
            <NumberInput className={"classicInput input-1x1"} onChange={setNodeCount} min={1} max={11}/>
            Кількість вузлів
            {plot}
            {sinusPlot}
            <DeltaPlot xList={X_LIST} plotXList={plotXList} mathFunction={MATH_FUNCTION}  nodeCount={deltaNodeCount}/>
            <DeltaTable mathFunction={MATH_FUNCTION} xList={X_LIST} nodeCount={deltaNodeCount} />
        </div>
    </div>)
}

export default ThirdLab