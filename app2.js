import express from "express"

const app = express()

app.get('/', function (request, response) {
  let form = `<form>
  <label for="value">Value:</label>
  <input type="text" id="value" name="value" required>
  <button type="submit">Submit</button>
  </form>`
  response.send(form)
  })

app.use((req, res, next) => {
  if (req.method === 'POST')
  req.body
  res.send()
  next();
});


app.listen(3000, () => {
  console.log("Server listening on port 3000")
})