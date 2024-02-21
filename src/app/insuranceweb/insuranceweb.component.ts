import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,FormBuilder } from '@angular/forms';
import { InsuranceService } from '../insurance.service';
import { SearchRequest } from '../search-request';
import { SearchResponse } from '../search-response';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-insuranceweb',
  templateUrl: './insuranceweb.component.html',
  styleUrls: ['./insuranceweb.component.css']
})
export class InsurancewebComponent implements OnInit{
    constructor(private insuranceservice : InsuranceService){}
        public planName:string[] | undefined;
        public planStatus:any;
        public planNameField:string | undefined;
        public planStatusField:string | undefined;
        
        public selectPlan="select";
        public selectStatus="select";

        searchRequest:SearchRequest=new SearchRequest();
        searchResponse:SearchResponse[]=[];

        ngOnInit(): void {
             this.getPlanNames();
             this.getPlanStatus();
        }
       getPlanNames(){
        this.insuranceservice.getPlanNames().subscribe(data=>{
          this.planName=data;
       });
       }
       //unique planstatus dropdown
       getPlanStatus(){
        this.insuranceservice.getPlanStatus().subscribe(data=>{
          this.planStatus=data;
       });
      }

      search(){
        this.searchRequest.planName=this.selectPlan;
        this.searchRequest.planStatus=this.selectStatus;
        this.insuranceservice.search(this.searchRequest).subscribe(data=>{
          this.searchResponse=data;
        });
      }
      
      onSubmit(){
        this.search();
      }
    
  exportToExcel() {
    this.insuranceservice.getExcel().subscribe(data => {
      let file = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

  exportToPdf() {
    this.insuranceservice.getPdf().subscribe(data => {
      let file = new Blob([data], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });

  }
      
 
}
