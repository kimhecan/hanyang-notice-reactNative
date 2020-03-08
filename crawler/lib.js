const axios = require('axios');

const libraryNoticeCrawler = async () => {

  const url = "https://lib.hanyang.ac.kr/pyxis-api/2/bulletin-boards/1/bulletins?bulletinCategoryId=1,4&max=20&offset=0"
  let result = [];

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const data = response.data.data.list;
      data.forEach(v => result.push({
        title: v.title,
        date:  v.dateCreated.substr(0, 10),
        url: `https://information.hanyang.ac.kr/#/bbs/notice/${v.id}?offset=0&max=20&bulletinCategoryId=1,4`
      }));
    } 
    
    return result;
  } catch (e) {
    console.error(e);
  }
}

export default libraryNoticeCrawler;

