1. What is React?
React is an open-source JavaScript library created by Facebook. It is used to efficiently build user interfaces by enabling the development of reusable UI components and managing the way data is presented on web pages.It is mainly build to minimize direct interaction with actual DOM beause directly manuipulating the dom.
DOM is slow as comapred to virtual DOM which can be done by with the help of react.

2. Who made React?
React was developed by Jordan Walke, a software engineer at Facebook.

3. What is Babel?
Babel is a JavaScript compiler or transpiler that is used to convert JSX code into plain JavaScript. JSX code is not universally understood by all browsers, so Babel is employed to make it compatible across different environments.

4. How does Babel convert html code in React into valid code?
By using babel we are able to write our HTML and CSS like normal but when we run this file through
babel,it will automatically translate all these codes into pure Javascript so that browsers understand them.
Babel converts the HTML code in React into valid code by using JSX code and babel translater .we writ our html 
code using JSX and by adding babel package and type:"text/babel in our script tag ,babel automatically converts 
it into valid code which can be understand by browser.

5. What is ReactDOM used for? Write an example?
ReactDOM  is used to take react elements and convert them into real DOM elements that get rendered on the 
web page.
Example: 
        <body> <h1 id="head"> </h1> </body>
        let heading1 = document.getElementById("head");
        let element = React.createElement("h1", {}, "Hello Masai");
        let reactRoot = ReactDOM.createRoot(heading1);
        reactRoot.render(element);


6. What are the packages that you need to import for react to work with?
We need two packages ,one is React package and another one is ReactDOM package to import for react to work 
with and third one is additional which is babel package .

7. How do you add react to a web application?
        step-1. Open the HTML file and add a div on which you want to add the React implementation by giving some id.
        step-2. Add the three package to inject react library , reactDOM library and babel inside body tag .
        step-3. Add script tag to write code.
        step-4. Catch the div where you want to show your react application by using document.getElementById("id name")
        step-5. create reactElement and reactDOM and then simply render it to the root of it to display it in the actual DOM

8.What is React.createElement?
It is used to create new react element .It takes three parameters, first -the type of element like div ,p
,h1,etc. second -the attribute like className,idName,style,etc and the last parameter is what you want in that 
element .

9. What are the three properties that createElement accept?
The three properties that createElement accepts are :
        1. It Specifies the type of element ("div")/("p")/("h1"),etc
        2. It takes attributes like className,idName,style,etc
        3. Sets the children of the given element i.e what do you want in that particular element like some text.

10. What is the meaning of render and root?
Render means renew only an appropriate part of information on user’s screen when the element properties 
(props) are replaced by new ones or a component state (as set of props) changes in application.
render means to take react element and convert it into actual DOM element to display on the web page.

root is the parent element of all the other react element in our application.