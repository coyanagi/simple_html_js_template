# simple_html_js_template
A simple left navigation page template written in HTML and Javascript.  
The contents in right side area are refreshed when you click one of items in left side pane. 

![simple_html_js_template](https://user-images.githubusercontent.com/582168/44012230-8a09ac3e-9ef8-11e8-9913-1038cf37ac81.png)

## How to use
In this repository, there are three directories - Vanilla, Vue and React.  
You just need to clone the repository and use the directory which you like. If you just want to see the app in browser locally, please drag and drop the index.html in each directory.  
*Chrome need execution option `"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files`

- Vanilla  
This template is written in pure Javascript. There is no dependency.

- Vue  
This template is written in Vue [(https://vuejs.org/)](https://vuejs.org/). No compiler is needed.

- React  
This template is written in React [(https://reactjs.org/)](https://reactjs.org/).  

  To use the React template, npm is needed to transcompile React with ECMASCript2015 based code to backwards compatible version of JavaScript.
  Before changing the code in this template, please install npm and run the following script in React directory.
  ```
  npm install
  ```

  Once you change the code in this template, Please run the following script to compile the code. `main.js` is created in React/dist directory.
  ```
  npm run build
  ```
  
