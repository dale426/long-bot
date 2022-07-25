import { Wechaty, Message } from "wechaty"
import {sleep} from '../lib'

export async function transferMsg(that: Wechaty, args: any, msg:Message) {

    let contact = await that.Contact.find({ name: args.NICKNAME })
        || await that.Contact.find({ alias: args.NAME })
    
    if (!contact) return

    const talker = msg.talker()
    const text = msg.text()
    const room = msg.room()

    console.log("talker, text, room", talker?.name())
    let str = ''
    if (room) {
        const topic = await room.topic()
        console.log("topic", topic)
        str = `Room: <${topic}> Contact: <${talker.name()}> Text: #--> ${text}`
    } else {
        str = `Contact: <${talker.name()}> Text: #-->  ${text}`
    }

    const sleepTime = Math.round(Math.random() * 3000)
    console.log('sleepTime:::', sleepTime)
    console.time()
    await sleep(sleepTime)
    console.timeEnd()
    
    await contact?.say(talker.name())
}