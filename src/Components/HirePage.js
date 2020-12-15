import React, { useState, useEffect } from "react";

import getData from "../Utilities/getData";
import ReactMarkdown from "react-markdown";
import HireForm from "./HireForm/HireForm";
import BookingsCalendar from "./BookingsCalendar";

const HirePage = () => {
  const [pageData, setPageData] = useState();
  const [rooms, setRooms] = useState();
  const [bookings, setBookings] = useState();

  useEffect(() => {
    getData("hire-page").then((res, err) => {
      setPageData(res);
    });
    getData("rooms").then((res, err) => {
      setRooms(res);
    });
    getData("room-bookings").then((res, err) => {
      setBookings(res);
    });
  }, []);

  return (
    <div>
      {pageData && (
        <div>
          <h1>{pageData.title}</h1>

          <ReactMarkdown source={pageData.description} />

          {/* {rooms &&
            rooms.map((room, index) => {
              return (
                <div key={room.id}>
                  <h1>{room.room}</h1>
                  <ReactMarkdown source={room.description} />
                  <p>£{room.price} - Per Hour</p>
                </div>
              );
            })} */}
          <div style={{ width: "100%" }}>
            {bookings && <BookingsCalendar bookings={bookings} />}
          </div>
          <HireForm />
        </div>
      )}
    </div>
  );
};

export default HirePage;
