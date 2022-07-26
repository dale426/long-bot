/**
 * 登陆
 * @dale
 */
import { Wechaty, Contact } from "wechaty"
import {initDay} from '../methods/everyDay'

export async function onLogin (this: Wechaty, user: Contact) {
    console.info(`小助理【${user.name()}】上线了`)
    await initDay(this);
  }