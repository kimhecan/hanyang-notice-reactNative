const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer')

// let url = "https://information.hanyang.ac.kr/#/bbs/notice?offset=0&max=20&bulletinCategoryId=1,4"
// let url2 = "http://sw.hanyang.ac.kr/board/notice.php?ptype=&page=1&code=notice"

// const crawler = async() => {  
//   try {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto(url);
//     const text = await page.evaluate(() => {
//       const data = document.querySelectorAll('.ikc-tablelist');
//       return data
//     })
//     console.log(text);
//     await page.close();
//     await browser.close();
//   } catch (e) {
//     console.error(e);
//   }
  
// }

const cralwer = async () => {

  const onlyTypeTag = ({ type }) => type == 'tag'
  const uri = "http://sw.hanyang.ac.kr/board/notice.php?ptype=&page=1&code=notice"

  try {
    const response = await axios(uri);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      const data = $('.bbs_con tbody')[0].children
        .filter(onlyTypeTag)
        .map((tr) => tr.children
          .filter(onlyTypeTag)
          .map(({ children }) => (children.length > 0 ? children[0].data : '')).slice(2,5).splice(2,1))
      
      console.log(data);
      
  
      const content = $('.bbs_con tbody')[0].children
        .map((v, i) => {
          if (i % 2 == 0) {
            return v.children.filter(onlyTypeTag)[2].children[1].children[0].data
          }
        }).filter(v => v !== undefined)
  
      
      const result = data.map((v, i) => {
        v.unshift(content[i])
        return v
      }) 
  
      return result;
    }
    
  } catch (e) {
    console.error(e);
  }
}


cralwer();