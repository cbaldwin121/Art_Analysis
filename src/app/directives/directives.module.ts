import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HidePartHeaderDirective } from './hide-part-header.directive';


@NgModule({
    declarations: [
        HidePartHeaderDirective,
    ],
    imports: [CommonModule, IonicModule],
    exports: [
        HidePartHeaderDirective,
    ]
})
export class DirectivesModule {}
