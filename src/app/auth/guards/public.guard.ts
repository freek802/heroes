import { Injectable, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router, UrlTree } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {}

const isAuthenticated = ():
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication().pipe(
    take(1),
    tap((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        router.navigate(['./']);
      }
    }),
    map((isAuthenticated) => !isAuthenticated)
  );
};

export const canActivateGuardPublic: CanActivateFn = isAuthenticated;
export const canMatchGuardPublic: CanMatchFn = isAuthenticated;
