export interface tableAccordion {
    headers: Array<tableAccordionHeader>;
    data: Array<tableAccordionData>;
  }
  
  export interface tableAccordionHeader {
    text: string;
    //tooltip?: tooltip;
  }
  
  export interface tableAccordionData {
    children?: Array<tableAccordionData>;
    rowData: Array<rowTableAccordion>;
    id: number;
    level: number;
    text: string;
    withChild: boolean;
  }
  
  export interface rowTableAccordion {
    text: string;
    color: string;
    colorText: string;
  }
  