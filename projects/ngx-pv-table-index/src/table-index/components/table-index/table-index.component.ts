import { Component, Input, OnChanges } from '@angular/core';
import { tableAccordionData, tableAccordionHeader } from '../../models/table-index.model';
import { tableDataManagement, tableHeaderManagement } from '../../models/table-management.model';

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
  @Input() columnsPerPage: number = 4;

  public isOnHover: number;
  public posX: number = 0;
  public posY: number = 0;
  public amountScrolled: number = 0;
  public numColumn: number = 0;
  public totalPages: number;
  public tableHeaderManagement: Array<tableHeaderManagement> = [];
  public tableDataManagement: Array<tableDataManagement> = [];
  public actualColumn: number = 0;

  public actPage: number = 0;

  public ngOnChanges(): void {
    if (this.dataHeader) {
      this.actualColumn = 0;
      this.numColumn = this.dataHeader?.length - 1;
      this.totalPages = Math.ceil(this.numColumn / this.columnsPerPage);

      for(let i = 0; i < this.totalPages; i++) {
        this.tableHeaderManagement.push({idPage: i, children: []})
        for (let j = 0; j < this.columnsPerPage; j++) {
          this.actualColumn++;
          if (this.actualColumn > this.numColumn) break;

          this.tableHeaderManagement[i].children?.push(this.dataHeader[this.actualColumn]);
        }
      }
    }

    if (this.dataArray) {
      this.actualColumn = 0;

      for(let i = 0; i < this.totalPages; i++) {
        this.tableDataManagement.push({idPage: i, children: []})
        for (let j = 0; j < this.columnsPerPage; j++) {
          this.actualColumn++;
          if (this.actualColumn > this.numColumn) break;
          
          this.tableDataManagement[i].children.push({text:'aaaa',color:'red',colorText:'green'});
        }
      }
    }
  }

  public changePage(pageDirection:'left'|'right') {
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
