exports.FromFillupPage = class FromFillup{
    constructor (page){
        this.page = page

        this.selectTitle = page.locator("//input[@id='id_gender1']")
        this.passwordBox = page.locator("//input[@id='password']")
        this.dobBox = page.locator("//select[@id='days']")
        this.domBox = page.locator("//select[@id='months']")
        this.doyBox = page.locator("//select[@id='years']")
        this.checkBox = page.locator("//input[@id='newsletter']")
        this.fiestNameBox = page.locator("//input[@id='first_name']")
        this.lastNameBocx = page.locator("//input[@id='last_name']")
        this.companyNameBox = page.locator("//input[@id='company']")
        this.addressOneBox = page.locator("//input[@id='address1']")
        this.addressTwoBox = page.locator("//input[@id='address2']")
        this.selctCountry = page.locator("//select[@id='country']")
        this.selcetState = page.locator("//input[@id='state']")
        this.setCity = page.locator("//input[@id='city']")
        this.setZipCode = page.locator("//input[@id='zipcode']")
        this.setPhoneNum = page.locator("//input[@id='mobile_number']")
        this.createAcBtn = page.locator("//button[normalize-space()='Create Account']")
        // this.accoutCreatedText = page.locator("//b[normalize-space()='Account Created!']")
        this.continueBtn = page.locator("//a[normalize-space()='Continue']")
    }

    async setAccountInfo(){
        await this.selectTitle.click()
        await this.page.waitForTimeout(1000)

        await this.passwordBox.fill("Sumon123")
        // await this.page.waitForTimeout(1000)

        await this.dobBox.click()
        await this.dobBox.selectOption("5")
        await this.page.waitForTimeout(1000)

        await this.domBox.click()
        await this.domBox.selectOption("July")
        await this.page.waitForTimeout(1000)

        await this.doyBox.click()
        await this.doyBox.selectOption("1999")
        await this.page.waitForTimeout(1000)

        await this.checkBox.click()
        await this.page.waitForTimeout(1000)

        await this.fiestNameBox.fill("Sumon")
        await this.page.waitForTimeout(1000)

        await this.lastNameBocx.fill("Ahmed")
        await this.page.waitForTimeout(1000)

        await this.addressOneBox.fill("Road-12, Mirpur")
        await this.page.waitForTimeout(1000)

        await this.addressTwoBox.fill("Same as address one")
        await this.page.waitForTimeout(1000)

        await this.selctCountry.click()
        await this.selctCountry.selectOption("Australia")
        await this.page.waitForTimeout(1000)

        await this.selcetState.fill("Dhaka")
        await this.page.waitForTimeout(1000)

        await this.setCity.fill("Dhaka")
        await this.page.waitForTimeout(1000)

        await this.setZipCode.fill("1216")
        await this.page.waitForTimeout(1000)

        await this.setPhoneNum.fill("017256907820")
        await this.page.waitForTimeout(1000)

        await this.createAcBtn.click()
        await this.page.waitForTimeout(1000)

        await this.continueBtn.waitFor(1000)
        await this.continueBtn.click()

    }
}