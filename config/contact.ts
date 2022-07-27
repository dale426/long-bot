
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
    },
    xiaoge: {
        NAME:'卡尔小哥',//备注姓名
        NICKNAME:'卡尔', //昵称
    }
}