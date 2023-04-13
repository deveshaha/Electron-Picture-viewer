'use strict'

const { app, BrowserWindow } = require('electron')


app.on('before-quit', () => {
    console.log("Saliendo de la app...")
})

app.on('ready', () => {
    console.log("Abriendo la app..")
    let win = new BrowserWindow()

    win.on('closed', () => {
        win = null;
        app.quit()
    })
})

