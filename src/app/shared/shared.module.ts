import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownDirective} from './markdown/markdown.directive';
import {CashmereModule} from './cashmere.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppSwitcherServiceModule} from './app-switcher-service.module';

@NgModule({
    imports: [CommonModule, AppSwitcherServiceModule],
    declarations: [MarkdownDirective],
    exports: [MarkdownDirective, CommonModule, CashmereModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
