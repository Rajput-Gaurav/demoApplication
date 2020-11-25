import { PostServiceService } from './../service/post-service.service';
import { Component, OnInit } from '@angular/core';
// import { PostServiceService } from '../services/services.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  allData: Object;
  formObj ={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    _id: ''
  }
  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    this.showAllData();
  }

  // for insert data:
  addData(user){
    console.log(user);

    this.postService.createData(user).subscribe((response) => {
      this.showAllData();
    })
  }

  // get All data:
  showAllData(){
    this.postService.getAllData().subscribe((response) => {
      this.allData = response;
    })
  }

  // for update data:
  updateData(){
    this.postService.updateData(this.formObj).subscribe((response) => {
      this.showAllData();
    })
  }

  editData(user){
    this.formObj = user;
  }

  // deleteData:
  deleteData(user){
    this.postService.deleteData(user).subscribe(() => {
      this.showAllData();
    });
  };

}
