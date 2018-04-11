import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatCheckboxModule,
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
    MatMenuModule,
    MatCheckboxModule,
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
    MatMenuModule,
    MatCheckboxModule,
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
