const {app, Menu} = require('electron')
  
  const template = [
    {
      label: 'File',
      submenu: [
        {role: 'close'}
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('https://electronjs.org') }
        }
      ]
    }
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)