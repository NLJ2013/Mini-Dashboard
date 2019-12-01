import { NgModule } from '@angular/core';
import { MatButtonModule,MatToolbarModule, MatTableModule,MatListModule } from '@angular/material';
import { TextFieldModule } from '@angular/cdk/text-field';


const MaterialComponents = [
  MatButtonModule,MatToolbarModule,MatTableModule,TextFieldModule,MatListModule
];

@NgModule({
  imports: [ MaterialComponents 
  ],
  exports: [ MaterialComponents

  ]
})
export class MaterialModule { }
