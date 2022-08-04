import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef) { 
    console.log("Directive used");
    this.element.nativeElement.style.backgroundColor = 'orange';
    this.element.nativeElement.style.color = 'green';
  }

}
