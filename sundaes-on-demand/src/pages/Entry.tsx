/* Components */

import {
  GrandTotal,
  OptionLayout,
  ScoopList,
  ToppingList,
} from "../components/entry";

function Entry() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="py-4">
          <h1 className="text-4xl font-semibold">Design your sundae!</h1>

          <OptionLayout title="Scoops List" type="scoops">
            <ScoopList />
          </OptionLayout>

          <OptionLayout title="Toppings List" type="toppings">
            <ToppingList />
          </OptionLayout>

          <GrandTotal />
        </div>
      </div>
    </section>
  );
}

export default Entry;
