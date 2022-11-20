const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path')

const REACT_BUILD_PATH = path.join(__dirname, './sme/build/index.html');

const data = fs.readFileSync(REACT_BUILD_PATH).toString();
if (data.includes('href="/')) fs.writeFileSync(REACT_BUILD_PATH, data.replace(/(src|href)="/g, '$&.'));

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 675,
  });

  win.loadFile(REACT_BUILD_PATH);
  win.focus();
}

app.whenReady().then(_ => {
  createWindow();

  app.on('activate', _ => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', _ => {
  if (process.platform !== 'darwin') app.quit();
});