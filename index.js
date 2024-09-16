import puppeteer from 'puppeteer';

async function type(page,selector,word){
  for (let i = 0; i < word.length; i++) {
    await page.type(selector, word[i], { delay: Math.random()*100 }); 
  }  
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:5500/');

  await page.setViewport({width: 1080, height: 1024});

  await type(page,"#email","chidam3chain@gmail.com");
  await type(page,'#password', '2516lol#');

  await page.waitForSelector("form .btn");
  await page.click("form .btn");

  await browser.close();
})();
