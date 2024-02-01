'use strict'
import express from 'express'

const PORT = 3200

const app = express()

app.use('/gif/no', express.static('gif/no'));
app.use('/gif/yes', express.static('gif/yes'));

const randomIndex = () => { return Math.floor(Math.random()*2) }
const randomIndex2 = () => { return Math.floor(Math.random()*3) }

const get_yes_no = () => { return ['yes', 'no'][randomIndex()] }

const get_random_gif = () => { return randomIndex2() + '.gif' }

app.get('', (request, response) => {
      const yes_no = get_yes_no()
      const alea = get_random_gif()
      response.send(`
        <div id="container">
          <button onClick="changeAndRefresh()">Change</button>
          <div id="imageDiv">
            <img src="/gif/${yes_no}/${alea}"></img>
            <p>${yes_no}</p>
          </div>
        </div>
        <style>
          body{margin:0; display: flex; justify-content: center; align-items: center; background-color: black;} 
          img {width: calc(100vmin - 20px); 
          border: solid white 10px; margin: 0;}  
          p {position: fixed; text-align: center; color: white; font-size: 10em;}
          #container {display: flex; flex-direction: column; align-items: center;}
          button { width: fit-content; margin: 32px; font-size: 32px;}
          #imageDiv {display: flex; flex-direction: column; align-items: center;}
        </style>
        <script>
        function changeAndRefresh() {
            // Refresh the page
            location.reload();
        }
        </script>
      `)
    }
  )

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
