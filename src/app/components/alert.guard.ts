import { CanDeactivateFn } from '@angular/router';
import { QuitComponent } from './quit/quit.component';
import { Subject } from 'rxjs';

export const alertGuard: CanDeactivateFn<QuitComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  let res = new Subject<boolean>();
  component.openModal();
  res = component.response;
  return res.asObservable();
};
