/**
 * 登陆
 * @dale
 */
import { Contact } from 'wechaty'

export function onLogin (user: Contact) {
    console.info('StarterBot', '%s login', user)
  }