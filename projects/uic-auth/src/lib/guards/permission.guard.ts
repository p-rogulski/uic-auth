import { inject, InjectionToken } from '@angular/core';
import { CanActivate } from '@angular/router';

import { PermissinionService } from '../services/permission/permission.service';

const TOKEN_DESC = 'PermissionGuard';
export class PermissinionGuard {
  public static checkPermission(name: string): InjectionToken<CanActivate> {
    const permissinionService: PermissinionService =
      inject(PermissinionService);

    return new InjectionToken<CanActivate>(TOKEN_DESC, {
      factory: () => ({
        canActivate: () => permissinionService.checkIfPermission(name).exits(),
      }),
    });
  }
}
