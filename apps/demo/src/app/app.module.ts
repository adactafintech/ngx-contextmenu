import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuModule } from '@perfectmemory/ngx-contextmenu';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContextMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
