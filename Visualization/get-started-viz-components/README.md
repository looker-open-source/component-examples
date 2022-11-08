# **Get started with Looker visualization components**

This folder has the code for the frontend and backend service used in the [get started with Looker visualization components tutorial](https://developers.looker.com/components/getting-started).

<br>

### **Getting Started for Development**
<br>

1. Clone the Looker component examples repo.

```
git clone git@github.com:looker-open-source/component-examples.git
```

#### **Start the backend serivce helper**
<br>

2. Navigate (`cd`) to the `backend-node` directory on your system

```
cd component-examples/Visualization/get-started-viz-components/backend-node
```

3. Install the dependencies with NPM.

```
npm install
```

4. Edit the `looker.ini` file

5. Start the developement server

```
npm start
```

#### **Start the frontend app**

6. Open a second terminal and navigate (`cd`) to the frontend directory

```
cd component-examples/Visualization/get-started-viz-components/frontend-react
```

7. Install the dependencies with NPM.

```
npm install
```

8. Edit the `.env` file
9. Start the development server

```
npm start
```

_Don't forget to change the query `slug` in the `App.js` file._