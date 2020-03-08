const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const engineerNoticeCrawler = async () => {

  const url = "https://ieng.hanyang.ac.kr/front/community/notice?page=1&per-page=10";
  const url2 = "https://ieng.hanyang.ac.kr";
  let result = [];

  const onlyTypeText = ({type }) => type == 'text'

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      for (let i=0; i< $('.datetime').length; i++) {
        result.push({
          title: $('.subject')[i].children.filter(onlyTypeText)[$('.subject')[i].children.filter(onlyTypeText).length - 1].data.trim(),
          date: $('.datetime')[i].children[0].data,
          url: url2 + $('.subject')[i].parent.attribs.href
        });
      }
    }
    return result;
       
  } catch (e) {
    console.error(e);
  }
}

export default engineerNoticeCrawler;
