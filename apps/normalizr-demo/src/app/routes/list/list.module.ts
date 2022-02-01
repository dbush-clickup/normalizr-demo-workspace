import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: ListComponent
    }])
  ]
})
export class ListModule { }
