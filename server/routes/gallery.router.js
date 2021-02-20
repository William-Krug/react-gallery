const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
/**
 * PUT Route for /gallery/like/:id
 *
 * Updates the called id's like count by 1
 *
 * Request body looks like:
 * {
 *  likes: ++
 * }
 */
router.put('/like/:id', (req, res) => {
  /* Base Mode PUT route
  console.log(req.params);
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
  */
  console.log('*** in PUT /gallery/like/:id ***');

  const likesID = req.params.id;
  const likes = req.body.likes;

  let sqlText = '';

  if (likes === '++') {
    sqlScript = `
      UPDATE "gallery"
      SET "likes" = "likes" + 1
      WHERE "id" = $1;
    `;
  } else {
    res.sendStatus(400);
    return;
  }

  pool
    .query(sqlScript, [likesID])
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`*** Error making database PUT query ${sqlText} ***`);
      res.sendStatus(500);
    });
}); // END PUT Route

/**
 * GET Route for /gallery
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
      console.log(`*** Error making db query ${sqlText} ***`, error);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
