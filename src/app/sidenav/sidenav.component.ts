import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-sidenav]',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  listItems = [{
    name: 'Dashboard',
   url: '../../assets/dashboard.png',
   // icon: 'fa fa-border-all',
    children: ['Page Visitors', 'Post Performance', 'Team Overall']
  },{
    name: 'Calendar',
    icon: 'fa fa-calendar fa-2x',
  },
{
  name: 'Inbox',
    icon: 'fa fa-inbox fa-2x',
    selector: true
},
{
  name: 'Invoicing',
    icon: 'fa fa-credit-card fa-lg',
},
{
  name: 'Lab/ Experimental',
    icon: 'fa fa-flask fa-2x',
}];
recentItems = ["Overall Performance", "Invoice #940", "Customer: Minerva Viewer"] 
dashboardExpanded = false;  
toggleDashboard(){
  this.dashboardExpanded = this.dashboardExpanded ? false: true;
}

random(){
  
}
constructor() { }

  ngOnInit(): void {
  }

}
