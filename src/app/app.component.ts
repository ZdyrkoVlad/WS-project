import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

const birdImgList: string[] = []

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titImgSrc: string = ''
  activeSection: string = 'AboutUs'
  menuActive: boolean = false
  languageActivate: boolean = false

  language: string = 'EN'

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'ua']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeBirdByClick (): void {
    this.titImgSrc = birdImgList[this.randomIntFromInterval(0, birdImgList.length - 1)]
  }

  randomIntFromInterval (min: number, max: number): number { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  ngOnInit (): void {
    this.titImgSrc = birdImgList[this.randomIntFromInterval(0, birdImgList.length - 1)]
  }

  changeLanguage (language: string): void {
    this.language = language

    this.translate.use(language.toLowerCase());

  }

}
