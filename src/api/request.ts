import got from 'got'
// import cheerio from 'cheerio'
// const cheerio = require('cheerio');
import * as cheerio from 'cheerio'

export async function getOne() {
    try {
        const res = await got.get<string>('http://wufazhuce.com/', {});
        let $ = cheerio.load(res.body);

        let todayOneList = $('#carousel-one .carousel-inner .item');
        let todayOne = $(todayOneList[0])
            .find('.fp-one-cita a')
            .text()
            .replace(/(^\s*)|(\s*$)/g, '');

        return todayOne;
    } catch (e) {
        console.log('获取每日一句出错', e);
        return '今天也是元气慢慢的一天呀';
    }

}