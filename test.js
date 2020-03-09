const cheerio = require('cheerio-without-node-native');
const axios = require('axios');
const iconv = require('iconv-lite');
const FormData = require('form-data');
const Buffer = require('buffer').Buffer


const meidaNoticeCrawler = async () => {

  const uri = "http://ccss.hanyang.ac.kr/board_read.asp";
  const frm = new FormData();
  frm.append("catalogid", 'ccss');
  frm.append("language", 'ko');
  frm.append("no", '531166');
  frm.append("boardcode", 'com01');
  frm.append("go", 'ccss');
  frm.append("field", '');
  frm.append("keyword", '');
  frm.append("page", '1');


  try {
    axios.post(uri, frm)
    .then((response) => {
      if (response.status === 200) {
        const strContents = new Buffer.from(response.data);
        const html = iconv.decode(strContents, 'EUC-KR').toString();
        const $ = cheerio.load(html);
        console.log($('.textplain'));
        
      } 
    }) 
  } catch (e) {
    console.error(e);
  }
}
meidaNoticeCrawler()


function view(n) {
	document.board_view.no.value = n;
	document.board_view.action = "/board_read.asp";
	document.board_view.submit();
}
