# group4

## Folder Structure

The project looks like this
```
group4/
  README.md
  package.json
  web.config.js
  public/
    index.html
  src/
    index.css
    app-client.js (Application Entry Point)
    routes.js (Defines Routes for every View)
    server.js (Express Server)
    components/
      AppRoutes.js
      Layout.js
      HomePage.js
      ... (All other js files that use react)
    views/
      index.ejs (HTML entry point)
    static/
      index.html
      js/
        bundle.js
```

All JS and CSS files are inside `src`

## Running project

At the root foler, install the modules
`npm install`

Build the application with all dependencies. Populates bundle.js
`npm start`

Run the application locally. The back-end will not be deployed
`npm run-script start-dev-single-page`

You can see the application running on
[http://localhost:8080](http://localhost:8080)
Run the application with both front-end and back-end
`npm build`

## Application Structure

### React Components
  - Layout: Used as a master component in charge of generic look of our application. Header, content and footer.
  - AppRoutes: Component that uses React Router to manage routing between views.
  - IndexRoute: Special route used to define will be rendered when we are viewing the index page of the parent route (/ in this case).
### Application Entry Point
The JavaScript file that initializes our app logic is under src/app-client.js
The default server url is [http://localhost:3000](http://localhost:3000) (usually the browser window will open automatically).

After you finished working on the project, at the project folder root, you can run `npm run build` to build the product version of your web app. This command will generate a `build` folder, which contains all necessary files to start the web app.

### How to access DataBase:
1) Install heroku CLI
2) Install Postgress
3) Open a terminal
  4) type this: PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"
  5) the, type this: heroku pg:psql --app share-goods
  6) then you will get connection to database


