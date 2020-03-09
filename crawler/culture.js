const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const designNoticeCrawler = async () => {

  const url = "http://lan-cul.hanyang.ac.kr/front/notice/all?page=1&per-page=6"
  const url2 = "http://lan-cul.hanyang.ac.kr";
  let resultAll = [];
  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);     
  
      for(let i=0; i<$('.subject').length; i++) {
        resultAll.push({
          class: $('.subject')[i].children[$('.subject')[i].children.length-1].prev.children[0].data,
          title: $('.subject')[i].children[$('.subject')[i].children.length-1].data.trim(),
          date: $('.datetime')[i].children[0].data,
          url: url2 + $('.subject')[i].parent.attribs.href
        })
      }
    }    
    return resultAll
       
  } catch (e) {
    console.error(e);
  }
}


export default designNoticeCrawler
