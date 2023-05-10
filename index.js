const App = require('./modules/App')

App.createUser('magna@email.com', 'Magna X')
App.createUser('Black@email.com', 'Black Hawk')
App.createUser('ghost@email.com', 'Ghost')

App.deposit('magna@email.com', 3500)

App.transfer('magna@email.com', 'Black@email.com', 500)

App.changeLoanFee(10)
App.takeLoan('ghost@email.com', 1000, 12)

console.log(App.findUser('magna@email.com'))
console.log(App.findUser('magna@email.com').account)
console.log(App.findUser('Black@email.com'))
console.log(App.findUser('Black@email.com').account)
console.log(App.findUser('ghost@email.com'))
console.log(App.findUser('ghost@email.com').account)
console.log(App.findUser('ghost@email.com').account.loans[0].installments)
