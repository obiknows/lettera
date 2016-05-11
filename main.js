var app = require('app')
var BrowserWindow = require('browser-window')

var mainWindow = null

/* When the app loads */
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 500, height: 500}) // 500x500 window
  mainWindow.loadUrl('file://' + __dirname + 'index.html') // load index.html
})
