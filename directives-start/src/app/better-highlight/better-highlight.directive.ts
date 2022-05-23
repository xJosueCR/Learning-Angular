import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostListener('mouseenter') mouseOver(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue') //set styles of elements
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent') //set styles of elements
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { //dependency injection
    // why use renderer?
    // better practice to access to DOM 
   }

  ngOnInit(): void {
      // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue') //set styles of elements
  }
}
