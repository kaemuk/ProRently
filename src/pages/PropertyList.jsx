import "../styles/List.scss";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import { useEffect } from "react";
import { setPropertyList } from "../redux/state";
import Loader from "../components/Loader";
import { useState } from "react";
import Footer from "../components/Footer";

const PropertyList = () => {
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.user);
  const propertyList = user?.propertyList 

  const dispatch = useDispatch();
  const getPropertyList = async () => {
    try{
        const response = await fetch(`http://localhost:3001/users/${user._id}/properties`,{
            method: "GET",
        }) 
        const data = await response.json();
        dispatch(setPropertyList(data));
        setLoading(false);
    }  catch (err){
        console.log("Fetch all properties failed", err.message);
    }
}

useEffect(() =>{
    getPropertyList();
}, [])

  return loading ? <Loader /> : (
    <>
      <Navbar />
      <h1 className="title-list">Таны үл хөдлөх</h1>
      <div className="list">
        {propertyList.length === 0 ? (
          <p>Одоогоор танд үл хөдлөх байхгүй байна.</p>
        ) : (
          propertyList.map((listing) => (
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

export default PropertyList;
