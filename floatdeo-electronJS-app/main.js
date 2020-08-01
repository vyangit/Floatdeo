/**
 * main.js
 * 
 * The main initiation script and functions to set up the ElectronJS window 
 */

const {app, BrowserWindow, session, protocol} = require('electron');
var express = require('express');
const {serverUp} = require('./server')

const port = serverUp();

function createWindow() {

  	// Create the browser window
	win = new BrowserWindow({
		backgroundColor: '#2e2c29',
		alwaysOnTop: false,
		title: "Floatdeo",
		// frame: false,
		autoHideMenuBar: true,
		minWidth: 600, minHeight: 450,
		width: 600, height: 450,
	})

	// load the app
	win.loadURL(`http://localhost:${port}`);
	// win.loadFile('index.html');

	// Comment out to disable dev tools
	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null
	});	
}

function setupSession() {
	let ses = session.defaultSession;
	// registerFileProtocol(ses);
	// registerHttpProtocol(ses);
	// ses.setProxy({proxyRules:"http=192.168.1.74:3987"});
}

function registerHttpProtocol(ses) {
	// ses.protocol.registerHttpProtocol('floatdeo',)
}

function registerFileProtocol(ses) {
	ses.protocol.registerFileProtocol('floatdeo', (request, callback) => {
		const url = request.url.substr(11)
		if (url) {
			console.log(__dirname);
			callback({ path: path.normalize(`${__dirname}/${url}`) })
		} else {
			console.error('Failed to register protocol');
		}
	});

}

// Setup on app launch
app.whenReady().then(() => {
	setupSession();
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
