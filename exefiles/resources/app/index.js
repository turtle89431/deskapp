const { app, BrowserWindow, Menu } = require("deskgap");
//yn
app.once("ready", () => {
  const win = new BrowserWindow();
  win.loadFile("index.html");
  
});
Menu.setApplicationMenu(null);