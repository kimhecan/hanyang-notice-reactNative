const cheerio = require('cheerio-without-node-native');
const axios = require('axios');


const pharmacyNoticeCrawler = async () => {

  const uri = "http://pharmacy.hanyang.ac.kr/front/information/notice?page=1&per-page=10"
  let result = [];

  try {
    const response = await axios(uri);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      
      for(let i=0; i<$('.subject').length; i++) {
        result.push([
          $('.subject')[i].children[$('.subject')[i].children.length-1].data.trim(),
          $('.datetime')[i].children[0].data
        ])
      }
      console.log(result);
    }
    
  } catch (e) {
    console.error(e);
  }
}


pharmacyNoticeCrawler()