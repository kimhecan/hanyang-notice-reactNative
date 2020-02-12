const puppeteer = require('puppeteer');
const axios = require('axios');

const crawler = async () => {
  const url = "http://unsplash.com";
  try {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    const result = await page.evaluate(() => {
      let imgs = [];
      const imgsEls = document.querySelectorAll('.nDTlD img._2zEKz')
      if(imgsEls.length) {
        imgsEls.forEach( v => {
          if (v.src) {
            imgs.push(v.src);
          }
        })
      }
      return imgs
    });
    console.log(result);
    
    await page.close();
    await browser.close();
  } catch (e) {
    console.error(e);
    
  }
}

crawler()