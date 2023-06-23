import { Component } from '@angular/core';
import { tableAccordionData, tableAccordionHeader } from 'projects/ngx-pv-table-index/src/table-index/models/table-index.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-components';

  public examplHeader: Array<tableAccordionHeader> = 
  [
    {
        "text": "",
        //"tooltip": null
    },
    {
        "text": "Valoración actual",
        //"tooltip": null
    },
    {
        "text": "Valoración literaria",
        //"tooltip": null
    },
    {
        "text": "Valoración imaginaria",
        //"tooltip": null
    },
    {
        "text": "Valoración inmersiva",
        //"tooltip": null
    },
    {
        "text": "Valoración integral",
        //"tooltip": null
    },
    {
        "text": "Valoración novedosa",
        //"tooltip": null
    },
    {
        "text": "Valoración reciente",
        //"tooltip": null
    },
    {
        "text": "Valoración antigua",
        //"tooltip": null
    },
    {
        "text": "Valoración nueva",
        //"tooltip": null
    }
  ]

  public examplData: Array<tableAccordionData> = [

    {

        "id": 2,

        "level": 1,

        "withChild": true,

        "text": "1. Text...................",

        "rowData": [

            {

                "text": "(1) 1.1 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(1) 1.2 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(1) 1.3 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(1) 1.4 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 1.1 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 1.2 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 1.3 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 1.4 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(3) 1.1 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            }

        ],

        "children": [

          {

            "id": 5,

            "level": 1,

            "withChild": false,

            "text": "1.1 Text...................",

            "rowData": [

                {

                    "text": "(1) 1.1.1 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(1) 1.1.2 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(1) 1.1.3 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(1) 1.1.4 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(2) 1.1.1 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(2) 1.1.2 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(2) 1.1.3 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(2) 1.1.4 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(3) 1.1.1 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                }

            ],

            "children": []

        },

        {

            "id": 6,

            "level": 1,

            "withChild": true,

            "text": "1.2 Text...................",

            "rowData": [

                {

                    "text": "(1) 1.2.1 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(1) 1.2.2 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(1) 1.2.3 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(1) 1.2.4 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(2) 1.2.1 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(2) 1.2.2 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(2) 1.2.3 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(2) 1.2.4 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                },

                {

                    "text": "(3) 1.2.1 Muy alta",

                    "color": "yellow",

                    "colorText": "#000000"

                }

            ],

            "children": [

              {

                "id": 7,

                "level": 1,

                "withChild": false,

                "text": "1.2.1 Text...................",

                "rowData": [

                    {

                        "text": "(1) 1.2.1.1 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(1) 1.2.1.2 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(1) 1.2.1.3 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(1) 1.2.1.4 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 1.2.1.1 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 1.2.1.2 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 1.2.1.3 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 1.2.1.4 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(3) 1.2.1.1 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    }

                ],

                "children": []

            },

            {

                "id": 8,

                "level": 1,

                "withChild": false,

                "text": "1.2.2 Text...................",

                "rowData": [

                    {

                        "text": "(1) 1.2.2.1 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(1) 1.2.2.2 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(1) 1.2.2.3 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(1) 1.2.2.4 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 1.2.2.1 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 1.2.2.2 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 1.2.2.3 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 1.2.2.4 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(3) 1.2.2.1 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    }

                ],

                "children": []

            }

            ]

        }

        ]

    },

    {

        "id": 3,

        "level": 1,

        "withChild": false,

        "text": "2 Text...................",

        "rowData": [

            {

                "text": "(1) 2.1 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(1) 2.2 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(1) 2.3 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(1) 2.4 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 2.1 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 2.2 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 2.3 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 2.4 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(3) 2.1 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            }

        ],

        "children": []

    },

    {

        "id": 4,

        "level": 1,

        "withChild": true,

        "text": "3 Text...................",

        "rowData": [

            {

                "text": "(1) 3.1 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(1) 3.2 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(1) 3.3 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(1) 3.4 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 3.1 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 3.2 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 3.3 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(2) 3.4 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            },

            {

                "text": "(3) 3.1 Muy alta",

                "color": "yellow",

                "colorText": "#000000"

            }

        ],

        "children": [

            {

                "id": 6,

                "level": 1,

                "withChild": false,

                "text": "3.1 Text...................",

                "rowData": [

                    {

                        "text": "(1) 3.1.1 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(1) 3.1.2 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(1) 3.1.3 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(1) 3.1.4 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 3.1.1 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 3.1.2 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 3.1.3 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(2) 3.1.4 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    },

                    {

                        "text": "(3) 3.1.1 Muy alta",

                        "color": "yellow",

                        "colorText": "#000000"

                    }

                ],

                "children": []

            }

        ]

    }

]
}
