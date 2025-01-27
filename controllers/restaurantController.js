module.exports.viewAll = function(req, res, next) {
    const restaurants =[ {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://tb-static.uber.com/prod/image-proc/processed_images/b459e72ad7b55ace5cefa4f09a1f2dcd/c73ecc27d2a9eaa735b1ee95304ba588.jpeg',
        rating: 2,
        category: 'Italian',
        description: 'jdhsajdsei sjdhdddddd adkahsodiowques'
    },
        {
            id: 2,
            name: 'Pizza Hut',
            image: 'https://tb-static.uber.com/prod/image-proc/processed_images/b459e72ad7b55ace5cefa4f09a1f2dcd/c73ecc27d2a9eaa735b1ee95304ba588.jpeg',
            rating: 4,
            category: 'Italian',
            description: 'jdhsajdsei',
        }];
    res.render('index', { title: 'Express' });
}