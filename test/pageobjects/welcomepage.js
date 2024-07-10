class welcomepage{
    get amazonurl(){
        return browser.url("https://www.amazon.in/")
    }
    get search(){
        return $("//input[@id='twotabsearchtextbox']")
    }
    get sdropdown(){
        return $$('//select[@id="searchDropdownBox"]/option')
    }
    async welcomepageapllication(){
    await this.amazonurl    
    await  this.search.setValue("phones")
    await this.sdropdown.map(ele=>console.log(ele.getText()))
   }
}

export default new welcomepage()



