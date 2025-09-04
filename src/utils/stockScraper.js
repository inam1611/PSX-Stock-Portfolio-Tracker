import axios from "axios";
import * as cheerio from "cheerio";

export async function fetchStockInfo(ticker) {
  try {
    const url = `https://dps.psx.com.pk/company/${ticker}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const name = $("div.quote__name").text().trim();
    const industry = $("div.quote__sector").text().trim();

    return {
      ticker,
      name: name || null,
      industry: industry || null,
    };
  } catch (err) {
    console.error(`❌ Error fetching stock info for ${ticker}:`, err.message);
    return {
      ticker,
      name: null,
      industry: null,
    };
  }
}
