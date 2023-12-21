// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser');
 
server.use(middlewares)
server.use(bodyParser.json());
server.use('', router)
server.post('/api/posts', (req, res) => {
    // Gelen verileri almak için req.body kullanılır
    const newPost = req.body;

    // Yeni bir post işlemini burada gerçekleştirebilirsiniz
    // Örnek: db.json dosyasına yeni bir veri ekleme
    router.db.get('posts').push(newPost).write();

    // Başarılı yanıt döndürme
    res.status(201).json({ message: 'Post başarıyla oluşturuldu', post: newPost });
});
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
})


// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const bodyParser = require('body-parser'); // body-parser middleware'ini dahil ediyoruz

// server.use(middlewares);
// server.use(bodyParser.json()); // JSON verilerini işlemek için body-parser kullanıyoruz

// // Özel bir POST endpoint'i tanımlama
// server.post('/api/posts', (req, res) => {
//     // Gelen verileri almak için req.body kullanılır
//     const newPost = req.body;

//     // Yeni bir post işlemini burada gerçekleştirebilirsiniz
//     // Örnek: db.json dosyasına yeni bir veri ekleme
//     router.db.get('posts').push(newPost).write();

//     // Başarılı yanıt döndürme
//     res.status(201).json({ message: 'Post başarıyla oluşturuldu', post: newPost });
// });

// server.delete('/api/posts/:id', (req, res) => {
//     const postId = parseInt(req.params.id); // Silinecek postun ID'sini alıyoruz

//     // db.json'dan ilgili veriyi bulup kaldırma
//     const posts = router.db.get('posts');
//     const postIndex = posts.findIndex(post => post.id === postId);

//     if (postIndex !== -1) {
//         posts.splice(postIndex, 1).write();
//         res.json({ message: `Post ID ${postId} başarıyla silindi` });
//     } else {
//         res.status(404).json({ message: `Post ID ${postId} bulunamadı` });
//     }
// });
// server.put('/api/posts/:id', (req, res) => {
//     const postId = parseInt(req.params.id); // Güncellenecek postun ID'sini alıyoruz
//     const updatedPost = req.body; // Güncellenecek veriyi istek gövdesinden alıyoruz

//     // db.json'dan ilgili veriyi bulma ve güncelleme
//     const posts = router.db.get('posts');
//     const postIndex = posts.findIndex(post => post.id === postId);

//     if (postIndex !== -1) {
//         posts
//             .find()
//             .assign(updatedPost)
//             .write();
//         res.json({ message: `Post ID ${postId} başarıyla güncellendi`, updatedPost });
//     } else {
//         res.status(404).json({ message: `Post ID ${postId} bulunamadı` });
//     }
// });

// // '/api' prefix'i altında kullanılacak olan router
// server.use('/api', router);

// // Belirtilen port üzerinden server'ı dinlemeye başlama
// server.listen(process.env.PORT || 3000, () => {
//     console.log('JSON Server is running');
// });
