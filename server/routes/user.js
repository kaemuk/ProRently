const router = require("express").Router();

const Booking = require("../models/Booking");
const User = require("../models/User");
const Listing = require("../models/Listing");


/* GET TRIP LIST */
router.get("/:userId/trips", async (req, res) => {
    try{
        const { userId } = req.params;
        const trips = await Booking.find({customerId: userId }).populate("customerId hostId listingId");
        res.status(202).json(trips);
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "Can not find trips!", err: err.message });
    }
})


/* Add listing to wishlist */
router.patch("/:userId/:listingId", async (req, res) => {
    try{
        const { userId, listingId} = req.params;
        const user = await User.findById(userId);
        const listing = await Listing.findById(listingId).populate("creator");


        const favoriteListing = user.wishList.find((item) => item._id.toString() === listingId); 

        if (favoriteListing) {
            // If the listing is already in the wishlist, remove it
            user.wishList = user.wishList.filter((item) => item._id.toString() !== listingId);
            await user.save()
            res.status(200).json({ message: "Listing removed from wishlist",wishList: user.wishList });
        } else {
            // If the listing is not in the wishlist, add it
            user.wishList.push(listing);
            await user.save()
            res.status(200).json({ message: "Listing is added to wishlist",wishList: user.wishList });
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "Fail to update wishlist!", err: err.message });
    }
})

/* Get property list */
router.get("/:userId/properties", async (req, res) => {
    try{
        const { userId } = req.params;
        const properties = await Listing.find({creator: userId }).populate("creator");
        res.status(202).json(properties);
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "Can not find properties!", err: err.message });
    }
})

/* Get reservetion list */
router.get("/:userId/reservations", async (req, res) => {
    try{
        const { userId } = req.params;
        const reservations = await Booking.find({hostId: userId }).populate("customerId hostId listingId");
        res.status(202).json(reservations);
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "Can not find reservations!", err: err.message });
    }
})


module.exports = router;