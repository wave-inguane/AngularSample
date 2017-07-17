import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' // used for data biding

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  /* place all components here
   * use command:
   * ng g component dirName/entityName
   */
  declarations: [
    AppComponent,
    UserComponent,
  ],
  // place all modules here
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
