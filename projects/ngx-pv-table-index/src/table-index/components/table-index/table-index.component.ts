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
  @Input() columnsPerPage: number = 0;

  public isOnHover: number;
  public posX: number = 0;
  public posY: number = 0;
  public amountScrolled: number = 0;
  public numColumn: number = 0;
  public totalPages: number;
  public actPage: number = 0;

  public actualColumn: number = 0;
  public actualColumn2: number = 0;

  public tableHeaderManagement: Array<tableHeaderManagement> = new Array<tableHeaderManagement>();
  public tableDataManagement: Array<tableDataManagement> = new Array<tableDataManagement>();
  public tableDataManagement2: Array<tableDataManagement> = new Array<tableDataManagement>();

  public dataArrayChild: Array<tableAccordionData> | undefined

  public ngOnChanges(): void {
    this.pageOrganizer();
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

  public pageOrganizer(): void {
    if (this.columnsPerPage != 0) {
      if (this.dataHeader) {
        this.actualColumn = 0;
        this.tableHeaderManagement = new Array<tableHeaderManagement>();

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
        this.tableDataManagement = new Array<tableDataManagement>();
  
        for(let i = 0; i < this.totalPages; i++) {
          this.tableDataManagement.push({idPage: i, children: []})
          for (let j = 0; j < this.columnsPerPage; j++) {
            this.actualColumn++;
            if (this.actualColumn > this.numColumn) break;
            
            this.tableDataManagement[i].children.push(this.dataArray[i].rowData[j]);
          }
        }
      }
    }
  }
}
