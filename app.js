const { BrowserWindow, app } = require("electron");
const path = require("path");
require('@electron/remote/main').initialize()

let mainWindow;
app.on("ready", () => createWindow());

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "FyreMC Staff Segéd",
        width: 1150,
        height: 700,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    mainWindow.loadFile(path.join(__dirname, "app/index.html"));
    mainWindow.removeMenu();
    mainWindow.webContents.openDevTools();
    require("@electron/remote/main").enable(mainWindow.webContents);
}

app.on("window-all-closed", () => {
    app.quit();
});