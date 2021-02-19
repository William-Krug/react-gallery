# To Do:

## Base Mode:

- [x] check out server side GET and PUT
- [ ] Create array on Server
  - [ ] pass in objects??
- [ ] add images to public/images folder (~6)
- [ ] modify `server/module/data.js` to include:
  - [ ] `id`
  - [ ] `title`
  - [ ] `description`
  - [ ] `path`
- [ ] `GalleryList.jsx` static markup
  - [ ] css for `GalleryList`
  - [ ] `<div>` container
  - [ ] `<img>` placement
  - [ ] `<button>`
  - [ ] `<p>`
- [ ] `GalleryItem.jsx`
  - [ ] css for `GalleryItem`
- [ ] verify button recognized by `App.jsx`
  - [ ] axios `PUT` to `/gallery/like/:id`
- [ ] connect button to server for voting
- [ ] conditional rendering for picture/description
- [ ] axios `GET` from `/gallery` and store it in `App.jsx`
- [ ] `GalleryList` gets data from `App`
- [ ] display likes
- [ ] auto refresh after button click
- [ ] create README.md

## Stretch Goals:

- [ ] move data in db
  - [ ] db name: `react_gallery
  - [ ] include `database.sql` file
- [ ] form
  - [ ] `POST` a new gallery item
  - [ ] use absolute URL for images on the client side
  - [ ] server side route for posting an image
- [ ] delete single gallery itme
- [ ] styling with Material-UI (https://material-ui.com/)
- [ ] Implement uppy for image upload
