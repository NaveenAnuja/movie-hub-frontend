import { Routes } from '@angular/router';
import { PopularMovieComponent } from './pages/popular-movie/popular-movie.component';
import { ThrillerMovieComponent } from './pages/thriller-movie/thriller-movie.component';
import { DramaMovieComponent } from './pages/drama-movie/drama-movie.component';
import { KidsMovieComponent } from './pages/kids-movie/kids-movie.component';
import { RomanceMovieComponent } from './pages/romance-movie/romance-movie.component';
import { HorrorMovieComponent } from './pages/horror-movie/horror-movie.component';
import { SearchMovieComponent } from './pages/search-movie/search-movie.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SuggetionsComponent } from './pages/suggetions/suggetions.component';
import { MainPageComponent } from './admin/main-page/main-page.component';
import { MovieComponent } from './admin/movie/movie.component';
import { UsersComponent } from './admin/users/users.component';
import { SuggetionComponent } from './admin/suggetion/suggetion.component';
import { EditformComponent } from './pages/editform/editform.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"popular",
        component:PopularMovieComponent
    },
    {
        path:"thriller",
        component:ThrillerMovieComponent
    },
    {
        path:"drama",
        component:DramaMovieComponent
    },
    {
        path:"kids",
        component:KidsMovieComponent
    },
    {
        path:"romance",
        component:RomanceMovieComponent
    },
    {
        path:"horror",
        component:HorrorMovieComponent
    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"back",
        component:PopularMovieComponent
    },
    {
        path:"search",
        component:SearchMovieComponent
    },
    {
        path:"suggetions",
        component:SuggetionsComponent
    },
    {
        path:"admin",
        component:MainPageComponent
    },
    {
        path:"movie",
        component:MovieComponent
    },
    {
        path:"users",
        component:UsersComponent
    },
    {
        path:"suggetion",
        component:SuggetionComponent
    },
    {
        path:"edit",
        component:EditformComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];
