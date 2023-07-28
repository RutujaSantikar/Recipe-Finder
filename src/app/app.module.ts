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
import {MatToolbarModule} from '@angular/material/toolbar';
import { MyfavsComponent } from './myfavs/myfavs.component';
import { CartComponent } from './cart/cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './auth/signup.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './services/recipes.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FavoritesService } from './services/favorites.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipelistComponent,
    RecipedetailComponent,
    SearchbarComponent,
    FilterComponent,
    MyfavsComponent,
    CartComponent,
    SignupComponent,
    LoadingSpinnerComponent,
    
  
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
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
      

  ],
  providers: [RecipeService,FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
