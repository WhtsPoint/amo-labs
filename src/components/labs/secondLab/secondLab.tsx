import InputList from "./inputList/inputList"
import {useState} from "react"
import IMeasuredByTime from "./IMeasuredByTime"
import "../utils.scss"
import StyledPlot from "./styledPlot"

function SecondLab() {
    const [measurements, setMeasurements] = useState<IMeasuredByTime[]>([])

    const nList = measurements.map(({n}) => n)

    return (<div className={"labContainer"}>
        <h3>Прискорене бульбашкове сортування з кінця до початку</h3>
        <InputList onTimeMeasured={setMeasurements} />
        <StyledPlot x={nList} y={measurements.map(({time}) => time)} title={"Графік залежності часу виконання від розміру масиву (експериментальний)"} />
        <StyledPlot x={nList} y={nList.map((value) => value ** 2)} title={"Графік залежності часу виконання від розміру масиву (теоретичний)"} />
    </div>)
}

export default SecondLab