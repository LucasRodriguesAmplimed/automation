import Login from './pages/login/login.js';

export default class StartJob{
    constructor(){
        this.login = new Login();
    };

    async exec(){
        await this.login.executeLogin();
    };
}