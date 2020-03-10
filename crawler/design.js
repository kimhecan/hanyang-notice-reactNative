const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const designNoticeCrawler = async () => {

  const url = "http://idesign.hanyang.ac.kr/boad/bd_boad/egolist.php?bd=1"
  let result = [];

  const onlyTypeText = ({ type }) => type == 'text';

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      
      for(let i=0; i< $('.c-table_link').length; i++) {
        result.push({
          title: $('.c-table_link')[i].children.filter(onlyTypeText)[$('.c-table_link')[i].children.filter(onlyTypeText).length-1].data.trim(),
          date: $('.c-table_link')[i].parent.next.next.children[0].data,
          class: $('.c-table_link')[i].parent.prev.prev.children[0].data,
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
