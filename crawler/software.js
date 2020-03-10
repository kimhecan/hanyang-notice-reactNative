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

      for(let i=0; i<$('.left').length; i++) {
        result.push({
          'title': $('.left')[i].children[1].children[0].data,
          'date': $('.left')[i].next.next.children[0].data,
          'class': $('.left')[i].prev.prev.children[0].data ? $('.left')[i].prev.prev.children[0].data : "공지",
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

