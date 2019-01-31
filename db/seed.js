const Cereal = require('../models/Cereal')
const News = require('../models/News')

Cereal.deleteMany({}).then(() => {
    Cereal.create({ "_id" : ObjectId("5c4f5fac869e1c038decf6e1"), "name" : "Frosted Flake", "brand" : "Kellogs", "picture" : "https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/0/0/00834806_kellog_frosted_flakes_cereal_10.5oz_right_facing.jpg", "milkType" : "2%", "review" : "They're more than good, they're GRRRRREAT!" }
   )})

News.deleteMany({}).then(() => {
    News.create(
        { "_id" : ObjectId("5c51fa1a68d925dfd184ce8b"), "author" : "Tony T. Tiger", "title" : "Frosted Flakes: Are they really that great?", "content" : "They ARE!" },
{ "_id" : ObjectId("5c5215a1581f081cb94dcf9d"), "createdAt" : ISODate("2019-01-30T21:22:24.015Z"), "author" : "This is a test", "content" : "blahhhhhh", "picture" : "", "title" : "This is a test", "__v" : 0 }
)
})