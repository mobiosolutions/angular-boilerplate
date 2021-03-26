import { Component, OnInit ,OnDestroy,ViewChild,ElementRef} from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Account } from '../../../shared/models';
import { AccountService} from '../../../shared/services';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  //current logdinuser
  account = this.accountService.accountValue;
  registerAccount:any=[];
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  constructor(private accountService:AccountService) { }
  ngOnInit() {
    this.accountService.getAll().subscribe(res =>{
      this.registerAccount = res;
    });
  }
  
  public downloadAsPDF() {
    const doc = new jsPDF("p", "mm", "a0");
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const pdfTable = this.pdfTable.nativeElement;

    doc.html(pdfTable, {
           callback: (doc) => {
            //  doc.output("dataurlnewwindow");
             doc.save('tableToPdf.pdf');
           }
        });

   
  }
  }

