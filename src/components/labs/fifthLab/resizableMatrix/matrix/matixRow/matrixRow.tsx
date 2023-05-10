import {range} from "../../../../../utils/utils"
import MatrixBlock from "./matrixBlock/matrixBlock"

interface IParams {
    column: number,
    length: number,
    values?: number[]
    onChange: (row: number[]) => any
}

function MatrixRow({column, length, values, onChange}: IParams) {

    const getBlockText = (index: number) => "x" + (index + 1)
    const getValue = (index: number) => values ? values[index] || 0 : 0

    const onRowChanged = (x: number, value: number) => {
        let newRow = [...(values || [])]
        newRow[x] = value
        onChange(newRow)
    }

    return (<div className={"d-flex gap-3 align-items-center"}>
        {range(0, length - 1).map(x => <MatrixBlock key={x} value={getValue(x)} text={getBlockText(x)} onChange={(val) => onRowChanged(x, val)} />)}
        =
        <MatrixBlock value={getValue(length)} text={null} onChange={(val) => onRowChanged(length, val)} />
    </div>)
}

export default MatrixRow