-- Remove table if it exists
DROP TABLE IF EXISTS "gallery";

-- Create Table
CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(128) NOT NULL,
	"description" VARCHAR(256) NOT NULL,
	"path" VARCHAR(1024) NOT NULL,
	"likes" NUMERIC DEFAULT 0
);

-- Test Data
INSERT INTO "gallery"
	("title", "description", "path")
VALUES
	(
    'Sir William',
    'Two knights fighting with hand-and-a-half broadswords.',
    'images/emma.jpg'
  ),
	(
    'Skydiving',
    'Photo of tandem skydivers at 7,000 feet.',
    'images/skydiving.jpg'
  ),
	(
    'Giant''s Causeway',
    'The Giant''s Causeway in Northern Ireland.',
    'images/giant''s_causeway.jpg'
  ),
	(
    'Digital Art',
    'A color burst digitally rendered.',
    'images/digital.jpeg'
  ),
	(
    'New Bride',
    'My stunning wife on our wedding day.',
    'images/amber.jpg'
  ),
	(
    'Munchkins',
    'New big sister loving her little brother.',
    'images/munchkins.jpeg'
  )