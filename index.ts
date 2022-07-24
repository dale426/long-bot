import { WechatyBuilder, Contact, Message } from 'wechaty'
import qt from 'qrcode-terminal'
import { onLogin } from './src/listeners/login'
import { onMessage } from './src/listeners/message'
import { onLogout } from './src/listeners/logout'
import { onScan } from './src/listeners/scan'
// 登录
// async function onLogin(user: ContactSelfInterface) {
//   console.log(`贴心小助理${user}登录了`);
//   const date = new Date()
//   console.log(`当前容器时间:${date}`);
//   // if (config.AUTOREPLY) {
//   //     console.log(`已开启机器人自动聊天模式`);
//   // }

//   // 登陆后创建定时任务
//   // await initDay();
// }

// async function onMessage(msg: Message) {
//   const contact = msg.talker(); // 发消息人

//   const content = msg.text().trim(); // 消息内容
//   const room = msg.room(); // 是否是群消息
//   const alias = await contact.alias() || await contact.name(); // 发消息人备注
//   const isText = msg.type() === MessageType.Text;
//   if (msg.self()) {
//     return;
//   }

//   if (room && isText) {
//     // 如果是群消息 目前只处理文字消息
//     const topic = await room.topic();
//     console.log(`群名: ${topic} 发消息人: ${await contact.name()} 内容: ${content}`);
//   } else if (isText) {
//     // 如果非群消息 目前只处理文字消息
//     console.log(`发消息人: ${alias} 消息内容: ${content}`);
//   }
// }

// // 登出
// function onLogout(user) {
//   console.log(`小助手${user} 已经登出`);
// }

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
    .then(() => console.log('开始登陆微信'))
    .catch((e) => console.error(`程序奔溃了,${e.message}`))

  return bot
}

const globalBots = main()