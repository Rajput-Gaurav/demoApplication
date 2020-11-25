import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../model/postModel';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  // inject HttpClient:
  constructor(private http: HttpClient) { }

  // insert data:
  createData(posts){
    return this.http.post("http://localhost:3000/posts", posts);
  }

  // fetch data:
  getAllData(){
    return this.http.get("http://localhost:3000/posts");
  }

  // update data:
  updateData(posts){
    return this.http.put("http://localhost:3000/posts/" + posts._id, posts);
  }

  // delete data:
  deleteData(posts){
    return this.http.delete("http://localhost:3000/posts/" +posts._id);
  }
}
