import LinearAlgorithm from "./linearAlgorithm/linearAlgorithm"
import RamifiedAlgorithm from "./ramifiedAlgorithm/ramifiedAlgorithm"
import CycleAlgorithm from "./cycleAlgorithm/cycleAlgorithm"

function FirstLab() {
    return (<div className={"d-flex flex-column align-items-center text-white p-4"}>
        <LinearAlgorithm />
        <RamifiedAlgorithm />
        <CycleAlgorithm />
    </div>)
}

export default FirstLab