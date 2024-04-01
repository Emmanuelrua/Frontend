import { Routes } from '@angular/router';
import { ForoComponent } from './Vistas/foro/foro.component';
import { RegisterComponent } from './Vistas/register/register.component';
import { HomeComponent } from './Vistas/home/home.component';
import { HeaderComponent } from './HeaderAndFooter/header/header.component';


export const routes: Routes =  [
    {path : '' , redirectTo: 'Home', pathMatch : 'full'},
    {path : 'Home', component:HomeComponent},
    {path : 'foro', component:ForoComponent},
    {path : 'Register', component:RegisterComponent},
    {path : 'header', component:HeaderComponent}
];
