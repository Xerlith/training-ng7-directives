import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ImageGetterService } from './services/image-getter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  images$: Observable<Object>;

  constructor(private imageGetter: ImageGetterService) {}

  ngOnInit(): void {
    this.images$ = this.imageGetter.getImageJson();
  }

}
