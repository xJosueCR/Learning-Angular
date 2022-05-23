import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.cvRef.createEmbeddedView(this.templateRef)
    } else {
      this.cvRef.clear()
    }
  }
  constructor(private templateRef: TemplateRef<any>, private cvRef: ViewContainerRef) {

   }

}
