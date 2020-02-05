## Build status:

 **[CircleCI](https://circleci.com/gh/LeoRedin/star-wars-movies)**

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/LeoRedin/star-wars-movies/master?style=for-the-badge)

![CircleCI](https://img.shields.io/circleci/build/gh/LeoRedin/star-wars-movies/master?style=for-the-badge)

![GitHub All Releases](https://img.shields.io/github/downloads/LeoRedin/star-wars-movies/total?style=for-the-badge)


## About

This is a simple Star Wars Movies website, where you can check all the movies available as of today(05/02/2020). Consuming the following api : https://swapi.co/ to get almost all the data. I used almost all information about the movies, such as the name, an intro, director and producers and 5 of the main characters available for each movie.

## Technologies

- React JS
- Jest
- Axios
- Testing-library
- PropTypes
- Styled Components
- Node > 10.0

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn test-unit`

Launches only the unit test runner in the interactive watch mode.<br />

### `yarn docker-build`

For have more control about your running environment this command, give for you the creation of image, but docker application it is necessary <br />

### `yarn docker-run`

This command is for running your project into docker image, but is necessary build an image before with command 'yarn docker-build' <br />
