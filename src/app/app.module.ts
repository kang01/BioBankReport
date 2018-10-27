import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsComponent } from './echarts/echarts.component';

@NgModule({
  declarations: [
    AppComponent,
    EchartsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    NgxEchartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
