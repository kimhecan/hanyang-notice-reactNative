const cheerio = require('cheerio-without-node-native');
const axios = require('axios');
const Iconv = require('iconv').Iconv
const Buffer = require('buffer').Buffer


const meidaNoticeCrawler = async () => {

  const url = "http://ccss.hanyang.ac.kr/board.asp?catalogid=ccss&language=ko&boardcode=com01"
  let result = [];

  const eucKrToUtf8 = (str) => {
    const iconv = new Iconv('euc-kr', 'utf-8');
    const buf = new Buffer.from(str, 'binary');
    return iconv.convert(buf).toString();
  };

  try {
    const response = await axios(url, { responseType: 'arraybuffer'});
    if (response.status === 200) {
      const html = eucKrToUtf8(response.data);
      const $ = cheerio.load(html);

      for(let i=0; i<$('.tabletextlist').length; i++) {
        if ( i % 4 === 0) result.push({title: $('.tabletextlist')[i].children[0].children[0].data});
        if ( (i-2) % 4 ===0) result[(i-2)/4].date = $('.tabletextlist')[2].children[0].data;
      }

      return result;
    }  
  } catch (e) {
    console.error(e);
  }
}

meidaNoticeCrawler()
