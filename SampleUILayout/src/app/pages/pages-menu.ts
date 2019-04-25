import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[]=[
    {
        title:'E-commerce',
        icon:'nb-e-commerce',
        link:'#',
        home:true,
    },
    {
        title:'Miscellaneous',
        icon:'nb-shuffle',
        children: [
            {
                title: '404',
                link: '#'
            }
        ]
    }
];