import Menu from './menu';

let pandaMenu = new Menu({
    title: "Панда меню",
    items: [
        {
            text: 'Яйца',
            href: '#eggs'
        },
        {
            text: 'Мясо',
            href: '#meat'
        },
        {
            text: '99% еды - бамбук',
            href: '#bambo'
        },
    ]
})

document.body.appendChild(pandaMenu.element)