import React from "react";

const WhySection = () => {
  return (
    <section className="px-6 xl:px-0">
      <div className=" mx-auto container w-full">
        <div className="mb-5">
          <h1 className="xl:text-3xl text-2xl font-bold w-full xl:inline flex justify-center">
            Blocksurance Advantage
          </h1>
          <div className="xl:w-1/2 text-xl w-full flex justify-center">
            When you buy insurance from us, you get more than just financial
            safety. You also get: our promise of simplifying complex insurance
            terms and conditions, quick stress-free claims, instant quotes from
            top insurers and being present for you in the toughest of times.
          </div>
        </div>
        <div className="flex">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
            <div className="container w-full">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src="/images/components/alert.jpg"
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body w-full">
                  <h2 class="card-title">Alert</h2>{" "}
                  <p class="text-xs opacity-60">
                    Alert informs users about important events.
                  </p>
                </div>{" "}
              </div>
            </div>
            <div className="container ">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src="/images/components/alert.jpg"
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body">
                  <h2 class="card-title">Alert</h2>{" "}
                  <p class="text-xs opacity-60">
                    Alert informs users about important events.
                  </p>
                </div>{" "}
              </div>
            </div>
            <div className="container ">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src="/images/components/alert.jpg"
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body">
                  <h2 class="card-title">Alert</h2>{" "}
                  <p class="text-xs opacity-60">
                    Alert informs users about important events.
                  </p>
                </div>{" "}
              </div>
            </div>
            <div className="container ">
              <div
                class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1"
                href="/components/alert"
              >
                <figure class="px-4 pt-4">
                  <img
                    src="/images/components/alert.jpg"
                    class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                    alt="Alert"
                  />
                </figure>{" "}
                <div class="card-body">
                  <h2 class="card-title">Alert</h2>{" "}
                  <p class="text-xs opacity-60">
                    Alert informs users about important events.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
