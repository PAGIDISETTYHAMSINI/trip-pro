const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') console.log('BROWSER ERROR:', msg.text());
  });
  
  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });

  try {
    await page.goto('http://localhost:5173/build-trip', { waitUntil: 'networkidle0' });
    console.log("Page loaded");

    // Select first destination
    await page.select('select', 'paris'); // Assume paris exists
    await page.click('button'); // Next step
    console.log("Clicked Next Step 1");
    await page.waitForTimeout(1000);

    // Select transport
    await page.evaluate(() => {
      const h4s = document.querySelectorAll('h4');
      for(let h of h4s) {
        if(h.innerText.includes('Air India')) {
          h.parentElement.parentElement.click();
          break;
        }
      }
    });
    const buttons = await page.$$('button');
    await buttons[1].click(); // Next step
    console.log("Clicked Next Step 2");
    await page.waitForTimeout(1000);

    // Select hotel
    await page.evaluate(() => {
      const divs = document.querySelectorAll('div');
      for(let d of divs) {
        if(d.innerText === 'Standard Hostel Room') {
          d.click();
          break;
        }
      }
    });
    const buttons3 = await page.$$('button');
    await buttons3[1].click(); // Next step
    console.log("Clicked Next Step 3");
    await page.waitForTimeout(1000);

    // Select activity
    await page.evaluate(() => {
      const h4s = document.querySelectorAll('h4');
      for(let h of h4s) {
        if(h.innerText.includes('Eiffel')) {
          h.parentElement.click();
          break;
        }
      }
    });
    const buttons4 = await page.$$('button');
    await buttons4[1].click(); // Next step
    console.log("Clicked Next Step 4");
    await page.waitForTimeout(1000);

    // Select restaurant
    await page.evaluate(() => {
      const h4s = document.querySelectorAll('h4');
      for(let h of h4s) {
        if(h.innerText.includes('Spice')) {
          h.parentElement.click();
          break;
        }
      }
    });
    const buttons5 = await page.$$('button');
    await buttons5[1].click(); // Review trip
    console.log("Clicked Next Step 5");
    await page.waitForTimeout(1000);

    console.log("Test finished successfully.");

  } catch (err) {
    console.error("TEST SCRIPT ERROR:", err);
  }

  await browser.close();
})();
