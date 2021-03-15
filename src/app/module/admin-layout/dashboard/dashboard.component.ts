import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Account } from '../../../shared/models';
import { AccountService} from '../../../shared/services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  //current logdinuser
  account = this.accountService.accountValue;
  registerAccount:any=[];
  constructor(private accountService:AccountService) { }
  ngOnInit() {
    this.accountService.getAll().subscribe(res =>{
      this.registerAccount = res;
    });

  }



}
