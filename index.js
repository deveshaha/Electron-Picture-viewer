'use strict'

// We instance the objects "App" and "BrowserWindow"
const { app, BrowserWindow } = require('electron')

//We print a message in the console before quitting the app
app.on('before-quit', () => {
    console.log("Saliendo de la app...")
})

// This method will do what is inside only when the app is ready
app.on('ready', () => {
    console.log("Abriendo la app..")
    //Here we are creating a new Browser window and we assignate properties to it
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Hello World!",
        center: true,
        maximizable: false
    })

    win.on('move', () => {
        const position = win.getPosition();
        console.log("Window position: " + position)
    })


    //This methond will detect when the window is closed!
    win.on('closed', () => {
        win = null; //We make it null to free memory!
        app.quit()
    })
})

