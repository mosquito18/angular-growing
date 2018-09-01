import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { fadeIn } from '../animations/fade-in';
@Component({
  selector: 'app-my-daily',
  templateUrl: './my-daily.component.html',
  styleUrls: ['./my-daily.component.less'],
  animations: [fadeIn]
})
export class MyDailyComponent implements OnInit {
 missions;
  constructor(private dataService: DataService) { }
  tabColor=['../../assets/优先级Ⅰ.png','../../assets/优先级Ⅱ.png','../../assets/优先级Ⅲ.png','../../assets/优先级Ⅳ.png'];
  finishColor=['../../assets/已完成Ⅰ.png','../../assets/已完成Ⅱ.png','../../assets/已完成Ⅲ.png','../../assets/已完成Ⅳ.png'];
  changeStr(str) {
    var l = str.length;
    if (l > 102) {
      str = str.slice(0, 100) + '...'
    }
    return str;
  }
  ngOnInit() {
      this.dataService.getMissionList().subscribe(
        res => {
          this.missions = res;
          for (var i = 0; i < this.missions.length; i++) {
            this.missions[i].content = this.changeStr(this.missions[i].content);
          }
          
        },
        error => { console.log(error) },
        () => { }
      );
  }

}
