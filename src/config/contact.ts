
type UserItem = {
    /**
     * 微信昵称
     */
    name: string
    /**
     * 用户自定义的备注名称
     */
    alias: string
}


export type Users = {
    [key: string]: UserItem
}


export const users: Users = {
    dale: {
        name: '跃然心上',//昵称
        alias: '管理员', //备注姓名
    },
    cqq: {
        name: '心猿意马，', //昵称
        alias: '爱吃酸菜面的姑娘',//备注姓名
    },
    xiaoge: {
        name: '卡尔', //昵称
        alias: '卡尔小哥',//备注姓名
    },
    sun: {
        name: 'Smail. I\'m', //昵称
        alias: 'long.smail',//备注姓名
    }
}