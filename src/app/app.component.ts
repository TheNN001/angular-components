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
        "text": "Valoración actual",
        //"tooltip": null
    },
    {
        "text": "Valoración actual",
        //"tooltip": null
    },
    {
        "text": "Valoración actual",
        //"tooltip": null
    },
    {
        "text": "Valoración actual",
        //"tooltip": null
    },
    {
        "text": "Valoración actual",
        //"tooltip": null
    },
    {
        "text": "Valoración actual",
        //"tooltip": null
    },
    {
        "text": "Valoración actual",
        //"tooltip": null
    },
    {
        "text": "Valoración actual",
        //"tooltip": null
    }
  ]

  public examplData: Array<tableAccordionData> = [
    {
        "id": 2,
        "level": 1,
        "withChild": true,
        "text": "Sensibilidad social",
        "rowData": [
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            }
        ],
        "children": [
          {
            "id": 5,
            "level": 1,
            "withChild": false,
            "text": "Seguridad psicológica",
            "rowData": [
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                }
            ],
            "children": []
        },
        {
            "id": 8,
            "level": 1,
            "withChild": true,
            "text": "Capacidad de aprendizaje",
            "rowData": [
                {
                    "text": "Excelente",
                    "color": "#0000ff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                },
                {
                    "text": "Muy alta",
                    "color": "#003cff",
                    "colorText": "#ffffff"
                }
            ],
            "children": [
              {
                "id": 5,
                "level": 1,
                "withChild": false,
                "text": "Seguridad psicológica",
                "rowData": [
                    {
                        "text": "Muy alta",
                        "color": "#003cff",
                        "colorText": "#ffffff"
                    }
                ],
                "children": []
            },
            {
                "id": 8,
                "level": 1,
                "withChild": false,
                "text": "Capacidad de aprendizaje",
                "rowData": [
                    {
                        "text": "Excelente",
                        "color": "#0000ff",
                        "colorText": "#ffffff"
                    }
                ],
                "children": []
            }
            ]
        }
        ]
    },
    {
        "id": 5,
        "level": 1,
        "withChild": false,
        "text": "Seguridad psicológica",
        "rowData": [
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            }
        ],
        "children": []
    },
    {
        "id": 8,
        "level": 1,
        "withChild": false,
        "text": "Capacidad de aprendizaje",
        "rowData": [
            {
                "text": "Excelente",
                "color": "#0000ff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            },
            {
                "text": "Muy alta",
                "color": "#003cff",
                "colorText": "#ffffff"
            }
        ],
        "children": []
    }
]
}
