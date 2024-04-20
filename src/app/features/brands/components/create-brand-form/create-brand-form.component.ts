import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandsApiService } from '../../services/brands-api.service';
import { PostBrandRequest } from '../../models/post-brand-request';

@Component({
  selector: 'app-create-brand-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './create-brand-form.component.html',
  styleUrl: './create-brand-form.component.css'
})
export class CreateBrandFormComponent {
  form : FormGroup = this.fb.group({
    name: [
      '', // başlangıç değeri
      [Validators.required]
    ]
  });

  constructor(private fb : FormBuilder,private brandsApiService : BrandsApiService){}

  createBrand(){
    const request : PostBrandRequest = {
      name: this.form.value.name
    }
    this.brandsApiService.postBrand(request).subscribe({
      next: (response) =>{
        console.info('Response', response);
      },
      error: (error) => {
        console.error(' Error:', error);
      },
      complete: () => {
        console.info('Brand created successfully')
        this.form.reset();
      }
    })

  }

  onFormSubmit(){
    if(this.form.invalid){
      console.log("invalid");
      return;
    }
    this.createBrand();
  }

  
}
