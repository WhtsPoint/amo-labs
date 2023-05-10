import NumberInput from "../../../../../../utils/customInput/numberInput"

interface IParams {
    text: string | null,
    onChange: (value: number) => any,
    value?: number
}

function MatrixBlock({text, onChange, value}: IParams) {
    return (<div className={"d-flex align-items-center gap-1"}>
        <NumberInput className={"classicInput input-1x1"} value={value} onChange={onChange} />
        <span style={{width: 50}}>{text}</span>
    </div>)
}

export default MatrixBlock