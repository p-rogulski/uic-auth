import { TestBed, waitForAsync } from '@angular/core/testing';

import { PermissinionService } from 'uic-auth';

describe('PermissionService', () => {
  let permissionService: PermissinionService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [PermissinionService],
    });

    permissionService = TestBed.inject(PermissinionService);
  }));

  it('should create instance', () => {
    expect(permissionService).toBeDefined();
  });
});
