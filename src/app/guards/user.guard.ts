import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const nombre = route.paramMap.get('nombre');
    if (nombre) {
      this.userService.getUserByName(nombre).subscribe((user) => {
        if (!user) {
          console.log('El usuario no existe');
          this.router.navigate(['/users']);
          //return false;
        }
      });
    }
    return true;
  }
}
