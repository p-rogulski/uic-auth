import { Injectable } from '@angular/core';
import { take } from 'rxjs';

import { PermissinionService, Permission } from 'uic-auth';

import { FakeApiService } from './services/fake-db.service';

@Injectable()
export class AppService {
  constructor(
    private fakeApiService: FakeApiService,
    private permissionService: PermissinionService
  ) {}

  public appDataInit(): void {
    this.fakeApiService
      .getPermissions()
      .pipe(take(1))
      .subscribe((permissions: Permission[]) => {
        this.permissionService.setPermissions(permissions);
      });
  }
}
