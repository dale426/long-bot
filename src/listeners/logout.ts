/**
 * 退出登陆
 * @dale
 */
 import { Contact } from 'wechaty'
 
 export function onLogout (user: Contact) {
    console.info(`stop Bot ${user.name()} 下线了`)
  }