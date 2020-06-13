/**
 * main.js
 * 
 * The main initiation script and functions to set up the ElectronJS window 
 */

const {app, BrowserWindow, session, protocol} = require('electron');

function createWindow() {
  	// Create the browser window
	win = new BrowserWindow({
		backgroundColor: '#2e2c29',
		alwaysOnTop: false,
		// frame: false,
		autoHideMenuBar: true,
		minWidth: 450, minHeight: 350,
		width: 600, height: 400,
	})

	// load the index.html of the app
	win.loadFile('index.html')

	win.on('closed', () => {
		win = null
	});	
}

function registerFileProtocol() {
	protocol.registerFileProtocol('floatdeo', (request, callback) => {
		const url = request.url.substr(11)
		callback({ path: path.normalize(`${__dirname}/${url}`) })
	}, (error) => {
		if (error) console.error('Failed to register protocol');
	});
}

// Setup on app launch
app.whenReady().then(() => {
	registerFileProtocol();
	createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});