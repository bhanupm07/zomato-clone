import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../../customHooks/useThunk";
import { getBookmarksThunk } from "../../store";
import RestaurantCard from "../../components/DeliveryPage/RestaurantCard";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const BookmarkPage = () => {
  const { userId, bookmarks } = useSelector((state) => state.user);
  const [runFetchBookmarks, _, isLoading] = useThunk(getBookmarksThunk);

  useEffect(() => {
    const argument = {
      userId,
      token: localStorage.getItem("token"),
    };
    runFetchBookmarks(argument);
  }, [bookmarks, runFetchBookmarks]);

  const bookmarkItemsJsx = bookmarks?.map((bookmark) => {
    return (
      <RestaurantCard
        key={bookmark.restaurantId._id}
        data={bookmark.restaurantId}
      />
    );
  });

  return (
    <main className="mx-20 max-[500px]:mx-7 mt-5 py-5 border-t">
      <h2 className="text-3xl font-semibold mb-4">Bookmarks</h2>
      {isLoading ? (
        <Spinner color="red.500" emptyColor="gray.100" />
      ) : bookmarks.length ? (
        <section className="flex flex-wrap gap-5 w-full">
          {bookmarkItemsJsx}
        </section>
      ) : (
        <Link
          to="/explore/order/delivery"
          className="flex flex-col gap-4 items-center my-24"
        >
          <BsBookmarkPlusFill className="text-8xl text-primary" />
          <span className="text-lg font-medium">Add Bookmarks now</span>
        </Link>
      )}
    </main>
  );
};

export default BookmarkPage;
