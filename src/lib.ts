export const testTs =  (a: number, b: number): number => {
    return a+b
}

export async function sleep(time: number = 1000) {
    setTimeout(() => {
        Promise.resolve()
    }, time);
}