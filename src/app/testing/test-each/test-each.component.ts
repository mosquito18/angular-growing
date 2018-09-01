import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { TestContentComponent } from '../test-content/test-content.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-each',
  templateUrl: './test-each.component.html',
  styleUrls: ['./test-each.component.less']
})
export class TestEachComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  @ViewChild('testEach') testEach: ElementRef;
  constructor(private modalService: NzModalService, public router: Router) { }
  isConfirmLoading = false;
  showTestModalMiddle = () => {
    const subscription = this.modalService.open({
      // title: '对话框标题',
      content: TestContentComponent,
      onOk() {
      },
      onCancel() {
        // console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        name: '测试渲染Component'
      }
    });
    subscription.subscribe(result => {
      // console.log(result);
    })
  }
  onClick($event) {
    // debugger;
    var x = $event.clientX - this.testEach.nativeElement.offsetLeft;
    var y = $event.clientY - this.testEach.nativeElement.offsetTop + $(window).scrollTop();
    // console.log($event.clientX-this.testEach.nativeElement.offsetLeft);
    // console.log($event.clientY-this.testEach.nativeElement.offsetTop);
    if (x >= 282 && x <= 298 && y >= 207 && y <= 230) {
      console.log("工作态度");
      this.showTestModalMiddle();
    }
    if (x >= 342 && x <= 358 && y >= 422 && y <= 445) {
      console.log("创造力");
      this.showTestModalMiddle();

    }
    if (x >= 402 && x <= 418 && y >= 132 && y <= 155) {
      console.log("人际交往能力");
      this.showTestModalMiddle();

    }
    if (x >= 442 && x <= 458 && y >= 292 && y <= 315) {
      console.log("技术技能");
      this.showTestModalMiddle();

    }
    if (x >= 522 && x <= 538 && y >= 192 && y <= 215) {
      console.log("学习能力");
      this.showTestModalMiddle();

    }
    if (x >= 522 && x <= 538 && y >= 412 && y <= 435) {
      console.log("执行力");
      this.showTestModalMiddle();

    }

    // var x = e.clientX - canvas.offsetLeft;
    // var y = e.clientY - canvas.offsetTop;
  }
  ngOnInit() {
    let ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');

    function Circle(borderColor) {
      this.radius = 10;    // 圆环半径    
      this.lineWidth = 6;  // 圆环边的宽度    
      this.strokeStyle = '#fff'; //边的颜色    
      this.fillStyle = borderColor;  //填充色 '#4d4d4d'   
      this.lineCap = 'round';
    }
    Circle.prototype.draw = function (ctx, circleColor, circleX, circleY) {
      ctx.beginPath();
      ctx.arc(circleX, circleY, this.radius, 0, Math.PI * 2, true);  // 坐标为250的圆，这里起始角度是0，结束角度是Math.PI*2    
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = this.strokeStyle;
      ctx.fillStyle = circleColor;
      ctx.fill();
      //ctx.stroke();  // 这里用stroke画一个空心圆，想填充颜色的童鞋可以用fill方法
    };
    function Ring(startAngle, endAngle, borderColor) {
      Circle.call(this, borderColor);
      this.startAngle = startAngle || 3 * Math.PI / 2; //弧起始角度   
      this.endAngle = endAngle || 3 * Math.PI / 2;
    }
    Ring.prototype = Object.create(Circle.prototype);
    Ring.prototype.drawRing = function (ctx, circleX, circleY, circleColor) {
      this.draw(ctx, circleColor, circleX, circleY);  // 调用Circle的draw方法画圈圈     // angle     
      ctx.beginPath();
      ctx.arc(circleX, circleY, this.radius, this.startAngle, this.endAngle, true); //这里的圆心坐标要和cirle的保持一致     
      ctx.strokeStyle = this.fillStyle;
      ctx.lineCap = this.lineCap;
      ctx.stroke();
      ctx.closePath();
    }
    function btn(ctx, circleX, circleY, circleColor, borderColor, lineColor, startAngle, endAngle, startX, startY, endX, endY) {
      var ring = new Ring(startAngle, endAngle, borderColor);  // 从2*Math.PI/3弧度开始，进度为50%的环  borderColor
      ring.drawRing(ctx, circleX, circleY, circleColor); //circleColor
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = lineColor;
      ctx.stroke();
      ctx.closePath();
    }
    var draw = function (ctx, x, y, width, height, radius, color, type, word, wordX, wordY) {
      ctx.beginPath();
      ctx.moveTo(x + 20, y);
      ctx.lineTo(x, y + height / 2);
      ctx.lineTo(x + 20, y + height);
      // ctx.moveTo(x, y+radius);
      // ctx.lineTo(x, y+height-radius);
      // ctx.quadraticCurveTo(x, y+height, x+radius, y+height);
      ctx.lineTo(x + width - radius, y + height);
      ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
      ctx.lineTo(x + width, y + radius);
      ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
      // ctx.lineTo(x+radius, y);
      // ctx.quadraticCurveTo(x, y, x, y+radius);
      ctx[type + 'Style'] = color;
      // ctx.fillStyle = "black";

      ctx.closePath();
      ctx[type]();
      ctx.strokeStyle = '#d9d9d9';
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.font = '15px 宋体';
      ctx.fillText(word, wordX, wordY);
      ctx.closePath();
    }
    var revdraw = function (ctx, x, y, width, height, radius, color, type, word, wordX, wordY) {
      ctx.beginPath();
      ctx.moveTo(x - 20, y);
      ctx.lineTo(x, y + height / 2);
      ctx.lineTo(x - 20, y + height);
      ctx.lineTo(x - width + radius, y + height);
      ctx.quadraticCurveTo(x - width, y + height, x - width, y + height - radius);
      ctx.lineTo(x - width, y + radius);
      ctx.quadraticCurveTo(x - width, y, x - width + radius, y);
      ctx[type + 'Style'] = color;
      ctx.closePath();
      ctx[type]();
      ctx.strokeStyle = '#d9d9d9';
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.font = '15px 宋体';
      ctx.fillText(word, wordX, wordY);
      ctx.closePath();
    }


    btn(ctx, 410, 145, "#ffcc00", '#4d4d4d', '#000', 3 * Math.PI / 2, 0.25 * Math.PI, 420, 143, 450, 120);
    draw(ctx, 450, 100, 130, 36, 5, '#ffcc00', 'fill', "人际交往能力", 475, 125);

    btn(ctx, 530, 205, "#ffcc00", '#4d4d4d', '#000', 3 * Math.PI / 2, 0.25 * Math.PI, 539, 203, 570, 180);
    draw(ctx, 570, 160, 100, 36, 5, '#ffcc00', 'fill', "学习能力", 595, 185);

    btn(ctx, 350, 435, "#ffcc00", '#4d4d4d', '#000', 0.5 * Math.PI, 1.25 * Math.PI, 340, 435, 325, 458);
    revdraw(ctx, 325, 440, 85, 36, 5, '#ffcc00', 'fill', "创造力", 255, 465);

    btn(ctx, 290, 220, "#eeeeee", '#d9d9d9', '#b6b6b6', 0.75 * Math.PI, 1.5 * Math.PI, 280, 220, 265, 197);
    revdraw(ctx, 265, 177, 100, 36, 5, '#eeeeee', 'fill', "工作态度", 180, 202);

    btn(ctx, 450, 305, "#eeeeee", '#d9d9d9', '#b6b6b6', 1.5 * Math.PI, 0.25 * Math.PI, 460, 303, 475, 280);
    draw(ctx, 475, 260, 100, 36, 5, '#eeeeee', 'fill', "技术技能", 500, 285);

    btn(ctx, 530, 425, "#eeeeee", '#d9d9d9', '#b6b6b6', 1.75 * Math.PI, 0.5 * Math.PI, 539, 425, 550, 448);
    draw(ctx, 550, 430, 85, 36, 5, '#eeeeee', 'fill', "执行力", 580, 455);
  }



}
