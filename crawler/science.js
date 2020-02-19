const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const scienceNoticeCrawler = async () => {

  const url = "http://scitech.hanyang.ac.kr/bbs/board.php?bo_table=notice&page=1"
  let result = [];

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      for (let i=0; i<8; i++) {        
        result.push([
          $('.td-subject.ellipsis a')[i].children[1].children[0].data,
          $('.td-date.hidden-xs')[i].children[0].data.substr(1,)
        ])
      }
      for (let i=8; i<15; i++) {        
        result.push([
          $('.td-subject.ellipsis a')[i].children[0].data.substr(1,),
          $('.td-date.hidden-xs')[i].children[0].data.substr(1,)
        ])
      }
      console.log(result);
    }  
  } catch (e) {
    console.error(e);
  }
}

scienceNoticeCrawler()
