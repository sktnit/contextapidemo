npm init -y
npm install react react-dom
or npm install react@18 react-dom@18

Create a basic project structure:

my-custom-react-app/
  ├── public/
      ├── index.html
  ├── src/
      ├── App.js
      ├── index.js
  ├── .babelrc
  ├── package.json
  ├── webpack.config.js

  "scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}