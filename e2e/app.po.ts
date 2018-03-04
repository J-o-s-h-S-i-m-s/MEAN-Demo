import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('https://j-o-s-h-s-i-m-s.github.io/MEAN-demo/');
  } 

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
