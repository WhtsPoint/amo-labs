import Plot from "react-plotly.js"

interface IParams {
    x: number[],
    y: number[],
    title: string
}

function StyledPlot({x, y, title}: IParams) {
    return  <Plot className={"py-4"}
    data={[{x, y, mode: 'lines', marker: {color: 'red'}}]}
    layout={{width: 700, height: 300, title}}
    />
}

export default StyledPlot