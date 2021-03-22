# react-dog-gallery

This project is based on react-boilerplate. It uses basic components from [Storybook](https://5ccbc373887ca40020446347-qbeeoghter.chromatic.com/?path=/story/header--basic).
All components under src/modules/main/ui/atoms were reused from the boilerplate, some had small changes (ie. Header component). 
Webpack configuration, public folder, npm packages, folder structure, package.json, internationalization (ie. AppContext and AppContextProvider), were all taken from the boilerplate.
The language link shows how to use internationalization, it is part of the boilerplate, not this project.
The new code for this project includes:
* src/modules/main/services
* src/modules/main/containers
    - DogGalleryFromSite
    - DogGalleryFromStorage
    - ImageGalleryFromRoute
* src/modules/scenes
    - Favorites
    - Home (complete rework) 
    - Version (done on spare time after the project was completed)
* src/modules/molecules        

Test files:
* src/modules/main/services/DogImages/DogImages.test.ts
* src/modules/main/ui/atoms/Card/Card.test.tsx
* src/modules/main/ui/molecules/ImageGallery/ImageGallery.test.tsx

To run the project, see [How to run](#How to run).

## Code Exercise

After finishing the project, spent some time adding the code exercise to it, under "Code Challenge" on the navbar.

## Improvements

* Loading spinner on button when getting new images
* Loading image when getting new images
* Something to show the user that the image was saved on favorites - an image overlay would be the best option
* Remove image from favorites

## Notes

* The images are not uniform on size, I'd tried different configuration on how to fill the image on the card. For instance, trying to fill the whole card would crop some parts.
Changes on the card dimensions to the most common sizes should help, but doesn't solve the problem. 
Having the cards on different sizes, accordingly to the image dimensions would cause a broken UI. 

## Boilerplate project

Boilerplate for ReactJS projects. Toolset:

* ReactJS
* React-router
* React-intl
* Styled-components
* Axios
* Typescript
* Webpack
* Storybook
* Prettier
* Eslint
* Node
* SonarQube scanner


## Contents

- [Structure](#structure)
- [How to run](#How to run)

## Structure

- **public**: Contains the static assets and Node server.js for serving the pages.
- **src**/:
  - **lang**: Translation files to be used by react-intl
  - **modules**: Source code for the ReactJS components
    - **containers**: Containers components
    - **contexts**: ReactJS contexts
    - **scenes**: Scene components
    - **services**: Services holding business logic
    - **ui**: Reusable UI components
    - **utils**: Utilities
  - **stories**: Independent React packages that can be imported to bcd-web application on root.
  - **index.js**: Entry point for bootstrapping the application
  - **serviceWorker.js**: Service worker file
  - **App.tsx**: Entry point for the ReactJS application
- **dist**/: Distribution folder

## How to run

### Build

Generates the distribution files in the dist folder
```shell
yarn run build
```

### Develop

Will start the webpack dev-server 

```shell
yarn run start:dev
```

### Test

Runs tests

```shell
yarn run test
```

### Storybook

Starts storybook

```shell
yarn run storybook
```

### Linting

Runs eslint for typescript code

```shell
yarn run lint:ts
```

### Linting automated fixes

Runs eslint for typescript code in auto-fix mode

```shell
yarn run lint:ts:fix
```

## Todo

* Add path aliases
* Configure continuous testing (TDD)
* Increase test coverage and configure quality gate
* Work with configuration files
* Customize fonts
* Review accessibility
* Create Dropdown component
* Add NGNX example

