import "../styles/List.scss";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";

const WishList = () => {
  const wishList = useSelector((state) => state.user.wishList || []);

  return (
    <>
      <Navbar />
      <h1 className="title-list">Танд таалагдсан үл хөдлөхүүд</h1>
      <div className="list">
        {wishList.length === 0 ? (
          <p>Одоогоор танд таалагдсан үл хөдлөх байхгүй байна.</p>
        ) : (
          wishList.map((listing) => (
            <ListingCard 
              key={listing._id}
              listingId={listing._id}
              creator={listing.creator}
              listingPhotoPaths={listing.listingPhotoPaths}
              city={listing.city}
              province={listing.province}
              country={listing.country}
              category={listing.category}
              type={listing.type}
              price={listing.price}
              booking={false}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default WishList;
