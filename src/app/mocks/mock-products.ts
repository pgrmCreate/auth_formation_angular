
let id = -1;
function addProduct(name: string, body: string, rating: string, tech : string[]) {
    id++;

    return {
        id,
        name,
        body,
        rating,
        tech
    }
}


export const PRODUCTS = [
    addProduct('Lapin en plastique',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at atque commodi exercitatione',
        'Ce lapin est vraiment trop marrant', ['bois', 'peu resistant', 'sensible à \'eau']),
    addProduct('Soudeur du nord',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, possimus!',
        'Un exellent soudeur qui vous permet de réparer tout type de métal', ['gentil', 'marche très bien', 'peu rigolo']),
    addProduct('Carpette en bois',
        'Ad assumenda consectetur facere laboriosam molestiae obcaecati quae quas reiciendis?',
        'Un tapis de décoration qui ira à tout le monde', ['moquette', 'sensible aux puces', 'très doux', 'pas moche']),
    addProduct('Notions abstraites',
        'Eaque eius fugiat labore laboriosam. Amet corporis doloremque sequi vitae.',
        'Un peu flou mais on s\'y retrouve', ['non subsentiel', 'garantie sans rien', 'vide de sens']),
];
