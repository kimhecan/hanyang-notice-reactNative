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

      for(let i=0; i<$('.is-notice').length; i++) {
        result.push({
          title: $('.text-left')[i].children.filter(onlyNameA)[0].children[0].data.trim(),
          date: $('.text-left')[i].next.next.children[0].data
        })
      }
      
      for(let i=$('.is-notice').length; i<$('.text-left').length; i++) {
        result.push({
          title: $('.text-left')[i].children.filter(onlyNameA)[0].children.filter(onlyTypeText)[1].data.trim(),
          date: $('.text-left')[i].next.next.children[0].data
        })
      }
      return result;
    }

  } catch (e) {
    console.error(e);
  }
}

export default economicNoticeCrawler
