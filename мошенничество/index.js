const path = require("path")
const url = require("url")

const {app, BrowserWindow} = require("electron")

let win;

function createWindow()
{
    win  = new 
    BrowserWindow(
        {
        
            width: 800,
            height:600,
            icon: __dirname + "./aaa.jpg"
     });

     win.loadURL(url.format({
        pathname: path.join(__dirname, "eee.html"),
        protocol: "file",
        slashes: true
    }))

    win.removeMenu()

    win.on("closed", () => {
        win = null;
    })
}

app.on("ready", createWindow);