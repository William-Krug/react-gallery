# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

(View Raw will give you the markdown that you can copy to your repos!)

![MIT LICENSE](https://img.shields.io/github/license/William-Krug/react-gallery.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/William-Krug/react-gallery.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/William-Krug/react-gallery.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/William-Krug/react-gallery.svg?style=social)

# React Gallery

## Description

_Duration: 4 Day Sprint_

React Gallery is a picture gallery of images that mean something to the user. After entering the required fields, a database entry of the gallery item is created and displayed on the DOM. User's can then click on the item image to see a description of the image and click again to go back to the picture. User's also have the option to _Love_ and _Remove_ an item from the gallery. The app is has a React based front end with an Express based server. PostgreSQL backend and Postico database round out the stack.

## Screen Shot

[Initial Page Load]('images/base_mode.png')
[Gallery in Use]('images/loves_descriptions.png')

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database named `react_gallery`
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

How does someone use this application? Tell a user story here.

1. Enter a new item into the gallery by filling out the input form and clicking the **Add Item** button
   (**Note:** All three fields (Title, Description, and Path) are _required_ inputs
2. All gallery items submitted will be rendered in the DOM based on the order added
3. Clicking on a picture will display the entered _description_ for that picture
4. Clicking on the description will display the picture again
5. Clicking on **Love It!** will increase the number of "loves" a picture has
6. Clicking on **Remove** will remove the picture (and associated description, buttons, and love count) from the DOM and database

## Built With

- HTML
- CSS
- React
- Node
- Express
- PostgreSQL
- Postico

## License

[MIT](https://choosealicense.com/licenses/mit/)

MIT License

Copyright (c) [2021] [William Krug]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. A special thanks goes out to Dusty Meyers & John Shands for being sounding boards and confirming app functionality. Thanks to Zack Werner, John Anthony, & Michael Shaleen for the chance to teach and learn the needed concepts to finish this project better.

## Support

If you have suggestions or issues, please email me at [william.p.krug@gmail.com](william.p.krug@gmail.com)
