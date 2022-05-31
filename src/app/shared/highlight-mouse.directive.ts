import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  /* HostListener
  @HostListener('mouseenter') onMouseOver() {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );
  }
  */



  // HostBinding
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }


  // Primeira maneira
  @HostBinding('style.backgroundColor') backgroundColor: string  = '';
  

  /* Segunda maneira
  private backgroundColor?: string;

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  */
  

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2
  ) { }

}
