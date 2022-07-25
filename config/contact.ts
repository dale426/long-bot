
type UserItem = {
    NAME: string
    NICKNAME: string
}


export type Users = {
    [key: string]: UserItem
}


export const users: Users = {
    dale: {
        NAME:'跃然心上',//备注姓名
        NICKNAME:'跃然心上', //昵称
    },
    cqq: {
        NAME:'心猿意马，',//备注姓名
        NICKNAME:'爱吃酸菜面的姑娘', //昵称
    }
}

// dale: {
//     ONE:'http://wufazhuce.com/',////ONE的web版网站
//     MOJI_HOST:'https://tianqi.moji.com/weather/china/', //中国墨迹天气url
//     CITY:'shaanxi',//收信者所在城市
//     LOCATION:'lianhu-district',//收信者所在区
//     MEMORIAL_DAY:'2015/04/18', //你和收信者的纪念日
//     NAME:'跃然心上',//备注姓名
//     NICKNAME:'跃然心上', //昵称
//     SENDDATE:'30 * * * * *',//定时发送时间，规则见 /schedule/index.js
// }