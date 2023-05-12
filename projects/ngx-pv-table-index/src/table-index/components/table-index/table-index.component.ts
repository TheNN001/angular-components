import { Component, Input, OnChanges } from '@angular/core';
import { tableAccordionData, tableAccordionHeader } from '../../models/table-index.model';

@Component({
  selector: 'ngx-pv-table-index',
  templateUrl: './table-index.component.html',
  styleUrls: ['./table-index.component.scss']
})
export class PvTableIndexComponent implements OnChanges {
  @Input() dataArray: Array<tableAccordionData> | undefined;
  @Input() dataHeader: Array<tableAccordionHeader> | undefined;

  @Input() statBold: boolean = false;
  @Input() statUppercase: boolean = false;
  @Input() statAlign: 'left' | 'center' | 'right' = 'left';

  @Input() dataBold: boolean = false;
  @Input() dataUppercase: boolean = false;
  @Input() dataAlign: 'left' | 'center' | 'right' = 'left';

  @Input() statWidth: number = 50;
  @Input() showImages: boolean = false;

  public isOnHover: number;
  public posX: number = 0;
  public posY: number = 0;
  public amountScrolled: number = 0;
  public numColumn: number = 0;

  public ngOnChanges(): void {
    if(this.dataHeader) {
      this.numColumn = this.dataHeader?.length;
    }
  }
}
