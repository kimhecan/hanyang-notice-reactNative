const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

export const softwareNoticeCrawler = async () => {

  const onlyTypeTag = ({ type }) => type == 'tag'
  const uri = "http://sw.hanyang.ac.kr/board/notice.php?ptype=&page=1&code=notice"

  try {
    const response = await axios(uri);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      const data = $('.bbs_con tbody')[0].children
        .filter(onlyTypeTag)
        .map((tr) => tr.children
          .filter(onlyTypeTag)
          .map(({ children }) => (children.length > 0 ? children[0].data : '')).slice(2,5).splice(2,1))
    

      const isEven = v => (v % 2) == 0;

      const content = $('.bbs_con tbody')[0].children
        .filter((v, i) => isEven(i))
        .map(v => v.children.filter(onlyTypeTag)[2].children[1].children[0].data);
  
      
      const result = data.map((v, i) => {
        v.unshift(content[i])
        return v
      }) 
  
      return result;
    }
    
  } catch (e) {
    console.error(e);
  }
}

