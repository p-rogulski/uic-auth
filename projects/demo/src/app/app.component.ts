import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissinionService } from 'uic-auth';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public canShowNextStepsSection$: Observable<boolean>;
  public canReadCliDocumentationLink$: Observable<boolean>;

  public readonly title: string = 'demo';

  constructor(
    private appService: AppService,
    private permissionService: PermissinionService
  ) {}

  public ngOnInit(): void {
    this.appService.appDataInit();

    this.canShowNextStepsSection$ = this.permissionService
      .checkIfPermission('NEXT_STEPS_SECTION')
      .exits();

    this.canReadCliDocumentationLink$ = this.permissionService
      .checkIfPermission('RESOURCES')
      .for('CLI_DOCUMENTATION_LINK')
      .withAccessType(['read'])
      .exits();
  }
}
