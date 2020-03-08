const cheerio = require('cheerio-without-node-native');
const axios = require('axios');


const softwareNoticeCrawler = async () => {

  const url = "http://computing.hanyang.ac.kr/open/notice.php?ptype=&page=1&code=notice";
  const url2 = "http://computing.hanyang.ac.kr";
  let result = [];

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      console.log($('.left')[0].children[1].attribs.href);
      

      for(let i=0; i<$('.left').length; i++) {
        result.push({
          'title': $('.left')[i].children[1].children[0].data,
          'date': $('.left')[i].next.next.children[0].data,
          'url': url2 + $('.left')[i].children[1].attribs.href,
        })
      }
      return result;
    }
    
  } catch (e) {
    console.error(e);
  }
}

export default softwareNoticeCrawler