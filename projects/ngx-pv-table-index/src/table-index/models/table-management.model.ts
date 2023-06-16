import { rowTableAccordion, tableAccordionHeader } from "./table-index.model";

export interface tableHeaderManagement {
    idPage: number;
    children: Array<tableAccordionHeader>;
}

export interface tableDataManagement {
    idPage: number;
    children: Array<rowTableAccordion>;
}