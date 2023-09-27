/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/


function hello(name) {
    if (name === '' || name === undefined) {
      return `Hello, World!`;
    } else {
      name = name.split('');
      name[0] = name[0].toUpperCase();
      for (let i = 1; i < name.length; i++) {
        name[i] = name[i].toLowerCase();
      }
      name = name.join('');
      return `Hello, ${name}!`;
    }
  }