import React, { useState } from "react";
import Radio, { RadioGroup } from "./Radio";
import { ArrowRight, BadgePercent, Crown, Gem, Sparkle } from "lucide-react";

const Pricing = () => {
  const [plan, setPlan] = useState("");
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#d4d2ec] mt-32">
        <h2 className="text-2xl font-bold tracking-tight">Choose Your Price</h2>
        <hr className="my-3 w-56" />
        <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
          <div className="flex gap-4 justify-center flex-col">
            <Radio value="mobile">
              <Plan
                icon={<BadgePercent />}
                title="Mobile"
                features={["SD(480p)", " Mobile", "Ads"]}
                price={250000}
              />
            </Radio>
            <Radio value="basic">
              <Plan
                icon={<Sparkle />}
                title="Basic"
                features={["HD(720p)", " 1 Device"]}
                price={350000}
              />
            </Radio>
            <Radio value="standard">
              <Plan
                icon={<Gem />}
                title="Standard"
                features={["HD(1080p)", " 2 Devices"]}
                price={400000}
              />
            </Radio>
            <Radio value="premium">
              <Plan
                icon={<Crown />}
                title="Premium"
                features={["Ultra HD (4k) + HDR", " 4 Devices"]}
                price={650000}
              />
            </Radio>
          </div>
        </RadioGroup>
        <hr className="my-3 w-56" />

        <button className="flex gap-4 items-center px-6 py-3 rounded-lg bg-violet-800 hover:bg-violet-700 font-semibold text-lg text-white">
          Proceed with {plan} plan
          <ArrowRight />
        </button>
      </div>
    </>
  );
};

export default Pricing;

function Plan({ icon, title, features, price }) {
  return (
    <div className="flex gap-4 items-center">
      {icon}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{features.join(" · ")}</p>
      </div>
      <span className="ml-auto font-medium">Rp. {price}</span>
    </div>
  );
}
