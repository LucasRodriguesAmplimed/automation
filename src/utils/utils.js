import { remote } from 'webdriverio'

export const browser = await remote({
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: process.env.CI ? ['headless', 'disable-gpu'] : []
        }
    }
});

export const pageIsComplete = async () => {
    const complete = await browser.execute(() => document.readyState === 'complete');
    if (!complete) return pageIsComplete();
    await browser.pause(1000);
    console.log('Aguardando a página carregar...');
};

export const deleteSession = async () => await browser.deleteSession();

export const job = JSON.parse(process.env.PAYLOAD_CLIENT);

export const setFieldValue = async (field, value) => {
    const element = await browser.$(field);
    await element.waitForDisplayed();
    await element.setValue(value);
};

export const clickElement = async (field) => {
    const element = await browser.$(field);
    await element.waitForDisplayed({ timeout: 60000 });
    await element.click();
};