// Require some modules
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// global ref. of mainWindow [garbage coll. reasons]
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 400, height: 400})  // 500x500 window
  mainWindow.loadURL('file://' + __dirname + '/index.html')  // load index.html

  // check when window closes and dereference
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

/* When the app loads */
app.on('ready', createWindow)

/* Quit when all windows are closed. */
app.on('window-all-closed', function () {
  // On OS X stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

/* Recreate on reclick */
app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

/* Include the rest app's specific main process code.
Put them in separate files and require them here. */
