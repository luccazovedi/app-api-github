import { NgModule } from '@angular/core';
import { ReposSearchComponent } from './github-search/github-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersSearchComponent } from './users-search/users-search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ReposSearchComponent,
    NavbarComponent,
    FooterComponent,
    UsersSearchComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxPaginationModule],
  providers: [],
  bootstrap: [
    NavbarComponent,
    FooterComponent,
    UsersSearchComponent,
    ReposSearchComponent,
  ],
})
export class AppModule {}
