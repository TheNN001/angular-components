import { Component, Input, OnChanges } from '@angular/core';
import { tableAccordionData, tableAccordionHeader } from '../../models/table-index.model';

@Component({
  selector: 'ngx-pv-table-index',
  templateUrl: './table-index.component.html',
  styleUrls: ['./table-index.component.scss']
})
export class PvTableIndexComponent {
  @Input() dataArray: Array<tableAccordionData> | undefined;
  @Input() dataHeader: Array<tableAccordionHeader> | undefined;

  @Input() statFirstBold: boolean = true;

  @Input() statBold: boolean = false;
  @Input() statUppercase: boolean = false;
  @Input() statAlign: 'left' | 'center' | 'right' = 'left';

  @Input() dataBold: boolean = false;
  @Input() dataUppercase: boolean = false;
  @Input() dataAlign: 'left' | 'center' | 'right' = 'center';

  @Input() statWidth: number = 40;
  @Input() showImages: boolean = false;
  @Input() columnsPerPage: number = 0;
  
  @Input() actPage: number = 0;
  @Input() isChild: boolean = false;
  @Input() actualChild: number = 0;
  @Input() numColumn: number = 0;

  public isOnHover: number;
  public posX: number = 0;
  public posY: number = 0;
  public amountScrolled: number = 0;
  public totalPages: number;

  public dataArrayChild: Array<tableAccordionData> | undefined

  ngOnChanges() : void {
    if (this.dataHeader) this.numColumn = this.dataHeader?.length - 1;
  }

  public changePage(pageDirection:'left'|'right') : void {
    if (this.dataHeader) this.numColumn = this.dataHeader?.length - 1;
    this.totalPages = Math.ceil(this.numColumn / this.columnsPerPage);

    if (pageDirection == 'right') {
      if(this.actPage < (this.totalPages - 1)) {
        this.actPage++;
      }
    } else if (pageDirection == 'left') {
      if(this.actPage > 0) {
        this.actPage--;
      }
    }
  }
}
