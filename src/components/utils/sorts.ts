function bubbleFromEnd(values: number[]) {
    const n = values.length
    let replacement = false
    do {
        replacement = false
        for(let i = 0; i < n; i++) {
            if(values[i] > values[i + 1]) {
                const bubble = values[i]
                values[i] = values[i + 1]
                values[i + 1] = bubble
                replacement = true
            }
        }
    } while (replacement)
}

export {bubbleFromEnd}