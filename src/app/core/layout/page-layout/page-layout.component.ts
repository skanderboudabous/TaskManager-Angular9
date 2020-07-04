import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit  {

  public user: User;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private authService:AuthService) {}
  ngOnInit(): void {
    this.authService.user.subscribe((user)=>{
      console.log("aaa");
      
      this.user=user;
    })
  }

}
