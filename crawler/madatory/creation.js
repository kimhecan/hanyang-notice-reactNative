const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const mandatoryNoticeCrawler1 = async () => {

  const url = "http://hydorm.hanyang.ac.kr/service/board/notice/index.do?page=1" //창의/인재관
  let result = [];

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      for(let i=0; i<$('.subj_bold').length; i++) {
        result.push({
          title: $('.subj_bold')[i].children[0].children[0].data,
          date: $('.subj_bold')[i].next.next.next.children[0].data
        })
      }
      return result;
    }

  } catch (e) {
    console.error(e);
  }
}

export default mandatoryNoticeCrawler1

