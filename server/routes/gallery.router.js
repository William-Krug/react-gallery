const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
/**
 * GET Rout for /gallery
 *
 * Retrieves shopping list
 */
router.get('/', (req, res) => {
  /* Base Mode GET route
  res.send(galleryItems);
  */

  const sqlText = `
    SELECT * FROM "gallery"
    ORDER BY "id" ASC;
  `;

  pool
    .query(sqlText)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log(`ERROR making db query ${sqlText}:`, error);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
