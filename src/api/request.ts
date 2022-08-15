import got from 'got'
import cheerio from 'cheerio'
import config from '../config'
import { Response, CancelableRequest } from 'got';


// 获取每日一句
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
        return '<今天也是元气慢慢的一天呀>';
    }

}

/**
 * 获取天气
 */
export async function getWeather() {
    let url = config.MOJI_HOST + config.CITY + '/' + config.LOCATION
    let res = await got.get(url)

    let $ = cheerio.load(res.body)
    let weatherTips = $('.wea_tips em').text()
    const today = $('.forecast .days').first().find('li');
    let todayInfo = {
        Day: $(today[0]).text().replace(/(^\s*)|(\s*$)/g, ""),
        WeatherText: $(today[1]).text().replace(/(^\s*)|(\s*$)/g, ""),
        Temp: $(today[2]).text().replace(/(^\s*)|(\s*$)/g, ""),
        Wind: $(today[3]).find('em').text().replace(/(^\s*)|(\s*$)/g, ""),
        WindLevel: $(today[3]).find('b').text().replace(/(^\s*)|(\s*$)/g, ""),
        PollutionLevel: $(today[4]).find('strong').text().replace(/(^\s*)|(\s*$)/g, "")
    }
    let obj = {
        weatherTips: weatherTips,
        todayWeather: todayInfo.Day + ': ' + todayInfo.WeatherText + '<br>' + '温度: ' + todayInfo.Temp + '<br>'
            + todayInfo.Wind + todayInfo.WindLevel + '<br>' + '空气: ' + todayInfo.PollutionLevel + '<br>'
    }
    return obj
}

/**
 * 获取土味情话
 */
export async function getSweetWord() {
    let url = config.TXHOST + 'saylove/index';
    try {
        let res = await got.get(url, {
            searchParams: { key: config.TXAPIKEY }
        }).json<{
            code: number,
            newslist: any[]
        }>();

        if (res.code === 200) {
            let sweet = res.newslist[0].content;
            let str = sweet.replace('\r\n', '<br>');
            return str;
        } else {
            return '你很像一款游戏。我的世界'
        }
    } catch (err) {
        console.log('获取接口失败', err);
    }
}