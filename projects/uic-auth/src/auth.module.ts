import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PermissinionService } from 'uic-auth';

@NgModule({
  imports: [CommonModule],
  providers: [PermissinionService],
})
export class AuthModule {}
