exports.LoginPage = class Login{
    constructor(page){
        this.page = page

        this.signupMenu = page.locator("//a[normalize-space()='Signup / Login']")
        this.usernameField = page.locator("//input[@placeholder='Name']")
        this.emailAddressField = page.locator("//input[@data-qa='signup-email']")
        this.signUpbtn = page.locator("//button[normalize-space()='Signup']")
    
    }

    async openUrl(url){
        await this.page.goto(url)
        await this.page.waitForTimeout(3000); 
    }

    async signUp(name, mail){
        await this.signupMenu.click();
        await this.page.waitForTimeout(1000);

        await this.usernameField.waitFor(1000)
        await this.usernameField.fill(name);

        await this.emailAddressField.fill(mail);
        await this.page.waitForTimeout(1000); 

        await this.signUpbtn.click();
        await this.page.waitForTimeout(1000); 
    }

}