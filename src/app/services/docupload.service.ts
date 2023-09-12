import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class documentUploadService {
  private baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }

  uploadDoc(docs: any) {
    return this.http.post(this.baseUrl + 'SupportingDocument/AddDocument', docs);
  }
  editDoc(docs: any) {
    return this.http.put(this.baseUrl + 'SupportingDocument/UpdateDocument', docs);
  }

  updateDoc(docs: any) {
    return this.http.put(this.baseUrl + 'SupportingDocument/UpdateDocument', docs);
  }

  GetDocumentsById(Id: string, Name:string): Observable<any> {
    try{
      return this.http.get(this.baseUrl + "SupportingDocument/GetDocumentById/"+ Id +'/'+ Name, { responseType: 'blob' }); //,  { responseType: 'blob' }
    }
    catch (error) {
      throw error;
    }
  }



}
