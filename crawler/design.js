const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const designNoticeCrawler = async () => {

  const url = "http://idesign.hanyang.ac.kr/boad/bd_boad/egolist.php?bd=1"
  let result = [];

  const onlyTypeText = ({type }) => type == 'text'

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      for(let i=0; i< $('.c-table_link').length; i++) {
        result.push([
          $('.c-table_link')[i].children[0].data.trim(),
          $('.c-table_link')[i].parent.next.next.children[0].data
        ])
      }
    }
    console.log(result);
       
  } catch (e) {
    console.error(e);
  }
}

designNoticeCrawler()
