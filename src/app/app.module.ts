import { TitleCase } from './title-case.pipe';
import { AuthorsService } from './authors.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { TitleCaseComponent } from './title-case/title-case.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteIconComponent,
    TitleCaseComponent,
    TitleCase
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
