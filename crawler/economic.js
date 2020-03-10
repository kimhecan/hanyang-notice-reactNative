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
          title: $('.text-left')[i].children[1].children[0].data.trim(),
          date: $('.text-left')[i].next.next.children[0].data,
          class: $('.text-left')[i].prev.prev.children[0].data ? $('.text-left')[i].prev.prev.children[0].data : '공지',
          url: 'https://ibus.hanyang.ac.kr' + $('.text-left')[i].children[1].attribs.href
        })
      }
      
      for(let i=$('.is-notice').length; i<$('.text-left').length; i++) {
        result.push({
          title: $('.text-left')[i].children[1].children[2].data.trim(),
          date: $('.text-left')[i].next.next.children[0].data,
          class: $('.text-left')[i].prev.prev.children[0].data ? $('.text-left')[i].prev.prev.children[0].data : '공지',
          url: 'https://ibus.hanyang.ac.kr' + $('.text-left')[i].children[1].attribs.href,
        })
      }
      
      return result;
    }

  } catch (e) {
    console.error(e);
  }
}

export default economicNoticeCrawler
