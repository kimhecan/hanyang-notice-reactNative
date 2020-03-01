const cheerio = require('cheerio-without-node-native');
const axios = require('axios');

const designNoticeCrawler = async () => {

  const urlAll = "http://lan-cul.hanyang.ac.kr/front/notice/all?page=1&per-page=6"
  // const urlDep = "http://lan-cul.hanyang.ac.kr/front/notice/department?page=1&per-page=6"
  let resultAll = [];
  // let resultDep = [];
  // all
  try {
    const response = await axios(urlAll);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);     
  
      for(let i=0; i<$('.subject').length; i++) {
        resultAll.push({
          class: $('.subject')[i].children[$('.subject')[i].children.length-1].prev.children[0].data,
          title: $('.subject')[i].children[$('.subject')[i].children.length-1].data.trim(),
          date: $('.datetime')[i].children[0].data
        })
      }
    }
    return resultAll
       
  } catch (e) {
    console.error(e);
  }
  // department
  // try {
  //   const response = await axios(urlDep);
  //   if (response.status === 200) {
  //     const html = response.data;
  //     const $ = cheerio.load(html);     

  //     for(let i=0; i<$('.subject').length; i++) {
  //       resultDep.push({
  //         class: $('.subject')[i].children[$('.subject')[i].children.length-1].prev.children[0].data,
  //         title: $('.subject')[i].children[$('.subject')[i].children.length-1].data.trim(),
  //         date:$('.datetime')[i].children[0].data
  //       })
  //     }
  //   }
  //   console.log(resultDep);
       
  // } catch (e) {
  //   console.error(e);
  // }
}

export default designNoticeCrawler
