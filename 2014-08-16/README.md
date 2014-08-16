## OurJS

### Install OurJS at first
`npm install ourjs`

### Start OurJS
`sh node_modules/ourjs/ourjs.sh`

### Open [this](http://localhost:8054/) in your browser
The page would be displayed in mess, since it need time to setup the templates cache, please refresh it again.

### Login
Use username `guest` and password `123456`

### Add an administrator user
1. Change the CRYPTOKEY, edit file `config.magazine.js`, change the value of `CRYPTOKEY`. *Note:* You will not be able to login as `guest` any longer.
2. Register a new account
Edit file `data/models/user/<xxx>`, the value string `<xxx>` verifies independently. Add a new property `"isAdmin": 1`
3. Restart the web server by kill the thread of `./ourjs.js config.magazine.js`. It will restart automatically. Remember to refresh the page twice.

