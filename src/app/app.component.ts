import { Component, OnInit } from '@angular/core'

const birdImgList: string[] = [
  'assets/bird/tit-on-branch.png',
  'assets/bird/tit-on-branch2.png',
  'assets/bird/tit-on-branch3.png',
  'assets/bird/tit-on-branch4.png',
  'assets/bird/tit-on-branch5.png',
  'assets/bird/tit-fly.png',
  'assets/bird/tit-fly2.png',
  'assets/bird/tit-fly3.png',
  'assets/bird/tit-fly4.png',
  'assets/bird/tit-fly5.png',
  'assets/bird/tit-stand.png',
  'assets/bird/tit-wing-up.png',
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titImgSrc: string = ''

  changeBirdByClick (): void {
    this.titImgSrc = birdImgList[this.randomIntFromInterval(0, birdImgList.length-1)]
  }

  randomIntFromInterval (min: number, max: number): number { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  ngOnInit (): void {
    this.titImgSrc = birdImgList[this.randomIntFromInterval(0, birdImgList.length-1)]
  }

}
