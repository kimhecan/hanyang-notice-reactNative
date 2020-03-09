const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const sportNoticeCrawler = async () => {

  const url = "http://sportsnarts.hanyang.ac.kr/notice/?pageid=1"
  let result = [];

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
    
      for(let i=0; i<$('.cut_strings').length; i++) {
        result.push({
          title: $('.cut_strings')[i].children[1].children[0].data.trim(),
          date: $('.kboard-list-date')[i+1].children[0].data,
          url: 'http://sportsnarts.hanyang.ac.kr' + $('.cut_strings')[i].children[1].attribs.href
        })
      }
      return result;
    }
  } catch (e) {
    console.error(e);
  }
}

export default sportNoticeCrawler;
