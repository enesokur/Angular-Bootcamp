import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { BrandsApiService } from '../../services/brands-api.service';
import { CommonModule } from '@angular/common';
import { ModelsApiService } from '../../../models/services/models-api.service';
import { ModelListItemDto } from '../../../models/models/model-list-item-dto';
import { ModelsListComponent } from '../../../models/components/models-list/models-list.component';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule,ModelsListComponent],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandListComponent implements OnInit{
  brandList : BrandListItemDto[] = [];
  modelList : ModelListItemDto[][] = [];

  constructor(private brandsApiService : BrandsApiService,
    private change : ChangeDetectorRef,
    private modelsApiService : ModelsApiService
  ){}
  
  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
        this.brandList = response;
        this.change.markForCheck();
    })
  }

  listModels(id : number): void{
    this.modelsApiService.getListForBrandId(id).subscribe((response) => {
      this.modelList[id] = response;
      this.change.markForCheck();
    });
  }
}