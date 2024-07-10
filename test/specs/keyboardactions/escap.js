import { Key } from 'webdriverio'
describe("",()=>{
    it("",async()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.fullscreenWindow()
        await browser. pause(2000)
        await browser.keys(Key.Escape)
        await browser. pause(4000)
        
    })
})