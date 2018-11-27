import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
// дерективы могу работать только с OnInit or OnDestroy
export class BackgroundDirective implements OnInit {
  ngOnInit(): void {
    console.log(this.element);
    this.element.nativeElement.style.backgroundColor = 'red';
  }
  constructor(private element: ElementRef) {}
}
