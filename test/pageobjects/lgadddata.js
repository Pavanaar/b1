class practicetestautomationlgpage{
   get usernametf(){
          return $("//input[@name='username']")
   }
    get passwordtextF()
    {
        return $('//input[@id="password"]')
    }
    get submitbutton(){
        return $('//button[@id="submit"]')
    }

    async login(usn,pwd){
        await this.usernametf.setValue(usn)
        await this.passwordtextF.setValue(pwd)
        await this.submitbutton.click()
    }
}
export default new practicetestautomationlgpage()