export const testTs = (a: number, b: number): number => {
    return a + b
}

// 延迟执行函数
export async function sleep(time: number = 1000) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve(null)
        }, time);
    })
}