import {randomInt} from "./math"

function range(startIndex: number, endIndex: number): number[] {
    let result = []
    for(let index = startIndex; index <= endIndex; index++) result.push(index)
    return result
}

function countExecutionTime(callback: () => any): number {
    const start = performance.now()
    callback()
    return performance.now() - start
}

function randomArray(min : number, max : number, length : number) : number[] {
    return range(1, length).map(() => randomInt(min, max))
}

export {range, countExecutionTime, randomArray}