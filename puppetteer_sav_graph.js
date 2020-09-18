// genere une capture du graphique
// enregistree dans un fichier png

const puppeteer = require('puppeteer');

(async () => {
        const browser = await puppeteer.launch({  args: ['--no-sandbox'] ,  slowMo: 800 });
        const page = await browser.newPage();


        await page.setViewport({width: 1024, height: 768, deviceScaleFactor: 1});
        await page.goto('http://zzzzz.com/rapports/');
        await page.screenshot({
                path: '/chemin_stockage/graph.png',
                clip: { x:10,y:40, width:1005,height:300 }
        });

        await browser.close();

}) ()
