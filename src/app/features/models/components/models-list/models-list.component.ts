import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModelListItemDto } from '../../models/model-list-item-dto';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent{
  @Input() list : ModelListItemDto[] = [];
}
