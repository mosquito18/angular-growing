import {Component, ViewChild, ElementRef,OnInit} from '@angular/core';
import { NzInputDirectiveComponent } from 'ng-zorro-antd';
import { DataService } from '../shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeIn } from '../animations/fade-in';
@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.less'],
  animations: [fadeIn]
})
export class MissionDetailComponent implements OnInit {
  btnColor=['../../assets/任务完成Ⅰ.png','../../assets/任务完成Ⅱ.png','../../assets/任务完成Ⅲ.png','../../assets/任务完成Ⅳ.png'];
  colors=['#df5252','#ffd631','#3191fe','#78c79c'];
  constructor(private dataService: DataService,private route: ActivatedRoute,private router: Router,) { }
  missionName;
  missions;
  ngOnInit() {
      
      this.dataService.getMissionList().subscribe(
        res => {
          this.missionName=this.route.snapshot.paramMap.get('missionName');
          this.missions = res.find(mission => mission.title === this.missionName);
          // console.log(this.missions.title);
        },
        error => { console.log(error) },
        () => { }
      );
  }
  changeIsFinish(){
    this.missions.isFinish=!this.missions.isFinish;
    this.dataService.getMis(2).subscribe(
        res => {
          console.log("修改成功");
        },
        error => { console.log(error) },
        () => { }
      );
        // this.router.navigate(['/mydaily'], {});

    // console.log(this.missions.isFinish);
  }

  public tags = ['Unremovable', 'Tag 2', 'Tag 3'];
  public inputVisible = false;
  public inputValue = '';
  @ViewChild('input') input: NzInputDirectiveComponent;

  handleClose(removedTag: any): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
        this.input.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue) {
        this.tags.push(this.inputValue);
    }
    this.inputValue = '';
    this.inputVisible = false;
  }
}
