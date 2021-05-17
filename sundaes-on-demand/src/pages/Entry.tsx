import React from "react";
import { Options } from "../components/entry";

function Entry() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="">
          <h1 className="text-4xl font-semibold">Design your sundae!</h1>

          <Options type="scoops" />

          <Options type="toppings" />
        </div>
      </div>
    </section>
  );
}

export default Entry;
