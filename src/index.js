import Login from './pages/login/login.js';
import Agenda from './pages/agenda/agenda.js';
import Prontuario from './pages/prontuario/prontuarui.js';
import { job } from './utils/utils.js';
export default class StartJob{
    constructor(){
        this.login = new Login();
    };

    async exec(){
        await this.login.initLogin();

    };
}