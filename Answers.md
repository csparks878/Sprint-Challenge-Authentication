<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

- Middleware:
Middleware are essentially pieces of code that add a functionality to your request handlers without having to write the code out specifically each time you need said functionality. They can be used globally, working with all requests in 
a project, or locally, working only with specified requests in a project. They essentially are a middleman between the client's request, and the handler's response: client request > middleware > request handler.

- Sessions:
Sessions, as used in Express, are a way of persisting state through multiple different requests of disparate types. They are added to the request object (req), and allow you to add on key/value pairs to them as you would any other object literal in JavaScript: primarily with dot syntax. Express Sessions need to be installed as a module for them to function. Also, they can store the data in four different locations depending on their implementation: in application memory, in a cookie, in the memory cache, or on the database itself.

- Bcrypt:
Bcrypt is a library that is used for the purpose of encripting data to be stored on a server so that it is not saved as plain text, which would be easy to hack. It does this via a process called "Hashing", which is essentially converting the plain text input data into some other long string of information, known as a "Salt," which Bcrypt also generates, so that the user input can be stored safely.

- JWT:
JSON Web Tokens, JWT for short, are--as I understand them--a bit like cookies. They are a secure way of passing data back and forth between the client and server, and containing necessary information for interacting with said server. They are most commonly used to verify authentication on the user end, although that can send other types of information as well. They are very compact, and consist of three seperate parts: the header, payload, and signature, all of which play unique parts in facilitating the interaction between front-end and back-end. 

1.  What does bcrypt do in order to prevent attacks?

- In short, if plain text passwords were stored as they are, then someone could dump the server's data, and have access to all user accounts without any extra work. The process of Hashing does a great deal to mitigate this, as it increases exponentially the difficulty of gaining access to user records, even if a dump should happen. This is because it is not clear to the hacker the exact method that was use to Hash the passwords, so they would need to write functinoality to test every single combination of Hash and password input until the Hashed text matches up. This can take exuberant amounts of time, given how complex modern Hashing function and passwords have become.

1.  What are the three parts of the JSON Web Token?

- As mentioned above:

The Header: Which usually contains the Hashing function used for incription, and the token's identifying type of JWT.

The Payload: This section of the JWT houses the "Claims", usually contains identifiying information about the user.

The Signature: This is primarily a method of making sure that the information sent in the JWT wasn't modifed on the way to it's target. It contains a "secret", which is a long, unique string, kind of like password, the header, the payload, and the Hashing algorithm.
