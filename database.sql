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
    'https://github.com/William-Krug/react-gallery/blob/master/public/images/emma.jpg'
  ),
	(
    'Skydiving',
    'Photo of tandem skydivers at 7,000 feet.',
    'https://github.com/William-Krug/react-gallery/blob/master/public/images/skydiving.JPG'
  ),
	(
    'Giant''s Causeway',
    'The Giant''s Causeway in Northern Ireland.',
    'https://github.com/William-Krug/react-gallery/blob/master/public/images/giant''s_causeway.JPG'
  ),
	(
    'Digital Art',
    'A color burst digitally rendered.',
    'https://github.com/William-Krug/react-gallery/blob/master/public/images/digital.jpeg'
  ),
	(
    'New Bride',
    'My stunning wife on our wedding day.',
    'https://github.com/William-Krug/react-gallery/blob/master/public/images/amber.jpg'
  ),
	(
    'Munchkins',
    'New big sister loving her little brother.',
    'https://github.com/William-Krug/react-gallery/blob/master/public/images/munchkins.jpeg'
  );