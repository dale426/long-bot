import { WechatyBuilder } from 'wechaty'
import { onLogin } from './src/listeners/login'
import { onMessage } from './src/listeners/message'
import { onLogout } from './src/listeners/logout'
import { onScan } from './src/listeners/scan'
import { getOne } from './src/api/request'

function main() {
  const bot = WechatyBuilder.build({
    name: 'long-bot',
    puppet: 'wechaty-puppet-wechat', // 如果有token，记得更换对应的puppet
    puppetOptions: {
      uos: true
    }
  })

  bot.on('scan', onScan);
  bot.on('login', onLogin);
  bot.on('logout', onLogout);
  bot.on('message', onMessage);

  bot
    .start()
    .then(() => console.log('开始登陆微信...'))
    .catch((e) => console.error(`程序奔溃了,${e.message}`))

  return bot
}

getOne().then(r => {
  console.log('getOne():::',r)

})
// main()