// It's time to practice writing your own POST request using fetch(). In index.js, write a 
// function, submitData, that takes two strings as arguments, one representing a user's 
// name and the other representing a user's email.

// The first two tests mirror the behavior of the JSON server. As you write your solution, 
// keep the server running to test your code. Open index.html in a browser to gain access to 
// your submitData function in console.

// Note: The tests in this lab need access to the fetch() request inside submitData. In order 
// to give them access, write your solution so that submitData returns the fetch(). This will not 
// change the behavior of your fetch().

// ### Test 1 - Send Data

// In `submitData`, write a valid POST request to `http://localhost:3000/users`
// using `fetch()`. This request should include:

// - The destination URL
// - Headers for 'Content-Type' and 'Accept', both set to 'application/json'
// - A body with the name and email passed in as arguments to `submitData`. These
//   should be assigned to `name` and `email` keys within an object. This object
//   should then be stringified.
// ### Test 2 - Handle the Response

// On a successful POST request, expect the server to respond with a
// [`Response`][response] object. Just like we saw earlier in the dog example, the
// `body` property of this response will contain the data from the POST request
// along with a newly assigned _id_.

// Use a `then()` call to access the `Response` object and use its built-in
// `json()` method to parse the contents of the `body` property. Use a _second_
// `then()` to access this newly converted object. From this object, find the new
// id and append this value to the DOM.

// If JSON Server is running and `index.html` is open in the browser, you can test
// your code in the console: calling `submitData()` in the console should cause an
// id number to appear on the page.

function submitData(name, email){
  return fetch('http://localhost:3000/users',{
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
      Accept: "application/json",
   },
   body:JSON.stringify({
     name: name,
     email: email
   }),
 })
    .then(resp => resp.json())
    .then(object => {
      const body = document.querySelector('body')
      const p = document.createElement('p')
      p.textContent = object.id
      body.appendChild(p)
    })
    .catch(error => {
      console.log(error.message)
      const body = document.querySelector('body')
      const p = document.createElement('p')
      p.textContent = error.message
      body.appendChild(p)
    });
}

// ### Test 3 - Handle Errors

// For this final test, after the two `then()` calls on your `fetch()` request,
// add a `catch()`.

// When writing the callback function for your `catch()`, expect to receive an
// object on error with a property, `message`, containing info about what went
// wrong. Write code to append this message to the DOM when `catch()` is called.

// ### Test 4 - Return the Fetch Chain

// An amazing feature of `fetch()` is that if you _return_ it, _other_ functions
// can tack on _their own_ `then()` and `catch()` calls. **For this lab, you will
// need to return the `fetch()` chain from our `submitData` function to ensure that
// the tests run correctly.**