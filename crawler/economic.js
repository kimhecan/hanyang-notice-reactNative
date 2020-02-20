const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const economicNoticeCrawler = async () => {

  const url = "https://ibus.hanyang.ac.kr/front/community/notice?page=1&per-page=12"
  let result = [];

  const onlyTypeText = ({ type }) => type == 'text'
  const onlyNameA = ({ name }) => name == 'a'

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      for(let i=0; i<20; i++) {
        result.push([
          $('.text-left')[i].children.filter(onlyNameA)[0].children[0].data.trim(),
          $('.text-left')[i].next.next.children[0].data
        ])
      }
      
      for(let i=20; i<$('.text-left').length; i++) {
        result.push([
          $('.text-left')[i].children.filter(onlyNameA)[0].children.filter(onlyTypeText)[1].data.trim(),
          $('.text-left')[i].next.next.children[0].data
        ])
      }
      console.log(result);
    }

  } catch (e) {
    console.error(e);
  }
}

economicNoticeCrawler()
