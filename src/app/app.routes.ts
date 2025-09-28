import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Category components
import { SmartphonesComponent } from './pages/categories/smartphones/smartphones.component';
import { LaptopsComponent } from './pages/categories/laptops/laptops.component';
import { ComputerOfficeComponent } from './pages/categories/computer-office/computer-office.component';
import { GamesComponent } from './pages/categories/games/games.component';
import { HardwareComponent } from './pages/categories/hardware/hardware.component';
import { TvComponent } from './pages/categories/tv/tv.component';
import { PhotoVideoComponent } from './pages/categories/photo/photo.component';
import { HomeApplianceComponent } from './pages/categories/home-appliance/home-appliance.component';

// Guards
import { adminGuard } from './guards/admin.guard';
import { userGuard } from './guards/user.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [userGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },

  // ✅ category routes
  { path: 'categories/smartphones', component: SmartphonesComponent, canActivate: [userGuard] },
  { path: 'categories/laptops', component: LaptopsComponent, canActivate: [userGuard] },
  { path: 'categories/computer-office', component: ComputerOfficeComponent, canActivate: [userGuard] },
  { path: 'categories/games-entertainment', component: GamesComponent, canActivate: [userGuard] },
  { path: 'categories/hardware', component: HardwareComponent, canActivate: [userGuard] },
  { path: 'categories/tv', component: TvComponent, canActivate: [userGuard] },
  { path: 'categories/photo-video', component: PhotoVideoComponent, canActivate: [userGuard] },
  { path: 'categories/home-appliance', component: HomeApplianceComponent, canActivate: [userGuard] },

  { path: '**', redirectTo: '/login' }
];
