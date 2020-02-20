const axios = require('axios');

const libraryNoticeCrawler = async () => {

  const url = "https://lib.hanyang.ac.kr/pyxis-api/2/bulletin-boards/1/bulletins?bulletinCategoryId=1,4&max=20&offset=0"
  let result = [];

  try {
    const response = await axios(url);
    if (response.status === 200) {
      const data = response.data.data.list;
      data.forEach(v => result.push([v.title, v.dateCreated.substr(0, 10)]));

      console.log(result);
    }   
  } catch (e) {
    console.error(e);
  }
}


libraryNoticeCrawler()