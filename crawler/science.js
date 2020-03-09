const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const scienceNoticeCrawler = async () => {

  const url = "http://scitech.hanyang.ac.kr/bbs/board.php?bo_table=notice&page=1"
  let result = [];

  const onlyNameStrong = ({ name }) => name == 'strong'

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      for (let i=0; i<$('.board-notice').length; i++) {        
        result.push({
          title: $('.td-subject ')[i].children[1].children.filter(onlyNameStrong)[0].children[0].data,
          date: $('.td-date.hidden-xs')[i].children[0].data.substr(1,),
          url: $('.td-subject.ellipsis a')[i].attribs.href
        })
      }
      for (let i=$('.board-notice').length; i<15; i++) {        
        result.push({
          title: $('.td-subject.ellipsis a')[i].children[0].data.trim(),
          date: $('.td-date.hidden-xs')[i].children[0].data.substr(1,),
          url: $('.td-subject.ellipsis a')[i].attribs.href
        })
      }
      
      return result
    }  
  } catch (e) {
    console.error(e);
  }
}


export default scienceNoticeCrawler
