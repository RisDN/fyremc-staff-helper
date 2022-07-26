const { BrowserWindow, app } = require("electron");
const path = require("path");

let mainWindow;
app.on("ready", () => createWindow());

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "FyreMC Staff Segéd",
    width: 950,
    height: 600,
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
