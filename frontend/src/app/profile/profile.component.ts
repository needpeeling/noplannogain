import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name:string;

  constructor(private userservice: UserService, private route: ActivatedRoute) {
    console.log(this.userservice.UID);
    this.name = this.route.snapshot.params['name'];

    this.userservice.checkUser(this.name).subscribe((res)=>{
      let user_exists = res.data;
      if(! user_exists) {
        console.log("nope")
      }

    }); 

   }

  ngOnInit(): void {
  }

}
