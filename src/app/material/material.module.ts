/**
 * 20191201 init
 */
import { NgModule } from '@angular/core';
import { MatButtonModule,MatToolbarModule, MatTableModule,MatListModule, MatSortModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { TextFieldModule } from '@angular/cdk/text-field';



const MaterialComponents = [
  MatButtonModule,MatToolbarModule,MatTableModule,TextFieldModule,MatListModule,MatSortModule,MatFormFieldModule,MatInputModule
];

@NgModule({
  imports: [ MaterialComponents 
  ],
  exports: [ MaterialComponents

  ]
})
export class MaterialModule { }
