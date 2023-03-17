import { Directive, Input, OnInit } from '@angular/core';

@Directive({ selector: 'uicPermission' })
export class PermissionDirective implements OnInit {
  @Input('uicPermission') public permission: string;

  public ngOnInit(): void {
    this.applyPermission();
  }

  private applyPermission(): void {
    // TODO: Implementation
  }
}
