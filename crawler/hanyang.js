const cheerio = require('cheerio-without-node-native');
const axios = require('axios');
const Iconv = require('iconv').Iconv
const Buffer = require('buffer').Buffer


const hanyangNoticeCrawler = async () => {

  const url = "https://www.hanyang.ac.kr/web/www/main-notices?p_p_id=mainNotice_WAR_noticeportlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_mainNotice_WAR_noticeportlet_sCurPage=1&_mainNotice_WAR_noticeportlet_action=view"
  let result = [];

  try {
    const response = await axios(url, { responseType: 'arraybuffer'});
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      for(let i=0; i< $('.title').length; i++) {
        result.push([
          $('.title')[i].children[1].children[0].data,
          $('.title')[i].children[3].children[0].data,
          data3 = $('.date')[i].children[0].data.trim()
        ])
      }
      console.log(result);
      
    }  
  } catch (e) {
    console.error(e);
  }
}

hanyangNoticeCrawler()
