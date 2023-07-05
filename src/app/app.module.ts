import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FilterComponent } from './filter/filter.component';
// import { InspirationorderComponent } from './inspirationorder/inspirationorder.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MyfavsComponent } from './myfavs/myfavs.component';
import { CartComponent } from './cart/cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipelistComponent,
    RecipedetailComponent,
    SearchbarComponent,
    FilterComponent,
    // InspirationorderComponent,
    MyfavsComponent,
    CartComponent,
    SignupComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
      FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
