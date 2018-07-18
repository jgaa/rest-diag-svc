const http = require('http')
const os = require("os");
const url = require("url");
const port = 8080

http.createServer((request, response) => {
  console.log(request.url)

  const response_data = {
      service:  process.env.SERVICE_NAME,
      host:     os.hostname(),
      request:  request.url,
      method:   request.method,
      headers:  request.headers,
      from:     request.connection.remoteAddress
  }

  response.end(JSON.stringify(response_data, null, 4))
})
.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err)
  }

  console.log(`Server is listening on ${port}`)
})
