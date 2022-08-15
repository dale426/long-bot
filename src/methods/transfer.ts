import { Wechaty, Message } from "wechaty"
import { users, Users } from '../config/contact';

export async function transferMsg(bot: Wechaty, msg: Message) {
    transferMsgOneToOne(bot, msg, { fromer: 'sun', receiver: 'dale' })
}

// 一对一消息转发
export async function transferMsgOneToOne<T extends keyof Users>(bot: Wechaty, msg: Message, options: { fromer: T, receiver: T }) {
    // 只处理文本消息
    if (msg.type() !== bot.Message.Type.Text) return

    const { fromer, receiver } = options

    const currFrom = msg.talker()
    const { alias: msgFromAlias } = currFrom.payload || {}
    

    // 判断是否指定的发件人
    if (msgFromAlias !== users[fromer].alias) return

    // 判断接收人是否存在
    const { name, alias } = users[receiver]
    let contact = await bot.Contact.find({ alias }) || await bot.Contact.find({ name })
    if (!contact) return

    const text = msg.text()
    const room = msg.room()

    let str = ''
    if (room) {
        const topic = await room.topic()
        str = `Room - ${topic}^^${msgFromAlias}\r${text}`
    } else {
        str = `[ Message@${msgFromAlias} ] :\r${text}`
    }

    await bot.sleep(Math.random() * 3000)
    
    await msg.forward(contact)
}