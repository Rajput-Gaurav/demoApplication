import { Component, OnInit } from '@angular/core';
import { ElectroService } from '../service/electro.service';
import { ElectronicsModel } from '../model/electroModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Object;
  // model: ElectronicsModel;
  // data: ElectronicsModel = null;
  // inject service:
  constructor(private electronicService: ElectroService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showAllData();
    // get Single Data with id:
    // const id = this.route.snapshot.params.id;
    // this.electronicService.getSingleData(id).subscribe((data) => (this.data= data));
  }
  // insert Data:
  addData(data){
    this.electronicService.createData(data).subscribe((res) => {
      this.showAllData();
    })
  }

  // getAll Data:
  showAllData(){
    this.electronicService.getData().subscribe((res) => {
      this.data = res;
    })
  }

  // delete Data:
  deleteData(data){
    this.electronicService.deleteData(data).subscribe(() => {
      this.showAllData();
    })
  }

  // update Data:
  updateData(id){
    this.electronicService.updateData(id).subscribe((response) => {
      this.showAllData();
    })
  }



}
