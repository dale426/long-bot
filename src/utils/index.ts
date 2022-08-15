export function getDay(date: string) {
  var date1 = new Date(date);
  var date2 = new Date();
  const diff: number = date2.getTime() - date1.getTime()

  var iDays = Math.floor(diff / 1000 / 60 / 60 / 24);

  return iDays;
}

export function formatDate() {
  var tempDate = new Date();
  var year = tempDate.getFullYear();
  var month = tempDate.getMonth() + 1;
  var day = tempDate.getDate();
  var hour = String(tempDate.getHours());
  var min = String(tempDate.getMinutes());
  var second = String(tempDate.getSeconds());
  if (+hour < 10) {
    hour = "0" + hour;
  }
  if (+min < 10) {
    min = "0" + min;
  }
  if (+second < 10) {
    second = "0" + second;
  }
  
  return year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + second;
}

// 延迟执行函数
export async function sleep(time: number = 1000) {
  return new Promise((resolve, rejects) => {
      setTimeout(() => {
          resolve(null)
      }, time);
  })
}
