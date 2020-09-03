/*
  Exercise 6
  DOM manipulation with vanilla JS
*/

// Task
// What does DOM stand for?
//Document Object Model

// Task
// Open the file index.html in AWS Cloud9. Click "Preview" > "Preview File index.html". (Note that you can open it in a new window). What do you see?
// Pink rectangle

// Task
// Delete the div with the class rectangle from index.html and refresh the preview.
// Nothing on page

// Task
// What does the following code do?
const viz = document.body.querySelector(".viz"); 

console.log(viz, viz.children); 

const addChildToViz = () => {
  const newChild = document.createElement("div");
  newChild.className = "rectangle";
  newChild.style.height = Math.random() * 100 + "px";
  viz.appendChild(newChild);
};

viz.addEventListener("click", addChildToViz);

/*
  line 20: selects div with class="viz"
  line 22: logs element and array of child elements
  line 24-29: function creates a new element with a class rectangle. Sets div height and appends the div to <div class="viz"></div>
  line 31: adds an event listener to watch for a click, then runs the addChildToViz()  
*/

// Task
// Where can you see the results of the console.log below? How is it different from in previous exercises?

function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      console.log(data);
      
    });
}

drawIrisData();

/* 
  Results can be seen in the dev tools in Chrome
  It's different because the last function simply added a new empty div, whereas this code uses fetch to make a web request to server to get data
*/

// Task
// Modify the code above to visualize the Iris dataset in the preview of index.html.
// Feel free to add additional CSS properties in index.html, or using JavaScript, as you see fit.
