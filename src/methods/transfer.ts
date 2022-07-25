import { Wechaty, Message } from "wechaty"
import { sleep } from '../lib'
import { users, Users } from '../../config/contact';

export async function transferMsg(that: Wechaty, msg: Message) {
    transferMsgToDale(that, msg, 'cqq', 'dale')
}

export async function transferMsgToDale<T extends keyof Users>(that: Wechaty, msg: Message, fromer: T, receiver: T) {
    // 只处理文本消息
    if (msg.type() !== that.Message.Type.Text) return

    // 判断是否指定发件人的消息
    const from = msg.talker()
    const { alias: fromAlias, name: fromName } = from.payload || {}
    if (fromAlias !== users[fromer].NICKNAME && fromName !== users[fromer].NAME) return

    // 判断接收人是否存在
    const { NICKNAME: name, NAME: alias } = users[receiver]
    let contact = await that.Contact.find({ name }) || await that.Contact.find({ alias })
    if (!contact) return

    const talkerName = msg.talker().name()
    const text = msg.text()
    const room = msg.room()

    let str = ''
    if (room) {
        const topic = await room.topic()
        str = `#Room - ${topic}^^${talkerName}\r${text}`
    } else {
        str = `#Message - ${talkerName}\r${text}`
    }

    await sleep(Math.round(Math.random() * 3000))

    await contact?.say(str)
}