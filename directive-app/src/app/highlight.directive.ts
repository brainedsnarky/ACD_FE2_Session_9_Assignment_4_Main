import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[my-Highlight]'
})
export class HighlightDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.background='blue';
   }

}
