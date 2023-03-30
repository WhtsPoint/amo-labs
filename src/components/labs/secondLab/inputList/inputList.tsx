import {countExecutionTime, randomArray, range} from "../../../utils/utils"
import MultipleNumbersInput from "../../../utils/customInput/multipleNumbersInput"
import IMeasuredByTime from "../IMeasuredByTime"
import useInputList from "../../../../hooks/inputList/useInputList"
import {bubbleFromEnd} from "../../../utils/sorts"
import {useState} from "react"

interface IParams {
    onTimeMeasured: (measurements: IMeasuredByTime[]) => any,
}

function InputList({onTimeMeasured}: IParams) {
    const {values, setValues, arraysCount, setArraysCount, onTyped} = useInputList()
    const [defaultValues, setDefaultValues] = useState<number[][]>([])

    const addArray = () => setArraysCount(arraysCount + 1)
    const removeArray = () => setArraysCount(arraysCount - 1)
    const fillArrays = () => {
        const randomValues = range(0, arraysCount - 1).map((index) => randomArray(1, 99999, 1000 + index * 100))
        setDefaultValues(randomValues)
        setValues(randomValues)
    }

    const startExecutionCount = () => {
        const sortedValues = values.sort((a, b) => a.length - b.length)
        const newMeasurements = sortedValues.map((array) => ({time: countExecutionTime(() => bubbleFromEnd([...array])), n: array.length}))
        onTimeMeasured(newMeasurements)
    }

    return (<div className={"d-flex flex-column align-items-center gap-2"}>
        <div className={"d-flex flex-column gap-3"}>
        {range(1, values.length).map((_,index) => {
            return <MultipleNumbersInput key={index}
                                         className={"classicInput"}
                                         placeholder={"Введіть масив чисел"}
                                         onChange={(values) => onTyped(index, values)}
                                         defaultValue={defaultValues[index]}
                />
            })}
        </div>
        <div className={"d-flex gap-1"}>
            <button className={"classicButton"} onClick={addArray}>Додати масив</button>
            <button className={"classicButton"} onClick={removeArray}>Видалити останній масив</button>
            <button className={"classicButton"} onClick={fillArrays}>Заповнити масиви випадковими числами</button>
            <button className={"classicButton"} onClick={startExecutionCount}>Вирахувати час виконання</button>
        </div>
    </div>)
}

export default InputList