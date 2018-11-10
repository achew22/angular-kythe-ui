import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { KytheService } from '@angular-kythe-ui/kythe';

@Component({
  selector: 'lib-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  rootDirs$ = this.kytheService.corpusRoots();

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly kytheService: KytheService
  ) {}

  ngOnInit() {}
}