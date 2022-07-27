/**
 * 退出登陆
 * @dale
 */
import { Message } from 'wechaty'
import { transferMsg } from '../methods/transfer'

export async function onMessage(this: any, msg: Message) {

  const msgSelf = msg.self(); // 是否自己发给自己的消息
  if (msgSelf) return;

  const room = msg.room(); // 是否为群消息

  if (msg.text() === 'ding') {
    await msg.say('dong')
  }

  transferMsg(this, msg)
}