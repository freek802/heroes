import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [Error404PageComponent, ConfirmDialogComponent],
  exports: [Error404PageComponent, ConfirmDialogComponent],
  imports: [MaterialModule],
})
export class SharedModule {}
