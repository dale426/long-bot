/**
 * 登陆
 * @dale
 */
import { Wechaty, Contact } from "wechaty"
import { initDay } from '../methods/everyDay'

export async function onLogin(this: Wechaty, user: Contact) {
  await user.say('onLogin') // 微信给自己的发消息 - 手机不会显示，但是 onMessage能监听到
  
  console.info(`小助理【${user.name()}】上线了`)
  await this.sleep(1000)
  await initDay(this)
}