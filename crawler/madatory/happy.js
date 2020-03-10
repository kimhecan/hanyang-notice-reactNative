const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const mandatoryNoticeCrawler2 = async () => {

  const url = "http://hydorm.hanyang.ac.kr/service/board/notice2/index.do"; //행복관
  const url2 = "http://hydorm.hanyang.ac.kr/service/board/notice2/view.do?bdSeq=";
  let result = [];

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      for(let i=0; i<$('.subj_bold').length; i++) {
        
        if( i<$('.notice .notice').length) {
          result.push({
            title: $('.subj_bold')[i].children[0].children[0].data,
            date: $('.subj_bold')[i].next.next.next.children[0].data,
            class: $('.subj_bold')[i].prev.children[0].children[0].data,
            url: url2 + /\d+/g.exec($('.subj_bold')[i].children[0].attribs.onclick)[0]
          })
        } else {
          result.push({
            title: $('.subj_bold')[i].children[0].children[0].data,
            date: $('.subj_bold')[i].next.next.next.children[0].data,
            class: $('.subj_bold')[i].prev.children[0].data.trim(),
            url: url2 + /\d+/g.exec($('.subj_bold')[i].children[0].attribs.onclick)[0]
          })
        }
      }    
      return result;
    }

  } catch (e) {
    console.error(e);
  }
}

export default mandatoryNoticeCrawler2
