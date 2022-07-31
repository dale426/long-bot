import { WechatyInterface } from "wechaty/impls";
import config from "../config/index";
import setSchedule from '../schedule'
import { users } from '../config/contact'
import { getOne, getWeather, getSweetWord } from '../api/request'
import { getDay, formatDate, sleep } from '../utils'

const { NICKNAME: name, NAME: alias } = users.cqq

export function initDay(bot: WechatyInterface) {
    console.log(`已经设定每日说任务`);

    setSchedule(config.SENDDATE, async () => {
        console.log('你的贴心小助理开始工作啦！');
        let logMsg;
        let contact =
            (await bot.Contact.find({ name })) ||
            (await bot.Contact.find({ alias })); // 获取你要发送的联系人

        let one = await getOne(); //获取每日一句

        let { weatherTips, todayWeather } = await getWeather(); //获取天气信息

        let today = await formatDate(); //获取今天的日期
        let memorialDay = getDay(config.MEMORIAL_DAY); //获取纪念日天数
        let sweetWord = await getSweetWord();

        // 你可以修改下面的 str 来自定义每日说的内容和格式
        // PS: 如果需要插入 emoji(表情), 可访问 "https://getemoji.com/" 复制插入
        let str = `此刻${today}
        \n我们在一起的第${memorialDay}天
        \n${sweetWord}
        \n\n今日天气
        \n${weatherTips}
        \n${todayWeather}
        \n🍀今日箴言:
        \n${one}
        \n\n————————最爱你的我 💞 `;
        try {
            logMsg = str;
            await sleep(2000);
            await contact?.say(str); // 发送消息
        } catch (e: any) {
            logMsg = e.message;
        }
        console.log(logMsg);
    });
}