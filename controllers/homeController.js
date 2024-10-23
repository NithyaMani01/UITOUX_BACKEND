const { getDB } = require('../config/db');

const getHomeData = async (req, res) => {
    try {
        const db = getDB();
        let responseData = {
            featuredProducts: [],
            topRatedProducts: [],
            specialOffers: [],
            bestSellers: []
        }
        const featuredProducts = await db.collection('featuredProducts').find().toArray();
        responseData.featuredProducts = featuredProducts;

        const topRatedProducts = await db.collection('topRatedProducts').find().toArray();
        responseData.topRatedProducts = topRatedProducts;

        const specialOffers = await db.collection('specialOffers').find().toArray();
        responseData.specialOffers = specialOffers;

        const bestSellers = await db.collection('bestSellers').find().toArray();
        responseData.bestSellers = bestSellers;

        return res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};



module.exports = { getHomeData };
