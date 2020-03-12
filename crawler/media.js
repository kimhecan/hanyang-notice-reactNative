const cheerio = require('cheerio-without-node-native');
const axios = require('axios');
const iconv = require('iconv-lite');
const Buffer = require('buffer').Buffer


const meidaNoticeCrawler = async () => {

  const url = "http://ccss.hanyang.ac.kr/board.asp?catalogid=ccss&language=ko&boardcode=com01"
  let result = [];

  const onlyNameA = ({ name }) => name == 'a'

  try {
    const response = await axios(url, { responseType: 'arraybuffer'});
    if (response.status === 200) {
      const strContents = new Buffer.from(response.data);
      const html = iconv.decode(strContents, 'EUC-KR').toString();
      const $ = cheerio.load(html);

      for(let i=0; i<$('a .tabletextlist').length; i++) {
        console.log(i);
        
        result.push({
          title:  $('a .tabletextlist')[i].children[0].children[0].data,
          date: $('.board_table_subject')[i].next.next.children[0].children[0].data,
          url:`document.board_view.no.value = ${/\d+$/g.exec($('.board_table_subject')[0].children.filter(onlyNameA)[0].attribs.href)}; document.board_view.action = '/board_read.asp'; document.board_view.submit()`
        })
      }
      
      return result;
    }  
  } catch (e) {
    console.error(e);
  }
}


export default meidaNoticeCrawler
