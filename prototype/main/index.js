const path = require('path');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.once('ready', () => {
    let win = new BrowserWindow({
        width: 1280,
        height: 800,
        useContentSize: true
    });

    win.on('closed', () => {
        win = null;
        app.quit();
    });

    const index_html = `file://${path.join(__dirname, '../renderer/index.html')}`;

    win.loadURL(index_html);
    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools({mode: 'detach'});
    }
});
