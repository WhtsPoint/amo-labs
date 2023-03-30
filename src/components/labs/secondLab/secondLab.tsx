import Plot from "react-plotly.js"
import InputList from "./inputList/inputList"
import {useState} from "react"
import IMeasuredByTime from "./IMeasuredByTime"
import "../utils.scss"

function SecondLab() {
    const [measurements, setMeasurements] = useState<IMeasuredByTime[]>([])

    const nList = measurements.map(({n}) => n)

    return (<div className={"labContainer"}>
        <h3>Прискорене бульбашкове сортування з кінця до початку</h3>
        <InputList onTimeMeasured={setMeasurements} />
        <Plot className={"py-4"}
              data={[{x: nList, y: measurements.map(({time}) => time), mode: 'lines', marker: {color: 'red'}}]}
              layout={{width: 500, height: 300, title: 'Графік залежності часу виконання від розміру масиву'}}
        />
        <Plot className={"py-4"}
              data={[{x: nList, y: nList.map((value) => value ** 2), mode: 'lines', marker: {color: 'red'}}]}
              layout={{width: 500, height: 300, title: 'Графік залежності часу виконання від розміру масиву'}}
        />
    </div>)
}

export default SecondLab