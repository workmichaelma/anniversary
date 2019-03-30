export default function (req, res, next) {
  // req is the Node.js http request object

  let list = []

  const testFolder = (__dirname + '/assets/img').replace('/api', '');
  const fs = require('fs');

  fs.readdirSync(testFolder).forEach(file => {
    list.push(file)
  });

  res.status(200).json(list)

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  // next()
}