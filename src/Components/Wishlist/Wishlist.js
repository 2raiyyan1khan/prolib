import React from "react";
import Card from "../Common/Card/Card";
import PageTitle from "../Common/PageTitle";
function Wishlist() {
  return (
    <div className="">
      <PageTitle title="My Wishlist" />
      <div className="grid grid-cols-4  grid-flow-row gap-5 col-span-3 gap-y-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
          return <Card key={i} />;
        })}
      </div>
    </div>
  );
}

export default Wishlist;
