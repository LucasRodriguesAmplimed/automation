import { remote } from 'webdriverio'

const browser = await remote({
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: process.env.CI ? ['headless', 'disable-gpu'] : []
        }
    }
})
const pageIsComplete = async () =>{
    const complete =await browser.execute(() => document.readyState === 'complete');
    if(!complete) return pageIsComplete();
    await browser.pause(1000);
    console.log('Aguardando a página carregar...');
}
await browser.url('https://devapp.amplimed.cloud/login')

await pageIsComplete()

const username = await browser.$('[name="usuario"]')
await username.setValue('suporte144@amplimed.com.br')
await browser.pause(2000)
const password = await browser.$('[name="senha"]')
await password.setValue('Kh4dDznE')
await browser.pause(2000)
await browser.$('[btn-login]').click()
await pageIsComplete()
await browser.pause(2000)
let Authorization = await browser.getCookies();
Authorization = Authorization[2].value;

const headers ={
    Authorization: `Bearer ${Authorization}`
}

console.log(`################$$$$$$$$$$$$$$$$ ${Authorization} $$$$$$$$$$$$$$$$$$$$$###################`)

await browser.deleteSession();