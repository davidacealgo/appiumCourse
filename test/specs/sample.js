describe("Android Elements Test Suite", () => {
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
});
