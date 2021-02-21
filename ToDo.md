# To Do:

## Base Mode:

- [x] check out server side GET and PUT
- [x] Create array on Server
  - [x] pass in objects??
- [x] add images to public/images folder (~6)
- [x] modify `server/module/data.js` to include:
  - [x] `id`
  - [x] `title`
  - [x] `description`
  - [x] `path`
- [x] `GalleryList.jsx` static markup
  - [x] css for `GalleryList`
  - [x] `<div>` container
  - [x] `<img>` placement
  - [x] `<button>`
  - [x] `<p>`
- [x] `GalleryItem.jsx`
  - [x] css for `GalleryItem`
- [x] verify button recognized by `App.jsx`
  - [x] axios `PUT` to `/gallery/like/:id`
- [x] connect button to server for voting
- [x] conditional rendering for picture/description
- [x] axios `GET` from `/gallery` and store it in `App.jsx`
- [x] `GalleryList` gets data from `App`
- [x] display likes
- [x] auto refresh after button click
- [x] create README.md

## Stretch Goals:

- [x] move data in db
  - [x] db name: `react_gallery`
  - [x] include `database.sql` file
- [x] form
  - [x] `POST` a new gallery item
  - [x] use absolute URL for images on the client side
  - [x] server side route for posting an image
- [x] delete single gallery itme
- [ ] styling with Material-UI (https://material-ui.com/)
- [ ] Implement uppy for image upload
