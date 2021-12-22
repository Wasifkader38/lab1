function initVoteCount() {
    return Math.floor(Math.random() * 50 + 15);
}
const products = [{
        id: 1,
        title: "Harry Potter",
        description: "By J.K Rowling",
        url: "#",
        votes: initVoteCount(),
        submitterAvatarUrl: "https://m.media-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_.jpg",
        productImageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
    },
    {
        id: 2,
        title: "Game of Throne",
        description: " By George R.R Martin",
        url: "#",
        votes: initVoteCount(),
        submitterAvatarUrl: "http://learnenglish.britishcouncil.org/sites/podcasts/files/RS7522_ThinkstockPhotos-622015126-hig_0.jpg",
        productImageUrl: "https://static-01.daraz.com.bd/p/129bfba08f3f76592107bd7692fccf61.jpg",
    },
    {
        id: 3,
        title: "1984",
        description: "By George Orwell.",
        url: "#",
        votes: initVoteCount(),
        submitterAvatarUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/1984-Big-Brother.jpg",
        productImageUrl: "https://static-01.daraz.com.bd/p/e9d8f8953dbd532c0b226fe0b4a0082b.jpg",
    },
    {
        id: 4,
        title: "Angel & Demons",
        description: "By Dan Brown.",
        url: "#",
        votes: initVoteCount(),
        submitterAvatarUrl: "https://wallpaperaccess.com/full/4031303.jpg",
        productImageUrl: "https://images-na.ssl-images-amazon.com/images/I/61d1QJ0tPhL.jpg",
    },
];

export default products;