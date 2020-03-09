const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const designNoticeCrawler = async () => {

  const url = "http://idesign.hanyang.ac.kr/boad/bd_boad/egolist.php?bd=1"
  let result = [];

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);


      console.log( $('.c-table_link')[0].attribs.href);
      
      for(let i=0; i< $('.c-table_link').length; i++) {
        result.push({
          title: $('.c-table_link')[i].children[0].data.trim(),
          date: $('.c-table_link')[i].parent.next.next.children[0].data,
          url : 'http://idesign.hanyang.ac.kr/boad/bd_boad/' + $('.c-table_link')[i].attribs.href, 
        })
      }
    }
    return result;
       
  } catch (e) {
    console.error(e);
  }
}
export default designNoticeCrawler
