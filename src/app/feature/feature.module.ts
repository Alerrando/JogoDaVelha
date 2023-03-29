import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbRatingModule,
    NgIf,
  ],
  
  exports: [
    StarRatingComponent,
  ]
})
export class FeatureModule { }
