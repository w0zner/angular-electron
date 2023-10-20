const { app, BrowserWindow } = require('electron')
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
      autoHideMenuBar: true,
      width: 990,
      height: 600,
      title: "Contrato",
      titleBarStyle: 'hidden'
      //webPreferences: {
      //  preload: path.join(__dirname, 'preload.js')
      //}
    })
  
    win.loadFile('dist/index.html')
    //win.webContents.openDevTools();
  }
  
  app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })