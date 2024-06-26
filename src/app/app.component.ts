import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  $destroy: Subject<void> = new Subject();
  isPlayerPage: boolean = false
  isGamePage: boolean = false

  constructor(private _broadcatser: BroadcasterService,private router: Router) {
    // app component broadasting
    this._broadcatser.broadcast('mykey', 'myvalue');
    //set dummy token just to enable auth guard for after-login module
    localStorage.setItem('token', 'dummy');

    /**
     * do this in other page, for e.g I'm doing here only
     * use this service with takeUntil from rxJS and local Subject to prevent memory leaks like shown
     */
    this._broadcatser
      .listen('mykey')
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => console.log(data), // your broadcasted value
      });

      this.router.events.subscribe(() => {
        switch(this.getLastPathSegment(this.router.url.toString())){
          case 'player' : {
            this.isPlayerPage = true
            this.isGamePage = false
            break
          }
          case 'game' : {
            this.isGamePage = true
            this.isPlayerPage = false
            break
          }
        }
      })
  }

  getLastPathSegment(url: string): string {
    const segments = url.split('/');
    return segments[segments.length - 1];
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
