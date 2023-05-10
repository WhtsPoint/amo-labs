import "../../../../../styles/inputs.scss"
import {range} from "../../../../utils/utils"
import MatrixRow from "./matixRow/matrixRow"

interface IParams {
    size: number,
    values: number[][],
    onChange: (values: number[][]) => any
}

function Matrix({size, values, onChange}: IParams) {

    const onMatrixChanged = (column: number, row: number[]) => {
        const newValues = [...values]
        newValues[column] = row
        onChange(newValues)
    }

    return (<div className={"d-flex flex-column gap-3"}>
        {range(0, size - 1).map(y => <MatrixRow key={y} column={y} length={size} values={values[y]} onChange={(val) => onMatrixChanged(y, val)} />)}
    </div>)
}

export default Matrix