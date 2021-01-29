import { Component, OnInit } from '@angular/core';
import { BcHomeService } from './bc-home.service';
import { Cep } from './cep';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bc-home',
  templateUrl: './bc-home.component.html',
  styleUrls: ['./bc-home.component.css']
})
export class BcHomeComponent implements OnInit {

  
  cep = ''; 
  dadosEndereco: Cep[] = [];

  
  formEndereco = this.formBuilder.group({
    cep: new FormControl(null),
    logradouro: new FormControl(null),
    complemento: new FormControl(null),
    bairro: new FormControl(null),
    localidade:new FormControl(null),
    uf: new FormControl(null),
    ibge: new FormControl(null),
    gia: new FormControl(null),
    ddd: new FormControl(null),
    siafi: new FormControl(null),
  });
  
  constructor(
    public bcservice: BcHomeService,
    private formBuilder: FormBuilder
    ) { }
  ngOnInit(): void {
  }

  buscaCep(cep: any) {
    this.bcservice.getCep(cep).subscribe((res:any) => {
      this.dadosEndereco = res;
    })
  }

}
