import ScaledPlot from "../../utils/components/ScaledPlot"

interface IParams {
    x: number[],
    y: number[],
    title: string
}

function StyledPlot({x, y, title}: IParams) {
    return <ScaledPlot data={[{x, y, mode: 'lines', marker: {color: 'red', }}]} title={title} />
}

export default StyledPlot