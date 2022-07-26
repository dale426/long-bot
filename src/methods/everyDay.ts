import { WechatyInterface } from "wechaty/impls";
import config from "../../config/index";
import setSchedule from '../schedule'
import { users } from '../../config/contact'
import { getOne, getWeather } from '../api/request'
import {getDay, formatDate} from '../utils'

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

        let today = await formatDate(new Date()); //获取今天的日期
        let memorialDay = getDay(config.MEMORIAL_DAY); //获取纪念日天数
        // let sweetWord = await superagent.getSweetWord();

        // 你可以修改下面的 str 来自定义每日说的内容和格式
        // PS: 如果需要插入 emoji(表情), 可访问 "https://getemoji.com/" 复制插入
        let str = `${today}\n我们在一起的第${memorialDay}天
        \n\n元气满满的一天开始啦,要开心噢^_^
        \n\n今日天气
        \n${weatherTips}
        \n${todayWeather}
        \n每日一句:
        \n${one}
        \n\n每日土味情话：
        \n${sweetWord}
        \n\n————————最爱你的我`;
        try {
            // logMsg = str;
            // await delay(2000);
            // await contact.say(str); // 发送消息
        } catch (e) {
            // logMsg = e.message;
        }
        console.log(logMsg);
    });
}