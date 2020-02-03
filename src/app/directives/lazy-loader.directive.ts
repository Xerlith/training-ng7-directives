import { AfterViewInit, Directive, HostBinding, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyLoader]'
})
export class LazyLoaderDirective implements AfterViewInit {

  observer: IntersectionObserver;

  @Input() smallSrc: string;
  @Input() fullSrc: string;
  @Input() distance = 200;

  @HostBinding('src') imageSource: string;
  @HostBinding('class') class = 'unloaded';

  constructor(private imgElement: ElementRef) {}

  ngAfterViewInit(): void {
    this.viewportChecker();
  }

  viewportChecker(): void {
    const options = {
      rootMargin: this.distance + 'px'
    };

    this.observer = new IntersectionObserver((entries: Array<IntersectionObserverEntry>) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.target.isSameNode(this.imgElement.nativeElement) && entry.isIntersecting) {
          this.imageSource = this.fullSrc;
          this.class = 'loaded';
          this.observer.unobserve(this.imgElement.nativeElement);
        }
      });
    }, options);

    this.observer.observe(this.imgElement.nativeElement);
  }
}
