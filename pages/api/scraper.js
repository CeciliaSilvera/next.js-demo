const puppeteer = require("puppeteer");

async function scrape(){
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()
    await page.goto('https://www.provideitconsulting.se/')
    const element = await page.waitForSelector("html")
    const html = await page.evaluate(body => body.innerHTML, element);
    browser.close()
    return
}
scrape();