describe("Android Elements Test Suite", () => {
  it("Find element by accessibility id", async () => {
    const appOption = $("~App");

    await appOption.click();

    const actionBar = $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });
});
