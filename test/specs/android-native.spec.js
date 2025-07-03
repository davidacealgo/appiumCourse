describe("Android Native Feature Tests", () => {
  afterEach(async () => {
    await driver.terminateApp("io.appium.android.apis");
  });
  beforeEach(async () => {
    await driver.activateApp("io.appium.android.apis");
  });
  it("Access an Activity Directly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      ".app.AlertDialogSamples"
    );

    await driver.pause(3000);

    await expect(
      $('//android.view.ViewGroup[@resource-id="android:id/action_bar"]')
    ).toExist();
  });

  it("Dialog Boxes", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      ".app.AlertDialogSamples"
    );

    await driver.pause(3000);

    await expect(
      $('//android.view.ViewGroup[@resource-id="android:id/action_bar"]')
    ).toExist();

    const dialogOkOption = $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/two_buttons"]'
    );

    const dialogTitle = $(
      '//android.widget.TextView[@resource-id="android:id/alertTitle"]'
    );

    await dialogOkOption.click();
    await expect(dialogTitle).toBePresent();
    await expect(await dialogTitle.getText()).toEqual(
      "Lorem ipsum dolor sit aie consectetur adipiscing\nPlloaso mako nuto siwuf cakso dodtos anr koop."
    );
    await driver.acceptAlert();
    await expect(dialogTitle).not.toExist();
  });

  it("Vertical Scroll into view", async () => {
    const appOption = $("~App");
    await appOption.click();
    await $("~Activity").click();

    const scrollIntoView = $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    );
    await $("~Secure Surfaces").click();

    const secureDialog = $("~Secure Dialog");
    await expect(secureDialog).toExist();
  });
});
