const store = require('./store');

function addMessage(user, message){
    return new Promise((resolve, reject)=>{
        if(!user || !message){
            console.error('[MessageController] No hay usuario o msg');
            reject('Los datos son incorrectos');
            return false;
        }
        // console.log(user);
        // console.log(message);
        const fullMessage = {
            user: user, 
            message: message, 
            date: new Date(),
        };
        store.add(fullMessage);
        resolve(fullMessage);
    });
}

function getMessages(){
    return new Promise((resolve, reject)=> {
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessages,
}