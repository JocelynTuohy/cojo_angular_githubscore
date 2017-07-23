import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScoreMessagePipe } from './score-message.pipe';
import { ScoreColorPipe } from './score-color.pipe';
import { FetchUserService } from './fetch-user.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreMessagePipe,
    ScoreColorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FetchUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
