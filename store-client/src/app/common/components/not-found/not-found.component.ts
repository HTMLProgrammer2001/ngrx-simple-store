import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  public url: string;

  constructor(private router: Router) {
    this.url = this.router.parseUrl(this.router.url).toString();
  }
}
