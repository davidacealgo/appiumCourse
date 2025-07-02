describe("Android Elements Test Suite", () => {
  afterEach(async () => {
    await driver.terminateApp("io.appium.android.apis");
    await driver.activateApp("io.appium.android.apis");
  });
  it("Find element by accessibility id", async () => {
    const appOption = $("~App");

    await appOption.click();

    const actionBar = $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element by class name", async () => {
    const className = $("android.widget.TextView");
    await expect(className).toHaveText("API Demos");
  });

  it("Find element by XPath", async () => {
    const appOption = $("//android.widget.TextView[@content-desc='App']");
    await appOption.click();

    const alertDialogsOption = $(
      "//android.widget.TextView[@content-desc='Alert Dialogs']"
    );
    await alertDialogsOption.click();

    const listDialogOption = $("//android.widget.Button[@text='List dialog']");
    await listDialogOption.click();

    const commandTwoOption = $(
      "//android.widget.TextView[@text='Command two']"
    );
    await commandTwoOption.click();

    const textAssertion = $(
      "//android.widget.TextView[@resource-id='android:id/message']"
    );
    await textAssertion.waitForExist({ timeout: 5000 });
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });
});
