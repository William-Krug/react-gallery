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

  // Sanitize inputs to database
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
      console.log('Liks updated');
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
  console.log('*** in GET /gallery ***');

  const sqlText = `
    SELECT * FROM "gallery"
    ORDER BY "id" ASC;
  `;

  pool
    .query(sqlText)
    .then((dbResponse) => {
      console.log('Gallery Items Obtained');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log(`*** Error making db query ${sqlText} ***`, error);
      res.sendStatus(500);
    });
}); // END GET Route

/**
 * POST Route for /gallery
 *
 * Adds new item to the database
 *
 * Request body looks like:
 * {
 *  title: 1973 Pontiac GTO
 *  description: Dream Car
 *  url: https://www...
 * }
 */
router.post('/', (req, res) => {
  console.log('*** in POST /gallery ***');

  // Sanitize inputs to database
  const sqlText = `
    INSERT INTO "gallery"
      ("title", "description", "path")
    VALUES
      ($1, $2, $3);
  `;
  const queryArguments = [
    req.body.title, // $1
    req.body.description, // $2
    req.body.path, // $3
  ];

  pool
    .query(sqlText, queryArguments)
    .then((dbResponse) => {
      console.log('Item added to the database');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`*** Error making db query ${sqlText} ***`, error);
      res.sendStatus(500);
    });
}); // END POST Route

/**
 * DELETE Route for /gallery/:id
 *
 * Deletes a single record (Gallery Item) from the database
 */
router.delete('/:id', (req, res) => {
  console.log('*** in DELETE /gallery/:id ***');

  const deleteID = req.params.id;

  // Sanitize inputs to database
  const sqlText = `
    DELETE from "gallery"
    WHERE "id" = $1;
  `;

  pool
    .query(sqlText, [deleteID])
    .then((dbResponse) => {
      console.log('Gallery Item Deleted');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`*** Error making db query ${sqlText} ***`, error);
      res.sendStatus(500);
    });
}); // END DELETE Route

module.exports = router;
