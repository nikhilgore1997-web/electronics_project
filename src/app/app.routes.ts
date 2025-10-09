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

// Other pages
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { StoresComponent } from './pages/stores/stores.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { OutletComponent } from './pages/outlet/outlet.component';
import { CartComponent } from './pages/cart/cart.component';
import { DeliveryReturnsComponent } from './pages/delivery-returns/delivery-returns.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CareersComponent } from './pages/careers/careers.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected routes
  { path: 'home', component: HomeComponent, canActivate: [userGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },
  { path: 'contacts', component: ContactsComponent, canActivate: [userGuard] },

  // Public routes
  { path: 'promotions', component: PromotionsComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'outlet', component: OutletComponent },
  { path: 'cart', component: CartComponent },
  { path: 'delivery-returns', component: DeliveryReturnsComponent },

 // ✅ Category routes
  { path: 'categories/smartphones', component: SmartphonesComponent, canActivate: [userGuard] },
  { path: 'categories/laptops', component: LaptopsComponent, canActivate: [userGuard] },
  { path: 'categories/computer-office', component: ComputerOfficeComponent, canActivate: [userGuard] },
  { path: 'categories/games-entertainment', component: GamesComponent, canActivate: [userGuard] },
  { path: 'categories/hardware', component: HardwareComponent, canActivate: [userGuard] },
  { path: 'categories/tv', component: TvComponent, canActivate: [userGuard] },
  { path: 'categories/photo-video', component: PhotoVideoComponent, canActivate: [userGuard] },
  { path: 'categories/home-appliance', component: HomeApplianceComponent, canActivate: [userGuard] },

  // ✅ Footer pages
  { path: 'about-us', component: AboutUsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'payment-methods', component: PaymentMethodsComponent },
  { path: 'faq', component: FaqComponent },

  // Catch-all redirect
  { path: '**', redirectTo: '/login' }
];