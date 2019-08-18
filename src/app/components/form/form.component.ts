import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';  
import { SelectItem } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { empty } from 'rxjs';

interface Itens {
  name: string;
  valor: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  

  formCadastro: FormGroup

  confirmado: boolean = false;

  valores: SelectItem[];

  selectedValor: Itens;

  mensagem: string;


  constructor(private formBuilder: FormBuilder) { 
    this.valores = [
      {label:'Verba Mensal em Media', value: null},
      {label:'<= R$5.000', value: 1 },
      {label:'>= R$5.001 e <= R$30.000', value: 2},
      {label:'>= R$30.001 e <= R$100.000', value: 3},
      {label:'>= R$100.001 e <= R$500.000 ', value: 4},
      {label:'>= R$500.001', value: 5},
      {label:'Não se aplica', value: null}
  ];

  
  }

 

  ngOnInit() {
    this. startForm1();
    console.log('Variavel: ',this.confirmado);
    this.mensagem = 'Experimentar gratuitamente';
  }

  confirmar(){   
    this.mensagem = 'Obrigado!';
    this.confirmado = true;
    console.log('Variavel: ',this.confirmado);
    console.log('form', this.formCadastro);
    this.startForm2();
    return this.confirmado;
  }

  startForm1(){
    this.formCadastro = this.formBuilder.group({
      nomeCompleto: [{ value: '', disabled: true}],
      telefone: [{ value: null, disabled: true }],
      email:[{ value: '', disabled: true }],
      nomeEmpresa: [{ value: '', disabled: true }],
      site: [{ value: '', disabled: true }],      
      verba: [{ value: 'Verba Mensal em Media', disabled: true }]
    });
  }

  startForm2(){
    this.formCadastro = this.formBuilder.group({
      nomeCompleto: ['Nome Completo', Validators.compose([ Validators.minLength(5)] )],
      telefone: ['(11) 11111-1111', Validators.compose([ Validators.minLength(5)] )],
      email: ['nome@example.net', Validators.compose([ Validators.minLength(5)] )],
      nomeEmpresa: ['Nome da empresa', Validators.compose([ Validators.minLength(5)] )],
      site: ['www.example.com'],      
      verba: ['Verba Mensal em Media' ]  
    });
   
  }

  setCampos(){
    this.formCadastro.get('nomeCompleto').setValue('Nome Completo');
    this.formCadastro.get('telefone').setValue('(11) 11111-1111');
    this.formCadastro.get('email').setValue('nome@example.net');
    this.formCadastro.get('nomeEmpresa').setValue('Nome da empresa');
    this.formCadastro.get('site').setValue('www.example.com');
  }
  

}
