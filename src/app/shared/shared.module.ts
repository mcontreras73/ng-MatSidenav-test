import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
  MatDialogModule
} from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule
  ]
})
export class SharedModule {}
