import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PostService } from '../../services/post.service'
import { CatalogueService } from '../../services/catalogue.service'

import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.scss']
})
export class AjouterAnnonceComponent implements OnInit {
  postForm : FormGroup;
  name : string = "";
  name_boolean : boolean = false;
  description : string = "";
  description_boolean : boolean = false;
  categorie : string = "";
  categorie_boolean : boolean = false;
  etat : number = 1;
  etat_boolean : boolean = false;

  message: any[];
  //@Output() messageEvent = new EventEmitter<string>();

  constructor(private postService: PostService,private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit() {
  }

  set_description(event){
    this.description = event.target.value;
    if(event.target.value==""){
      this.description_boolean=false;
    }else{
      this.description_boolean=true;
    }
  }

  set_name(event){
    this.name = event.target.value;
    if(event.target.value==""){
      this.name_boolean=false;
    }else{
      this.name_boolean=true;
    }
  }

  selectChangeHandlerState(event: any) {
    this.etat = event.target.value;
    if(event.target.value=="0"){
      this.etat_boolean=false;
    }else{
      this.etat_boolean=true;
    }
    console.log(this.etat);
  }

  selectChangeHandlerCat(event: any) {
    this.categorie = event.target.value;
    if(event.target.value=="all"){
      this.categorie_boolean=false;
    }else{
      this.categorie_boolean=true;
    }
    console.log(this.categorie);
  }

  onSubmitForm() {
        this.postService.addAnnonce(this.name, this.categorie, this.description, this.etat);
        //this.catalogueService.post_user("salut");
        this.router.navigate(['/home']);
  }

}
