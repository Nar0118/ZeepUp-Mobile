# ZeepUp Mobile

## Prepare

Install all project dependencies - `npm install`
Install Husky to enable the pre-commit hooks - `npm run prepare`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8081](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches Jest tests. (integration, unit)\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Testing

In this template project there are unit tests using JEST, also automation tests with cypress.
For them to work as they should, you will need to:

Install Cypress by running `npm install --save-dev cypress`.
Run Cypress in interactive browser-based test mode with `npm run cypress:open`.
Run Cypress tests in headless mode with `npm run cypress:run`.
Run JEST unit tests using `npm run test` (It will run itself when trying to commit, push something to repo with husky).

## Folder Structure:

    1. Create all your components in the components directory.
    2. Each Component directory must look like this
        a. Index.tsx
        b. Index.scss
    3. Same about separate pages. Create them in the pages directory with the same structure. If there are any helper function specific to your component create a helpers folder in your component directory and create your helpers in there.
    4. When creating test file - write the name of the function or component, that you are testing and then depending if that is a unit or integration test add .integration.test.tsx or just .test.ts.
    5. Any website assets should be kept in the public directory there is already folders for images and icons.
    6. Hooks must be in the hooks directory. Hooks name must start with the word “use” followed by a descriptive name, such as useFetch or useWindowWidth.
    7. Any utility files or functions should be located in the utils directory.
    8. Any Cypress Test must have .cy.ts extension.
    9. If you have any utils for scss to add add them to scss/utils/ (write the name with _ at the beginning)
    10. When writing API functions write them in the api directory in separate files using the ApiBase class methods.

## Naming:

    1. Always be clear when naming variables. Use naming styles like camel-case. Caution: If you started your project naming your variables with one style. Continue with that one. Don’t mess the code.
    2. Variable, function names should always showcase what that variable or function is doing. Something like this is inappropriate: let a = 1; function b() {}.
