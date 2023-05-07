Getting Started
Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

Quick Start
npx create-react-app my-app
cd my-app
npm start
If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.

(npx comes with npm 5.2+ and higher, see instructions for older npm versions)

Then open http://localhost:3000/ to see your app.

When you’re ready to deploy to production, create a minified bundle with npm run build.

npm start

Get Started Immediately
You don’t need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

Creating an App
You’ll need to have Node >= 14 on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

npx
npx create-react-app my-app
(npx comes with npm 5.2+ and higher, see instructions for older npm versions)

npm
npm init react-app my-app