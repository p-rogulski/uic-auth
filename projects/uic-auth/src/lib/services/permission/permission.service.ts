import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable } from 'rxjs';

export type PermissionAccessType = 'create' | 'read' | 'update' | 'delete';

export interface Permission {
  name: string;
  subjects?: Array<Permission>;
  accessType?: Array<PermissionAccessType>;
}

@Injectable()
export class PermissinionService {
  private _permissions$: Observable<Array<Permission>>;
  private _permissionsEmitter$: BehaviorSubject<Array<Permission>> = new BehaviorSubject<Array<Permission>>([]);
  private _currentPermission$: Observable<Permission | undefined>;

  constructor() {
    this._permissions$ = this._permissionsEmitter$.asObservable();
  }

  public setPermissions(permissions: Array<Permission>): void {
    this._permissionsEmitter$.next(permissions);
  }

  public checkIfPermission(
    name: string,
    accessType?: PermissionAccessType[]
  ): this {
    this._currentPermission$ = this._permissions$.pipe(
      map((permissions: Permission[]) => {
        const permission: Permission | undefined = permissions.find(
          (permission: Permission) => permission.name === name
        );

        if (permission && accessType) {
          return this.checkAccessType(accessType, permission)
            ? permission
            : undefined;
        }

        return permission;
      })
    );

    return this;
  }

  public for(subjectName: string): this {
    this._currentPermission$ = this._currentPermission$.pipe(
      map((permission: Permission | undefined) =>
        permission
          ? permission.subjects?.find(
              (subject: Permission) => subject.name === subjectName
            )
          : undefined
      )
    );

    return this;
  }

  public withAccessType(accessType: PermissionAccessType[]): this {
    this._currentPermission$ = this._currentPermission$.pipe(
      map((permission: Permission | undefined) => {
        if (permission) {
          return this.checkAccessType(accessType, permission)
            ? permission
            : undefined;
        }

        return undefined;
      })
    );

    return this;
  }

  public exits(): Observable<boolean> {
    return this._currentPermission$.pipe(map(Boolean));
  }

  private checkAccessType(
    accessType: PermissionAccessType[],
    permission: Permission
  ): boolean {
    return accessType.every((accessType: PermissionAccessType) =>
      permission.accessType?.includes(accessType)
    );
  }
}
