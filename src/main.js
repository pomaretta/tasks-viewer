// ======================== //
// TASKVISOR MAIN           //
// ======================== //

const { app, BrowserWindow } = require('electron')

// ENTRYPOINT
const ENTRYPOINT = 'components/index.html'

// ======================== //
// WINDOW                   //
// ======================== //

function initializeWindow (
    {
        height
        ,width
        ,preload = null
    }
){
    return new BrowserWindow(
        {
            height: height
            ,width: width
            ,webPreferences: {
                preload: preload
            }
        }
    )
}

function createWindow ({ height,width,preload = null,path }) {
    const window = initializeWindow(
        {
            height: height,
            width: width,
            preload: preload
        }
    )
    window.loadFile(path)
    return window
}

// ======================== //
// HANDLER                  //
// ======================== //

app.whenReady().then(() => {

    // Create entry point window.
    let entry = createWindow({
        height: 1280
        ,width: 720
        ,preload: null
        ,path: ENTRYPOINT
    })

    // macOS, create new window when none is open.
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow({height: 1280,width: 720,preload: null,path: ENTRYPOINT})
    })

})

// Exit on close where the OS is not darwin.
app.on('window-all-closed',() => {
    if (process.platform !== 'darwin') app.quit()
})