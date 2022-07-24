import { Wechaty, Message } from "wechaty"
import {sleep} from '../lib'

export async function transferMsg(that: Wechaty, args: any, msg:Message) {

    let contact = await that.Contact.find({ name: args.NICKNAME })
        || await that.Contact.find({ alias: args.NAME })
    
    if (!contact) return

    const talker = msg.talker()
    const text = msg.text()
    const room = msg.room()
    
    let str = ''
    if (room) {
        const topic = await room.topic()
        str = `Room: <${topic}> Contact: <${talker.name()}> Text: #--> ${text}`
    } else {
        str = `Contact: <${talker.name()}> Text: #-->  ${text}`
    }

    await sleep(Math.round(Math.random() * 3000))
    await contact?.say(str)
}