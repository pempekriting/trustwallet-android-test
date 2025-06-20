# 🛠️ Trust Wallet Android Automation

> Automated UI test for [Trust Wallet Android App](https://trustwallet.com/) using WebdriverIO, Appium, Cucumber, and TypeScript.

---
## 🧪 Test Tech Stack

| Layer           | Tool                            |
|----------------|----------------------------------|
| Test Runner     | WebdriverIO                     |
| Framework       | Cucumber.js                     |
| Assertion       | Expect-WebdriverIO              |
| Device Control  | Appium                          |
| Report          | wdio-cucumberjs-json + multiple-cucumber-html-reporter |
| Language        | TypeScript                      |

---

## 📁 Project Structure

```
trustwallet-android-test/
├── config/                      # WDIO configuration
├── src/
│   ├── features/                # Gherkin feature files
│   ├── step-definitions/       # Cucumber steps (glue code)
│   └── pages/                  # Page Object files
├── reports/
│   └── html/                   # HTML report output
├── .tmp/json/                  # JSON output from cucumberjs-json-reporter
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Emulator + Appium

- Start Android emulator (e.g., Pixel XL API 28)
- Start Appium server:

```bash
appium --address 0.0.0.0 --port 4723
```
Please check or re-setup the `config/wdio.conf.ts`, make sure align with your local setup. You can change hostname, port, and capabilities based on your local setup.

### 3. Run Test

```bash
npm run wdio
```

---

## 📊 HTML Report

After running tests:

```bash
npm run report
```

It will generate:

```
reports/html/index.html
```

Open this file in browser to view the test results.

---

## 🐞 Known Issue (In Investigation)

There is a recurring issue during test execution:

```text
WebDriverError: No alert is present on the screen when running "alert/text" with method "GET"
```

- This error appears even when no alert is triggered in the app.
- Possible root causes being explored:
  - A hook or library might be calling `getAlertText()` unexpectedly.
  - Session instability or Appium bug.
  - Intermittent UI not interactable issues.

✅ Temporary Workarounds:
- `autoAcceptAlerts` and `autoDismissAlerts` are enabled in `capabilities`.
- Manual `getAlertText()` removed from test code.

🚧 Status: Actively being investigated.

---

## 👨‍💻 Author

Built and maintained by **Kgs. Azzam Nizar**

---

## Report Evidence

[HTML Report](https://pempekriting.github.io/trustwallet-android-test/reports/html/index.html)

## Video Evidence

![](./evidence/evidence.gif)
