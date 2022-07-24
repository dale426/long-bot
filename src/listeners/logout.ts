/**
 * 退出登陆
 * @dale
 */
 import { Contact } from 'wechaty'
 
 export function onLogout (user: Contact) {

    console.info('StarterBot', '%s logout', user)
  }