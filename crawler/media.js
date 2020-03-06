const cheerio = require('cheerio-without-node-native');
const axios = require('axios');
const iconv = require('iconv-lite');
const Buffer = require('buffer').Buffer


const meidaNoticeCrawler = async () => {

  const url = "http://ccss.hanyang.ac.kr/board.asp?catalogid=ccss&language=ko&boardcode=com01"
  let result = [];

  try {
    const response = await axios(url, { responseType: 'arraybuffer'});
    if (response.status === 200) {
      const strContents = new Buffer(response.data)
      const html = iconv.decode(strContents, 'EUC-KR').toString();
      const $ = cheerio.load(html);
      
      for(let i=0; i<$('.tabletextlist').length; i++) {
        if ( i % 4 === 0) result.push({title: $('.tabletextlist')[i].children[0].children[0].data});
        if ( (i-2) % 4 === 0) result[(i-2)/4].date = $('.tabletextlist')[2].children[0].data;
      }
      return result;
    }  
  } catch (e) {
    console.error(e);
  }
}

export default meidaNoticeCrawler
