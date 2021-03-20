var models = require('./server.js').models;


//_______DESTROYING DATA__________
models.Profile.findById('603b9da029ea2b0ad04f2b96',(err,found)=>{
    console.log('Foound?', err, found);
    found.destroy();
})

var filter = { where: { email: {like: 'nikc'}}}
models.Profile.destroyAll(filter.where,(err,found)=>{
    console.log('Foound?', err, found);
})

models.Profile.destroyById('603b9da029ea2b0ad04f2b96',(err,found)=>{
    console.log('Foound?', err, found);
})
//Niszczenie plikow w relacji
models.Profile.destroyById('603b9da029ea2b0ad04f2b96', {include: 'Posts'},(err,found)=>{
    console.log('Foound?', err, found);
    found.Posts.destroyAll();
    found.Posts.destroyAll({date: {lte: new Date('2019-02-04')}}); //z warunkiem
})
// var toSave = [
//     {name: 'Nick', email: 'nick@example.com'},
//     {name: 'Baton', email: 'baton@example.com'},
//     {name: 'Debil', email: 'debil@example.com'},
//     {name: 'Wnuczek', email: 'pies@example.com'},
//     {name: 'Tymek', email: 'jebac@example.com'}
// ];

// toSave.map(obj =>{
//     models.Profile.create(obj, (err, created)=>{
//         console.log('Created?',err,created);
//     });
// });

//_________FINDING DATA_____________
// var filter ={
//     where: {
//         email: {like: 'Nick'},
//         pastCount: {gt: 10} //gt lt lte gte (greater then, less then etc.)
//     }, //Kind of liek MySQL Where Clause
//     order: 'date ASC', // Order by : 'field direction'
//     limit: 3,
//     skip: 1, //skipuje pierwszy wynik
//     fields: {email: true} //teraz zwroci tylko wybrane pola
//     include: {
//         relation: 'Posts',
//         scope: {
//             limit: 5,
//             order: 'date, DESC',
//             include: {
//                 relation: 'Image',
//                 limit: 1,
//                 where: {type: 'thumbnail'}
//             }
//         }
//     }, 
// }
// models.Profile.find({where: {name: 'Nick'},order: 'id ASC'}, (err, found)=>{
//     console.log('Found?',err,found);
// });




//__________CREATNG DATA METHODS__________
// models.Profile.create({name:'Nick'},(err,profile)=>{
//     console.log('data?',err,profile);
// });

//jezeli znajdzie juz taki element to go updateuje
// models.Profile.upsert({name:'Nick',id:'603b9da029ea2b0ad04f2b96'},(err,profile)=>{
//     console.log('data?',err,profile);
// });

// models.Profile.findOrCreate({name:'Nick',id:'603b9da029ea2b0ad04f2b96'},(err,profile)=>{
//     if(err){
//         console.log('Error: ',err);
//     }else if(profile){
//         //UPDATING DATA METHODS

//         // profile.updateAttributes({
//         //     email: 'nick@gmail.com'
//         // }, (updateError, updated)=>{
//         //     console.log('Saved? ',updateError,updated)
//         // })
//         profile.email = 'nick@gmail.com';
//         profile.save((ue,updated)=>{
//             console.log('Updated? ',ue,updated);
//         })
//     }
// });