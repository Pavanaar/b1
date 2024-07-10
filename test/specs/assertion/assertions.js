//browsermatches
describe("",async()=>{
    it("",async()=>{
        await browser.url("https://www.flipkart.com/")
        //await browser.$('//input[@class="Pke_EE"]').setValue("mobiles")
        await expect(browser).toHaveUrl("https://www.flipkart.com/")
        
        let ele=await browser.$('//input[@class="Pke_EE"]')
        ele.waitForEnabled()
            
        await expect(ele).toBeEnabled()



    })
})