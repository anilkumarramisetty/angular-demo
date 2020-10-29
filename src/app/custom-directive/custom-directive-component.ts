import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
selector:'[appCustomDirective]'
})

export class CustomDirective implements OnInit {
constructor(private customele:ElementRef){

}
    ngOnInit(): void {
        this.customele.nativeElement.style.backgroundColor='yellow';
    }


}