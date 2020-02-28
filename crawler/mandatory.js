const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const mandatoryNoticeCrawler = async () => {

  const url1 = "http://hydorm.hanyang.ac.kr/service/board/notice/index.do?page=1" //창의/인재관
  const url2 = "http://hydorm.hanyang.ac.kr/service/board/notice2/index.do?page=1"//행복관
  let result = [];

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      const data = $('.subj_bold')[0].children[0].children[0].data
      const data1 = $('.subj_bold')[0].next.next.next.children[0].data

      const data
      console.log(data1);
    }

  } catch (e) {
    console.error(e);
  }
}

mandatoryNoticeCrawler()
