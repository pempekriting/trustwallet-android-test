import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import HomePage from "../pageobjects/home.page";

const pages = {
  home: HomePage,
};

Given(`I launch the application`, async () => {
  await pages.home.aggreeCompromiseButton.click();
});

When(`I finished created a new crypto wallet`, async () => {
  await pages.home.createNewWallet();
});

Then(`I should see successfull page`, async () => {
  await expect(pages.home.successfullInfo).toBeExisting();
  await expect(pages.home.successfullInfo2).toBeExisting();
});
