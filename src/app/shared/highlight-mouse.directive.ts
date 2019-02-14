import { Directive, HostListener, ElementRef, Renderer
, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'yellow';  
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor() { }

}
