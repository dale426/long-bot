/**
 * 登陆
 * @dale
 */
import { Wechaty, Contact } from "wechaty"

export function onLogin (this: Wechaty, user: Contact) {
    console.info(`小助理【${user.name()}】上线了`)
  }