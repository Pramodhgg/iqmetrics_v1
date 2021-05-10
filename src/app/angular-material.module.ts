import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
    imports: [
        MatInputModule,
        MatDialogModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatExpansionModule
    ],
    exports: [
        MatInputModule,
        MatDialogModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatExpansionModule
    ]
})
export class AngularMaterialModule {

}
