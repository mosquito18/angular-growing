import { Directive, ElementRef, Input, HostListener ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appVedioHover]'
})
export class VedioHoverDirective {

  constructor(private el: ElementRef,private _render: Renderer2) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    // this._render.setStyle(this.el.nativeElement.getElementsByClassName("vedio_time"), 'display', 'none');
    // this._render.setStyle(this.el.nativeElement.getElementsByClassName("vedio_pause"), 'display', 'block');
    
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    // this.el.nativeElement.getElementsByClassName("vedio_time").style.display='block';
    // this.el.nativeElement.getElementsByClassName("vedio_pause").style.display='none';
  }


}
