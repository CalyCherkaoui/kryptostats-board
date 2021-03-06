# Kryptostats-board : a catalogue of statistics for Cryptocurrencies data

## About the project
In this project, I built the front-end side of a catalog of statistics that allows us to display general Cryptocurrencies data.
The App collects data from an API and displays it in a list of data that can be filtered by currency parameter.
This project was built following the specifications and user stories given here:
[Click here to read the projects specifications](https://www.notion.so/Catalogue-of-Statistics-72446e7fa33c403a9b6a0bc1de5c6cf5)

### Main features:
- It requests data from the API with Axios.
- It displays a list of cryptocurrencies.
- It displays the data of a selected cryptocurrency.
- It converts cryptos' prices and changes to the selected local currency.
- It paginates the API response's results in the display.

## Built with
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img width="5%" src="https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif" alt="Javascript"></a>
  <a href="#"><img width="10%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="React"></a>
  <a href="#"><img width="5%" src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/redux.svg" alt="Redux"></a>
  <a href="#"><img width="10%" src="https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg"></a>
  <a href="#"><img width="30px" src="https://cdn.svgporn.com/logos/html-5.svg"></a>
  <a href="#"><img width="30px" src="https://cdn.svgporn.com/logos/css-3.svg"></a>
  <a href="https://github.com/"><img width="5%" src="https://i.giphy.com/media/KzJkzjggfGN5Py6nkT/200.webp" alt="GitHub"></a>
  <a href="#"><img width="10%" src="https://media.giphy.com/media/kH6CqYiquZawmU1HI6/giphy.gif"></a>
  <a href="#"><img width="5%" src="https://i.giphy.com/media/IdyAQJVN2kVPNUrojM/200.webp"></a>
  <br>

## Table of content
- [About the project](#about-the-project)
- [Built with](#built-with)
- [Live demo](#live-demo)
- [Walkthrough Video presentation](#walkthrough-video-presentation)
- [Screenshots](#screenshots)
- [Dependencies](#dependencies)
- [Linting tools](#linting-tools)
- [Getting started](#getting-started-in-development)
- [Automated tests](#automated-tests)
- [Author](#author)
- [Contributing](#-Contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Live demo
[Link to the deployed App](https://kryptostats-board.herokuapp.com/)

## Walkthrough video presentation
[Check here a video presentation of the project](https://www.loom.com/share/c14c2822d71b4567a5015372f560c4cc)

## Screenshots
<br>
<span><img width="380" src="./public/screenshots/coinsList.png"></span>&nbsp &nbsp<span><img width="380" src="./public/screenshots/About.png"></span><span><img width="380" src="./public/screenshots/coinDetail.png"></span>
<br>

## Dependencies
The main dependencies used in this web application:

<table>
  <tr>
    <th>Dependency</th>
    <th>for</th>
    <th>Development</th>
    <th>Test</th>
    <th>Production</th>
  </tr>
  <tr>
    <td>React</td>
    <td>JS library for building user interfaces</td>
    <td>??????</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Redux</td>
    <td>A Predictable State Container</td>
    <td>??????</td>
    <td></td>
    <td></td>
  </tr>
    <tr>
    <td>Prop-types</td>
    <td>Runtime type checking for React props</td>
    <td>??????</td>
    <td></td>
    <td></td>
  </tr>
  </tr>
  <tr>
    <td>Redux Thunk</td>
    <td>Middleware for basic Redux side effects logic</td>
    <td>??????</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Axios</td>
    <td>Promise based HTTP client for the browser and node.js</td>
    <td>??????</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>stylelint</td>
    <td>Css linter</td>
    <td>??????</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>eslint</td>
    <td>Javascript linter</td>
    <td>??????</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Jest</td>
    <td>JavaScript testing framework</td>
    <td></td>
    <td>??????</td>
    <td></td>
  </tr>
  <tr>
    <td>Enzyme</td>
    <td>JavaScript Testing utility for React</td>
    <td></td>
    <td>??????</td>
    <td></td>
  </tr>
  <tr>
    <td>Enzyme-adapter-react-16</td>
    <td>Adapter to use Enzyme with React 17</td>
    <td></td>
    <td>??????</td>
    <td></td>
  </tr>
  <tr>
    <td>react-addons-test-utils</td>
    <td>React Test Utilities library</td>
    <td></td>
    <td>??????</td>
    <td></td>
  </tr>
  <tr>
    <td>react-test-renderer</td>
    <td>To take snapshots of the "DOM tree" rendered by a React DOM</td>
    <td></td>
    <td>??????</td>
    <td></td>
  </tr>
  <tr>
    <td>redux-mock-store</td>
    <td>Allows to make a redux store for testing</td>
    <td></td>
    <td>??????</td>
    <td></td>
  </tr>
</table>

## Linting tools
<table>
  <tr>
    <th>Linter</th>
    <th>Use</th>
    <th>Files</th>
  </tr>
  <tr>
    <td>eslintrc</td>
    <td>Linting Javascript files</td>
    <td>.js</td>
  </tr>
    <tr>
    <td>Stylelint</td>
    <td>Linting styling errors</td>
    <td>.css .scss</td>
  </tr>
</table>

## Getting started in development
To get a local copy of the repository, please run the following commands on your terminal:

```
$ git clone git@github.com:CalyCherkaoui/kryptostats-board.git
$ cd kryptostats-board
$ git branch feature
$ git checkout feature
$ npm install
$ npm run build
$ npm start
```

To lint Js code:
```
$ npx eslint . --fix
```

To lint the Styling:
```
$ npx stylelint "**/*.{css,scss}" --fix
```

To run the tests:
```
$ npm test
```
## Automated tests
<img width="450" src="./public/screenshots/Test.png">
<br>

## Author
???? **Houda Cherkaoui**

- Github: [@CalyCherkaoui](https://github.com/CalyCherkaoui)
- Twitter: [@Houda59579688](https://twitter.com/Houda59579688)
- Linkedin: [Houda-Cherkaoui](https://www.linkedin.com/in/houda-cherkaoui-64106395/)
## Contributing
Contributions, issues, and feature requests are welcome!
## Show your support
Give a ?????? if you like this project!
## Acknowledgments
- Hat tip to [stackoverflow](https://stackoverflow.com) comunity.
- Hat tip to [Microverse](https://www.microverse.org/) TSE for Code Review.
- Hat tip to anyone whose code was used
## ???? License
All source code is available jointly under the MIT License.
See [MIT licence](./LICENSE) for details.
