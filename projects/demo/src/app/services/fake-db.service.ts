import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Permission } from 'uic-auth';

const permissions: Permission[] = [
  {
    name: 'NEXT_STEPS_SECTION',
  },
  {
    name: 'RESOURCES',
    subjects:[{
      name:'CLI_DOCUMENTATION_LINK',
      accessType:['read']
    }]
  },
];

@Injectable()
export class FakeApiService {
  public getPermissions(): Observable<Permission[]> {
    return of(permissions);
  }
}
