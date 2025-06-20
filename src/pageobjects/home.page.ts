class HomePage {
  public get aggreeCompromiseButton() {
    return $(
      `//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.widget.Button`,
    );
  }
  public get createNewWalletButton() {
    return $(
      `//android.view.View[@resource-id="CreateNewWalletButton"]/android.widget.Button`,
    );
  }

  public get successfullInfo() {
    return $(
      `//android.widget.TextView[@text="Brilliant, your wallet is ready!"]`,
    );
  }

  public get successfullInfo2() {
    return $(
      `//android.widget.TextView[@text="Buy or deposit to get started."]`,
    );
  }

  public get inputPasscode() {
    return $(`//android.widget.TextView[@text="Create passcode"]`);
  }

  public async digitButton(digit: string) {
    return $(`//android.widget.TextView[@text="${digit}"]`);
  }

  public async enterPin(pin: string) {
    for (const digit of pin) {
      const btn = await this.digitButton(digit);
      await btn.waitForDisplayed({ timeout: 5000 });
      await btn.click();
      await browser.pause(300);
    }
  }

  public async createNewWallet(pin: string = "1111") {
    await this.createNewWalletButton.waitForDisplayed({ timeout: 5000 });
    await this.createNewWalletButton.click();
    await this.enterPin(pin);
  }
}

export default new HomePage();
