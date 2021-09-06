import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts= [
    { id: "131315", name:"chourabi taher" },
    { id: "606050", name:"chourabi taher 1" },
    { id: "808080", name:"chourabi taher 2" },
    { id: "303030", name:"chourabi taher 3" },
    
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  goToProfilePage(c){
    // navigation ?
    //#...

    //this.router.navigateByUrl('/profile/'+c.id+"/"+c.name)
    this.router.navigate(['/profile/'+c.id+"/"+c.name,{ key:'values' } ])
    
  }

}
