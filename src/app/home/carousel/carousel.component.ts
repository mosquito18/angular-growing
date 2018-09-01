import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  array = [ '../../assets/carousel1.png' ];

  ngOnInit() {
    setTimeout(_ => {
      this.array = [ '../../assets/carousel1.png','../../assets/carousel3.jpg','../../assets/carousel2.jpg','../../assets/carousel4.jpg' ];
    }, 500);
  }

}
