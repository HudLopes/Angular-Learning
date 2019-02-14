import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule],
})
export class MaterialModule { }