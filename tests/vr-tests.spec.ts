// スナップショット更新
// npx playwright test --update-snapshots

import { test, expect } from "@playwright/test";
import { getStoriesInfo } from "./utils/vr-test-utils";

const storiesInfo = getStoriesInfo();

storiesInfo.map(({ url, title, name }) => {
  test(`snapshot test ${title}: ${name} `, async ({ page }) => {
    await page.goto(url, {
      waitUntil: "networkidle",
      timeout: 1000 * 10,
    });

    // スクリーンショットを取得し比較
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    await page.close();
  });
});
