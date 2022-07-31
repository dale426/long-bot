/**
 * 退出登陆
 * @dale
 */
import { Message, Wechaty } from 'wechaty'
import { transferMsg } from '../methods/transfer'
import { getReplayContent } from '../methods/everyDay'
import { notificationManager } from '../methods/notification'
import { users } from '../config/contact'

export async function onMessage(this: Wechaty, msg: Message) {

  const msgSelf = msg.self(); // 是否自己发给自己的消息
  if (msgSelf) {
    return notificationManager(this, msg)
  };

  // const room = msg.room(); // 是否为群消息

  if (msg.text() === 'ding') {
    await msg.say('dong')
  }

  const fromer = msg.talker().payload?.alias
  if (!fromer) return

  if ([users.cqq?.NICKNAME, users.dale.NICKNAME]?.includes(fromer) && ['纪念日'].includes(msg.text())) {
    let content = await getReplayContent()
    await msg.talker().say(content)
  }

  transferMsg(this, msg)
}