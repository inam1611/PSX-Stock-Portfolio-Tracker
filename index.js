// // index.js
// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());

// app.get('/api/stock-info/:ticker', async (req, res) => {
//   const { ticker } = req.params;

//   try {
//     const url = `https://dps.psx.com.pk/company/${ticker}`;
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);

//     // Extract fields
//     const name = $('div.quote__name').text().trim();
//     const industry = $('div.quote__sector').text().trim();

//     // ✅ Extract closing price (like Google Sheets formula)
//     let priceText = $('div.quote__close').text().trim(); // e.g. "PKR 123.45"

//     // Remove "PKR" or any prefix (take everything after the first 3 chars)
//     let closingPrice = priceText ? priceText.substring(3).trim() : null;

//     // Convert to number if valid
//     if (closingPrice && !isNaN(closingPrice)) {
//       closingPrice = Number(closingPrice);
//     }

//     res.json({
//       ticker,
//       name: name || null,
//       industry: industry || null,
//       closingPrice: closingPrice || null
//     });
//   } catch (err) {
//     console.error(`Error fetching data for ${ticker}:`, err.message);
//     res.status(500).json({ error: 'Failed to fetch data', details: err.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });

// index.js
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/stock-info/:ticker', async (req, res) => {
  const { ticker } = req.params;

  try {
    const url = `https://dps.psx.com.pk/company/${ticker}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Extract fields
    const name = $('div.quote__name').text().trim();
    const industry = $('div.quote__sector').text().trim();

    // ✅ Closing price
    let priceText = $('div.quote__close').text().trim(); // e.g. "PKR 123.45"
    let closingPrice = priceText ? priceText.substring(3).trim() : null;
    if (closingPrice && !isNaN(closingPrice)) {
      closingPrice = Number(closingPrice);
    }

    // ✅ Change percent (e.g. "-0.52%")
    let changePercent = $('div.change__percent').text().trim() || null;

    // ✅ Change value (e.g. "-0.65")
    let changeValueText = $('div.change__value').text().trim() || null;
    let changeValue = changeValueText && !isNaN(changeValueText)
      ? Number(changeValueText)
      : changeValueText;

    res.json({
      ticker,
      name: name || null,
      industry: industry || null,
      closingPrice: closingPrice || null,
      changePercent: changePercent,
      changeValue: changeValue
    });
  } catch (err) {
    console.error(`Error fetching data for ${ticker}:`, err.message);
    res.status(500).json({ error: 'Failed to fetch data', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
