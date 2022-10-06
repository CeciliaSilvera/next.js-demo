import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from "puppeteer";

export type Data = {
  html?: string
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query, method } = req;
  const { url } = query;
  const browser: puppeteer.Browser = await puppeteer.launch({})
  const page: puppeteer.Page = await browser.newPage()
  await page.goto(url as string)
  const element = await page.waitForSelector("html")
  const html = await page.evaluate(body => body?.innerHTML, element);
  switch (method) {
    case 'GET':
      res.status(200).json({ html })
      break;
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
  browser.close();
}

export default handler;
