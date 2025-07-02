describe("Android Native Feature Tests", () => {
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
});
