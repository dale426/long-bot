

import { Wechaty, Message } from "wechaty"
import { users } from "../config/contact"
import dayjs from 'dayjs'

const { name, alias } = users.dale

// 通知管理员
export async function notificationManager(bot: Wechaty, msg: Message) {
    if (msg.text() === 'onLogin') {
        let contact =
            (await bot.Contact.find({ name })) ||
            (await bot.Contact.find({ alias })); // 获取你要发送的联系人

        console.log('通知管理员小助手上线了')
        await bot.sleep(1200)
 
        setTimeout(async () => {
            await contact?.say(`小助手【${msg.talker()?.payload?.name}】
            \n 已经上线了🤟 \n\n登录时间: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`)
        }, 1000);
    }
}
