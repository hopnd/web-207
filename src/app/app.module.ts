import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BannerComponent} from './banner/banner.component';
import {NewsComponent} from './news/news.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { CtvComponent } from './ctv/ctv.component';
import { ProductComponent } from './product/product.component';
import { VtcComponent } from './vtc/vtc.component';

@NgModule({
    declarations: [
        AppComponent,
        BannerComponent,
        NewsComponent,
        HeaderComponent,
        FooterComponent,
        CtvComponent,
        ProductComponent,
        VtcComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
