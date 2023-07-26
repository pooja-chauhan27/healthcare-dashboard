import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  if ( isLoggedIn == 'false') {
    router.navigate(['login']);
    return false;
  }
  return true;
};
