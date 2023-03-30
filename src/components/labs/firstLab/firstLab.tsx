import LinearAlgorithm from "./linearAlgorithm/linearAlgorithm"
import RamifiedAlgorithm from "./ramifiedAlgorithm/ramifiedAlgorithm"
import CycleAlgorithm from "./cycleAlgorithm/cycleAlgorithm"
import "../utils.scss"

function FirstLab() {
    return (<div className={"labContainer"}>
        <LinearAlgorithm />
        <RamifiedAlgorithm />
        <CycleAlgorithm />
    </div>)
}

export default FirstLab