import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  $ID: string;
  constructor(private params: ActivatedRoute, private router: Router) {
    params.params.subscribe(param => {
      this.$ID = param.id;
    });
  }

  ngOnInit() {
  }
  ubicar() {
    this.router.navigate(['dashboard/ubicar', this.$ID]);
  }
  historial() {
    this.router.navigate(['dashboard/historial', this.$ID]);
  }
  contactos() {
    this.router.navigate(['dashboard/contactos', this.$ID]);
  }
  chat() {
    this.router.navigate(['dashboard/chat', this.$ID]);
  }
  delete() {
    this.router.navigate(['dashboard/delete', this.$ID]);
  }
}
