import {Directive, ElementRef, Host, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
// дерективы могу работать только с OnInit or OnDestroy
export class BackgroundDirective implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  @Input() hoverColor: string = 'green';
  // tslint:disable-next-line:no-inferrable-types
  @Input() defaultColor: string = 'transparent';

  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.background = this.defaultColor;
    // console.log(this.element);
    // этот подход не очень правильный, у нас не всегда есть доступ к DOM дереву
    // this.element.nativeElement.style.backgroundColor = 'red';

    // const {nativeElement} = this.element;
    // этот подход лучше всего
    // this.renderer.setStyle(nativeElement, 'background-color', 'blue');
    // this.renderer.addClass(nativeElement, 'white-text');
  }

  // пример получения event
  // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
  //   console.log(event);
  // }

  // наведение мышки на элемент
  // @HostListener('mouseenter') mouseEnter() {
  //   const {nativeElement} = this.element;
  //   this.renderer.setStyle(nativeElement, 'background-color', 'red');
  //   this.renderer.addClass(nativeElement, 'white-text');
  // }

  // убрать мышку с элемента
  // @HostListener('mouseleave') mouseLeave() {
  //   const {nativeElement} = this.element;
  //   this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
  //   this.renderer.removeClass(nativeElement, 'white-text');
  // }

  // более короткий вариант
  @HostListener('mouseenter') mouseEnter() {
      // this.background = 'red';
      this.background = this.hoverColor;
    }

  // убрать мышку с элемента
  @HostListener('mouseleave') mouseLeave() {
    // this.background = 'transparent';
    this.background = this.defaultColor;
  }
}
