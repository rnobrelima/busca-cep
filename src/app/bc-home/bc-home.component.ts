import { Component, OnInit } from '@angular/core';
import { BcHomeService } from './bc-home.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bc-home',
  templateUrl: './bc-home.component.html',
  styleUrls: ['./bc-home.component.css']
})
export class BcHomeComponent implements OnInit {


  formEndereco = this.formBuilder.group({
    cep: new FormControl(''),
    logradouro: new FormControl(''),
    numero: new FormControl(null, Validators.required),
    complemento: new FormControl(''),
    bairro: new FormControl(''),
    localidade:new FormControl(''),
    uf: new FormControl(''),
    ibge: new FormControl(''),
    gia: new FormControl(''),
    ddd: new FormControl(''),
    siafi: new FormControl(''),
  });
  
  constructor(
    public bcservice: BcHomeService,
    public formBuilder: FormBuilder
    ) { }
  ngOnInit(): void {
  }

  buscaCep() {
    let cep = this.formEndereco.value.cep;
    this.bcservice.getCep(cep).subscribe((res:any) => {
      this.formEndereco.setValue(
        {
         'cep': res.cep,
         'logradouro':res.logradouro,
         'numero': null,
         'complemento': res.complemento,
         'bairro': res.bairro,
         'localidade': res.localidade,
         'uf': res.uf,
         'ibge': res.ibge,
         'gia': res.gia,
         'ddd': res.ddd,
         'siafi': res.siafi
        })
      //this.formEndereco.setValue(res); // não pode ser usado dessa forma porque não tem o numero no retorno da api 
    })
  }

  submitForm(){
    console.log(JSON.stringify(this.formEndereco.value));
  }

}
