import express from 'express'
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use('/gif/no', express.static(path.join(__dirname, 'gif', 'no')));
app.use('/gif/yes', express.static(path.join(__dirname, 'gif', 'yes')));

app.get('/foo', function (request, response) {
  response.send('Hello Foo!')
})

app.get('/bar', function (request, response) {
  response.send('Hello Bar!!')
})

const randomIndex = () => { return Math.floor(Math.random()*2) }
const randomIndex2 = () => { return Math.floor(Math.random()*3) }

const get_yes_no = () => { return ['yes', 'no'][randomIndex()] }

const get_random_gif = () => { return  randomIndex2() + '.gif' }

app.get('/yesno', (request, response) => {
    let yes_no = get_yes_no()
    let alea = get_random_gif()
    response.send(`
    <img src="/gif/${yes_no}/${alea}"></img>
    <p>${yes_no}</p>
    <style>
    body{margin:0; display: flex; justify-content: center; align-items: center; background-color: black;} 
    img {height: calc(100vh - 20px); 
    border: solid white 10px; margin: 0;}  
    p {position: fixed; color: white; font-size: 10em;}
    </style>`)
  }
  )

app.listen(3000, () => {
  console.log("Server listening on port 3000")
})