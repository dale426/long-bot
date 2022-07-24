/**
 * 退出登陆
 * @dale
 */
import { Message } from 'wechaty'
import { transferMsg } from '../methods/transfer'
import { receiverList } from '../../config/contact';

export async function onMessage(this: any, msg: Message) {

  const msgSelf = msg.self(); // 是否自己发给自己的消息
  if (msgSelf) return;

  const room = msg.room(); // 是否为群消息

  console.info('Message:::', msg.toString())

  if (msg.text() === 'ding') {
    await msg.say('dong')
  }

  transferMsg(this, receiverList.dale, msg)
}