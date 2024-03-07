import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      windowSize: '1500 x 1024',
      url: 'https://cars.tvbs.com.tw',
      show: true
    },
    // Puppeteer: {
    //   url: 'https://cars.tvbs.com.tw',
    //   show: false
    // }
  },
  include: {
    I: './steps_file'
  },
  name: 'car_test'
}