const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer')

let url = "https://information.hanyang.ac.kr/#/bbs/notice?offset=0&max=20&bulletinCategoryId=1,4"
let url2 = "http://sw.hanyang.ac.kr/board/notice.php?ptype=&page=1&code=notice"

const crawler = async() => {  
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    const text = await page.evaluate(() => {
      const data = document.querySelectorAll('.ng-scope')[0];
      return data
    })
    console.log(text);
    await page.close();
    await browser.close();
  } catch (e) {
    console.error(e);
  }
  
}



crawler();