import {
  Directive, ElementRef, HostBinding, HostListener, Input, OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appSimilarBasicHighlight]'
})


export class SimilarBasicHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'pink'
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseOver(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue') //set styles of elements
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent') //set styles of elements
    this.backgroundColor = this.defaultColor
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { //dependency injection
    // why use renderer?
    // better practice to access to DOM 
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue') //set styles of elements
    this.backgroundColor = this.defaultColor
  }
}
