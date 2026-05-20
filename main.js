const { app, BrowserWindow } = require('electron');
const path = require('path');

try {
  require('electron-reloader')(module);
} catch (_) {}

const WinState = require('electron-win-state').default;
const winStateKeeper = new WinState({
  defaultWidth: 900,
  defaultHeight: 588
});

function createWindow() {
  const win = new BrowserWindow({
    ...winStateKeeper.winOptions, 
    resizable: false,
    movable: true,
    titleBarStyle: 'hidden',
    width: 900,
    height: 588,
    minWidth: 900,
    minHeight: 588,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
        color: 'rgb(231, 215, 193)',
        symbolColor: 'rgb(115, 87, 81)',
        height: '40'
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  winStateKeeper.manage(win);

  win.loadFile(path.join(__dirname, 'app/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
