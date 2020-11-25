import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElectronicsModel } from '../model/electroModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectroService {

  apiUrl =environment.BASE_API_URL + "/electronics";
  // inject HttpClient:
  constructor(private http: HttpClient) { }

  createData(posts) :Observable<ElectronicsModel>{
    return this.http.post<ElectronicsModel>(this.apiUrl, posts);
  }

  getData() :Observable<ElectronicsModel[]>{
    return this.http.get<ElectronicsModel[]>(this.apiUrl);
  }

  getSingleData(id) :Observable<ElectronicsModel>{
    return this.http.get<ElectronicsModel>(this.apiUrl + "/" +id);
  }

  updateData(posts) :Observable<ElectronicsModel>{
    return this.http.put<ElectronicsModel>(this.apiUrl + "/" +posts._id, posts);
  }

  deleteData(posts) :Observable<ElectronicsModel>{
    return this.http.delete<ElectronicsModel>(this.apiUrl + "/" +posts._id);
  }
}
