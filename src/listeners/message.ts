/**
 * 退出登陆
 * @dale
 */
 import { Message } from 'wechaty'

 export async function onMessage (msg: Message) {
     console.info('StarterBot', msg.toString())
   
     if (msg.text() === 'ding') {
       await msg.say('dong')
     }
   }