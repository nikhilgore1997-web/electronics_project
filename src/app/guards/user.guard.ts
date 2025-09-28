import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const userGuard: CanActivateFn = () => {
  const router = inject(Router);
  const role = localStorage.getItem('role');

  if (role === 'user') {
    return true; // allow access
  } else {
    router.navigate(['/login']); // redirect to login if not user
    return false;
  }
};
