import { Component, OnInit, Input,AfterViewInit} from '@angular/core';
import { DataService } from '../shared/services/data.service';
@Component({
  selector: 'app-vedio-card',
  templateUrl: './vedio-card.component.html',
  styleUrls: ['./vedio-card.component.less']
})
export class VedioCardComponent implements OnInit {
  @Input() datas=[];
  display = [];
  notDisplay = [];
  colors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
  constructor(private dataService: DataService) { }
  changeDisplay(index) {
    this.display[index] = !this.display[index];
    this.notDisplay[index] = !this.notDisplay[index];
  }
  ngOnInit() {   
    for (var i = 0; i < 5; i++) {
      this.display[i] = true;
      this.notDisplay[i] = false;
    }

  }
  ngAfterViewInit() {

  }

}
