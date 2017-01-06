import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
/*
This is from development branch
*/
@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
    ],
})
export class AppModule {
    ngDoBootstrap() {}
}
