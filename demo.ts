
import { createServer } from 'http'
import { testTs } from './src/lib'

import got from 'got'
console.log(' got:::', got)


function test() {
    const num: number = testTs(1, 100)
    console.log('num-ts启动测试:::', num)
}

test()

function creatServer() {
    var server = createServer()

    server.on('request', (_req, res) => {
        console.log('请求进来了···')
        var data = {
            code: 0,
            message: '获取成功',
            data: [{
                name: '蒙太利索家庭方案',
                price: 34,
            }, {
                name: '正面管教',
                price: 45
            }, {
                name: '你就是孩子最好的玩具',
                price: 67
            }]
        }
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        res.setHeader("Access-Control-Allow-Headers", "DNT,Cache-Control,Content-Type,X-Requested-With,User-Agent,Keep-Alive,X-Mx-ReqToken,If-Modified-Since")
        res.setHeader("Access-Control-Allow-Origin", "*")

        res.write(JSON.stringify(data), 'utf-8')
        res.end()
    })

    server.listen(3000, () => {
        console.log('服务启动了')
    })
}