/* Components */
import { OptionLayout, ScoopList } from "../components/entry";

function Entry() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="">
          <h1 className="text-4xl font-semibold">Design your sundae!</h1>

          <OptionLayout title="Scoops List" type="scoops">
            <ScoopList />
          </OptionLayout>

          {/* <Options type="toppings" /> */}
        </div>
      </div>
    </section>
  );
}

export default Entry;
