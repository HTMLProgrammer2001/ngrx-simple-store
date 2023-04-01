import {Component} from '@angular/core';
import {HeaderFacadeService} from './header.facade.service';
import {ReplaySubject, takeUntil} from 'rxjs';
import {CartTotalData} from '../../../state/features/cart/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public data: CartTotalData = {
    totalPrice: 0,
    totalCount: 0
  };
  private onDestroy = new ReplaySubject(1);

  constructor(private headerFacadeService: HeaderFacadeService) {
    this.headerFacadeService.getHeaderData()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(data => this.data = data);
  }
}
