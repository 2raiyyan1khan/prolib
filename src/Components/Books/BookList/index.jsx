import React from "react";
import Card from "../../Common/Card/Card";
import SectionTitle from "../../Common/SectionTitle";
const BookList = () => {
  return (
    <>
      <div className="mb-8">
        {/* <ListHeader /> */}

        <SectionTitle title="Latest" />
        {/* header */}
        <div className="grid gap-1 ">
          <div className="grid grid-cols-4  grid-flow-row gap-5 col-span-3 gap-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
              return <Card key={i} />;
            })}
          </div>
        </div>
      </div>

      <div className="static ">
        {/* <ListHeader /> */}

        <SectionTitle title="Popular" />
        {/* header */}
        <div className="grid gap-1 ">
          {/* <div className="col-span-1">
            <Sidebar />
          </div> */}
          <div className="grid grid-cols-4  grid-flow-row gap-5 col-span-3 gap-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
              return <Card key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookList;
