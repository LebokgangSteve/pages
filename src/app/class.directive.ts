import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  //@Input() backgroundColor: string = '';
  constructor(private element: ElementRef) {
    //Never do still
    // setTimeout(() => {
    //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // }, 50);
  }
  @Input('appClass') set classNames(classObj: any) {
   for(let key in classObj){
    if(classObj[key]){
    this.element.nativeElement.classList.add(key);
   }else{
    this.element.nativeElement.classList.remove(key)
   }
  
  }
}
}
