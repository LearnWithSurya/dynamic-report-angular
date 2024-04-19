import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchRequest } from './search-request';
import { SearchResponse } from './search-response';
@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private baseUrl:string="http://localhost:8085";

  constructor(private httpClient:HttpClient) {
  
   }
   getPlanNames() : Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/plan-names`);
  }
  getPlanStatus() : Observable<any>{
    return this.httpClient.get<any>("http://localhost:8085/plan-status");
  }
  search(request: SearchRequest) :Observable<SearchResponse[]>{
    return this.httpClient.post<SearchResponse[]>("http://localhost:8085/plans",request);
  }
  getExcel(){
    return this.httpClient.get<any>("http://localhost:8085/excel",{responseType:'arraybuffer' as 'json'});
  }
  getPdf(){
    return this.httpClient.get<any>("http://localhost:8085/pdf",{responseType:'arraybuffer' as 'json'});
  }
}
