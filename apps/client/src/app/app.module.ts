import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@hn/core-data';
import { CoreStateModule } from '@hn/core-state';
import { MaterialModule } from '@hn/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing.module';
import { StoryListComponent } from './story-list/story-list.component';
import { TestingModule, testingRoutes } from '@hn/testing';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    TestingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StoryListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
