import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
// дерективы могу работать только с OnInit or OnDestroy
export class BackgroundDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // console.log(this.element);
    // этот подход не очень правильный, у нас не всегда есть доступ к DOM дереву
    // this.element.nativeElement.style.backgroundColor = 'red';

    const {nativeElement} = this.element;
    // этот подход лучше всего
    this.renderer.setStyle(nativeElement, 'background-color', 'blue');
    this.renderer.addClass(nativeElement, 'white-text');
  }
}
