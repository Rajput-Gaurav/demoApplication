import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectroService } from '../service/electro.service';
import { ElectronicsModel } from '../model/electroModel';

@Component({
  selector: 'app-electrodetails',
  templateUrl: './electrodetails.component.html',
  styleUrls: ['./electrodetails.component.css']
})
export class ElectrodetailsComponent implements OnInit {

  data: ElectronicsModel;

  constructor(private route: ActivatedRoute,
              private elecService: ElectroService) { }

  ngOnInit(): void {
    // take id:
    let id = this.route.snapshot.params["id"];
    console.log(id);

    this.elecService.getSingleData(id)
    .subscribe((response) => (this.data = response));
  }
}
