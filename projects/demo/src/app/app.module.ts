import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from 'projects/uic-auth/src/auth.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FakeApiService } from './services/fake-db.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule
  ],
  providers: [FakeApiService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
