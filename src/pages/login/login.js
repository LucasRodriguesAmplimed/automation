
import { browser } from '../../utils/utils.js'
import { pageIsComplete } from '../../utils/utils.js'
import { job } from '../../utils/utils.js'
import { setFieldValue } from '../../utils/utils.js'
import { clickElement } from '../../utils/utils.js'

export default class Login {

    async initBrowser(){
        await browser.url(job.url);
        await pageIsComplete();
    };

    async setDataLogin () {
        await setFieldValue('[name="usuario"]', job.clinic.username);
        await setFieldValue('[name="senha"]', job.clinic.password);
        await clickElement('[btn-login]');
        await pageIsComplete();
    };

     async initLogin() {
        console.log(job, job.url)
       await this.initBrowser();
       await this.setDataLogin();
       console.log('$$$$$ Login realizado com sucesso! $$$$$');
    };
}