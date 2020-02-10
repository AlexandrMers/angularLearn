import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: "[appBackground]"
})
export class BackgoundDirective implements  OnInit {


  @HostBinding('style.backgroundColor') background: string;
  constructor(
    private element: ElementRef, // здесь мы определяем элемент, на который вешаем директиву.
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'blue');
}

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) { // Таким образом можно прослушивать события на элементе, на который вешаем данную директиву.
    this.background = 'red';
  };

  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    this.background = 'blue';
  };
}
