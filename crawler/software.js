const cheerio = require('cheerio-without-node-native');
const axios = require('axios');


const softwareNoticeCrawler = async () => {

  const uri = "http://computing.hanyang.ac.kr/open/notice.php?ptype=&page=1&code=notice"
  let result = [];

  try {
    const response = await axios(uri);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      for(let i=0; i<$('.left').length; i++) {
        result.push({
          'title': $('.left')[i].children[1].children[0].data,
          'date': $('.left')[i].next.next.children[0].data
        })
      }
      return result;
    }
    
  } catch (e) {
    console.error(e);
  }
}


export default softwareNoticeCrawler