import React, { useState } from "react";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className="px-6 xl:px-0">
      <div className=" mx-auto container my-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search Papers..."
            className="w-full p-4 mb-8 rounded-md bg-gray-200 text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8 mb-5">
            <a
              class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
              href="/components/alert"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://placehold.co/600x400"
                  class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                  alt="Alert"
                />
              </figure>{" "}
              <div class="card-body w-full">
                <h2 class="card-title flex justify-center">Alert</h2>{" "}
                <p class="text-xs opacity-60 flex justify-center">
                  Alert informs users about important events.
                </p>
              </div>{" "}
            </a>
            <a
              class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
              href="/components/alert"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://placehold.co/600x400"
                  class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                  alt="Alert"
                />
              </figure>{" "}
              <div class="card-body w-full">
                <h2 class="card-title flex justify-center">Alert</h2>{" "}
                <p class="text-xs opacity-60 flex justify-center">
                  Alert informs users about important events.
                </p>
              </div>{" "}
            </a>
            <a
              class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
              href="/components/alert"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://placehold.co/600x400"
                  class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                  alt="Alert"
                />
              </figure>{" "}
              <div class="card-body w-full">
                <h2 class="card-title flex justify-center">Alert</h2>{" "}
                <p class="text-xs opacity-60 flex justify-center">
                  Alert informs users about important events.
                </p>
              </div>{" "}
            </a>
            <a
              class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
              href="/components/alert"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://placehold.co/600x400"
                  class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                  alt="Alert"
                />
              </figure>{" "}
              <div class="card-body w-full">
                <h2 class="card-title flex justify-center">Alert</h2>{" "}
                <p class="text-xs opacity-60 flex justify-center">
                  Alert informs users about important events.
                </p>
              </div>{" "}
            </a>
            <a
              class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
              href="/components/alert"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://placehold.co/600x400"
                  class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                  alt="Alert"
                />
              </figure>{" "}
              <div class="card-body w-full">
                <h2 class="card-title flex justify-center">Alert</h2>{" "}
                <p class="text-xs opacity-60 flex justify-center">
                  Alert informs users about important events.
                </p>
              </div>{" "}
            </a>
            <a
              class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
              href="/components/alert"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://placehold.co/600x400"
                  class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                  alt="Alert"
                />
              </figure>{" "}
              <div class="card-body w-full">
                <h2 class="card-title flex justify-center">Alert</h2>{" "}
                <p class="text-xs opacity-60 flex justify-center">
                  Alert informs users about important events.
                </p>
              </div>{" "}
            </a>
            <a
              class="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
              href="/components/alert"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://placehold.co/600x400"
                  class="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                  alt="Alert"
                />
              </figure>{" "}
              <div class="card-body w-full">
                <h2 class="card-title flex justify-center">Alert</h2>{" "}
                <p class="text-xs opacity-60 flex justify-center">
                  Alert informs users about important events.
                </p>
              </div>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
