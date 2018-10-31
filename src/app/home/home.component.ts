import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogContent } from '@angular/material';
import { LiberadoComponent } from '../liberado/liberado.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  semAcesso() {
    this.router.navigate(['unlock']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(LiberadoComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Resultado: ${ result }');
    });
  }
}
