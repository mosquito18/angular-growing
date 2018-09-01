import { Directive, Input, ElementRef, HostListener, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appUpStyle]'
})
export class UpStyleDirective implements AfterViewInit {

  overwriteStyle: Object;
  nativeElement: HTMLElement;

  @Input('appUpStyle')
  set appUpStyle(value: Object) {
    this.overwriteStyle = value;
  }
  constructor(
    private _elementRef: ElementRef,
    private _render: Renderer2
  ) {
    this.nativeElement = this._elementRef.nativeElement;
  }
  ngAfterViewInit() {
    const o_styles = this.overwriteStyle['style'];
    const o_styles_keys = Object.keys(this.overwriteStyle['style']);
    let __elementRef;
    if (this.overwriteStyle['element']) {
      if (this.overwriteStyle['element'] === 'self') {
        __elementRef = this.nativeElement;
      } else {
        __elementRef = this.nativeElement.getElementsByTagName(this.overwriteStyle['element'])[0];
      }
    } else {
      __elementRef = this.nativeElement;
    }
    if (__elementRef) {
      o_styles_keys.forEach(item => {
        this._render.setStyle(__elementRef, item, o_styles[item]);
      });
    }
  }
}