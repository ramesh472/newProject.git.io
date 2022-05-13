import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';

@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.scss']
})
export class BanklistComponent implements OnInit,AfterViewInit {

  displayedColumns = ['bank name', 'branch', 'favorite']
  banksList:any=new MatTableDataSource<any>([]);
  pageSizes=[5,10,20]

  searchedData:boolean=false;
@ViewChild (MatPaginator) paginator :MatPaginator | undefined;
@ViewChild (MatSort) sort : MatSort | undefined;
searchForm = new FormGroup({
  searchValue : new FormControl('')
})

  constructor(private appService:AppService) {
    let options = {
      login : true
    }
    this.appService.setHeader(options);
   }
searchData:any = new MatTableDataSource<any>([]);

  ngOnInit(): void {
    this.appService.getBankList().subscribe((res:any)=>{
      this.banksList = res;
      console.log(this.banksList);

    })
  }
reset(){
  this.searchForm.reset();
  this.searchedData=false;
}
  search(){
    this.searchData=[];
    console.log(this.searchForm.controls['searchValue'].value);
   this.searchedData = true;
    let searchValue = this.searchForm.controls['searchValue'].value.toUpperCase();
    console.log(searchValue.toUpperCase());
    this.banksList.forEach((element:any) => {
    if(element.address.includes(searchValue) || element.branch.includes(searchValue.toUpperCase()) ){
      this.searchData.push(element)
    }

  });
  console.log(this.searchData);

  return this.searchData;
  }

  ngAfterViewInit(): void {
    this.banksList.paginator = this.paginator;
    this.banksList.sort = this.sort;
    this.searchData.paginator = this.paginator;

  }
public markFavorite(element:any){
  element.favorite = true;
  console.log(element);
}

public markUnFavorite(element:any){
  element.favorite = false;
  console.log(element);

}

onChangePage(event:any){
console.log(event);

}
}
