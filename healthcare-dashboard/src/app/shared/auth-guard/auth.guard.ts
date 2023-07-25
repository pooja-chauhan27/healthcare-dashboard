import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CommonService } from '../services/common.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  return false;
};
