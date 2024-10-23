const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();

const sampleDataForBestSeller = [
    {
        "name": "Brandix Engine Block Z4",
        "currentPrice": "$452.00",
        "isHot": false,
        "rating": 0,
        "reviews": 0,
        "oldPrice": "$573"
    },
    {
        "name": "Brandix Clutch Discs Z175",
        "currentPrice": "$345.00",
        "isHot": false,
        "rating": 3,
        "reviews": 7,
        "oldPrice": ""
    },
    {
        "name": "Brandix Manual Five Speed Gearbox",
        "currentPrice": "$879.00",
        "isHot": false,
        "rating": 4,
        "reviews": 6,
        "oldPrice": ""
    }

]

const sampleDataForFeaturedProducts = [{
    "name": "Glossy Gray 19' Aluminium Wheel AR-19",
    "currentPrice": "$589.00",
    "isHot": true,
    "rating": 4,
    "reviews": 24,
    "sku": "A43-44328-B",
    "oldPrice": ""
},
{
    "name": "Twin Exhaust Pipe From Brandix Z54",
    "currentPrice": "$749.00",
    "isHot": false,
    "rating": 4,
    "reviews": 9,
    "sku": "729-51203-B",
    "oldPrice": ""
},
{
    "name": "Motor Oil Level 5",
    "currentPrice": "$23.00",
    "isHot": false,
    "rating": 5,
    "reviews": 2,
    "sku": "573-49386-c",
    "oldPrice": ""
},
{
    "name": "Brandix Engine Block Z4",
    "currentPrice": "$452.00",
    "isHot": false,
    "rating": 0,
    "reviews": 0,
    "sku": "753-38573-B",
    "oldPrice": "$573.00"
},
{
    "name": "Brandix Clutch Discs Z175",
    "currentPrice": "$345.00",
    "isHot": false,
    "rating": 3,
    "reviews": 7,
    "sku": "472-67382-Z",
    "oldPrice": ""
}
]

const sampleDataForSpecialOffers = [{
    "name": "Brandix Manual Five Speed Gearbox",
    "currentPrice": "$879.00",
    "isHot": false,
    "rating": 4,
    "reviews": 6,
    "oldPrice": ""
},
{
    "name": "Set of Car Floor Mats Brandix Z4",
    "currentPrice": "$78.00",
    "isHot": false,
    "rating": 4,
    "reviews": 16,
    "oldPrice": "$94.00"
},
{
    "name": "Tailligths Brandix Z54",
    "currentPrice": "$60.00",
    "isHot": false,
    "rating": 2,
    "reviews": 8,
    "oldPrice": ""
}

]

const sampleDataForTopRatedProducts = [{
    "name": "Fantastic 12-Stroke Engine With A Power of 1991 hp",
    "currentPrice": "$2579.00",
    "isHot": false,
    "rating": 3,
    "reviews": 17,
    "oldPrice": ""
},
{
    "name": "Set of Four 19 Inch Spiked Tires",
    "currentPrice": "$327.00",
    "isHot": false,
    "rating": 4,
    "reviews": 9,
    "oldPrice": ""
},
{
    "name": "40 Megawatt Low Beam Lamp",
    "currentPrice": "$4.00",
    "isHot": false,
    "rating": 4,
    "reviews": 31,
    "oldPrice": "$8.00"
}
]
module.exports.createDB = async () => {
    try {
        const client = await MongoClient.connect(process.env.MONGO_URL);
        const newDB = client.db(process.env.DB);

        // Check if bestseller data exists
        let bestSellersData = await newDB
            .collection(process.env.bestSellers)
            .findOne({});

        if (!bestSellersData) {
            // Insert bestSellersData data if it doesn't exist
            await newDB
                .collection(process.env.bestSellers)
                .insertMany(sampleDataForBestSeller);
            console.log("bestSellersData  created!");
        }

        let featuredProductsData = await newDB
            .collection(process.env.featuredProducts)
            .findOne({});

        if (!featuredProductsData) {
            // Insert feature product data if it doesn't exist
            await newDB
                .collection(process.env.featuredProducts)
                .insertMany(sampleDataForFeaturedProducts);
            console.log("featuredProductsData created!");
        }


        let specialOfferData = await newDB
            .collection(process.env.specialOffers)
            .findOne({});

        if (!specialOfferData) {
            // Insert specialOffers data if it doesn't exist
            await newDB
                .collection(process.env.specialOffers)
                .insertMany(sampleDataForSpecialOffers);
            console.log("specialOfferData created!");
        }

        let topRateData = await newDB
            .collection(process.env.topRatedProducts)
            .findOne({});

        if (!topRateData) {
            // Insert topRatedProducts data if it doesn't exist
            await newDB
                .collection(process.env.topRatedProducts)
                .insertMany(sampleDataForTopRatedProducts);
            console.log("topRateData  created!");
        }

        // Close the connection
        client.close();
    } catch (err) {
        console.error("Error creating database:", err);
        throw err;
    }
};