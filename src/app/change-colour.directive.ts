import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColour]'
})
export class ChangeColourDirective {

  constructor(private eleRef: ElementRef) {
      eleRef.nativeElement.style.background = 'red';
   }

}
