import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { CardUserComponent } from './card-user/card-user.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { FormsModule } from '@angular/forms';
import { AddCompComponent } from './add-comp/add-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    FormComponent,
    CardUserComponent,
    ClientComponent,
    AddCompComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true,
  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
