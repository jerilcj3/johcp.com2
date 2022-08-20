import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [extendedResult, updateExtendedResult] = useState(false);

  const campaignName = "Roofing";
  const campaignID = "1001";

  const { data, getData } = useVisitorData(
    { extendedResult },
    { immediate: true }
  );
  const router = useRouter();
  const currentPath = router.pathname;

  const reloadData = () => {
    getData({ ignoreCache: true });
  };

  const onChangeExtendedResult = (e) => {
    updateExtendedResult(e.target.checked);
  };

  const visitorID = data?.visitorId;
  const confidenceScore = JSON.stringify(data?.confidence.score, null, 2);
  
  useEffect(() => {
    //calling the setcookie api
    //const visitorID = data?.visitorId;
    //setting cookie
    fetch("/api/cookie", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: visitorID }),
    });
  }, [visitorID]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      campaignName,
      campaignID,
      name,
      email,
      visitorID,
      confidenceScore,
      currentPath,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    //const content = await response.json();

    setName("");
    setEmail("");
    router.push("https://google.com");
  };

  return (
    <div className="bg-gray-100 font-sans">
      <section className="header__section divide-x-5">
        <div className="max-w-6xl m-auto">
          <header className="flex flex-col md:flex-row gap-5 items-center justify-between pt-3 pb-3">
            <div className="flex header__left justify-center items-center">
              <img
                className="w-20"
                src="https://cdn3.iconfinder.com/data/icons/christmas-new-year-2040/96/Icon_Snow_house-128.png"
                alt=""
              />
              <span className="text-2xl font-bold">Local Roofing Costs</span>
            </div>
            <div className="header__right xs:text-center">
              <span className="text-xl text-green-800 font-bold xs:text-center">
                Helping You Find the Best Roofing Prices
              </span>
            </div>
          </header>
        </div>
        <hr className="bg-grey-200 p-2" />
      </section>

      <section className="content mt-4 pl-5 pr-5">
        <div className="max-w-6xl m-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
            <div className="content__left">
              <span className="text-green-800 text-md font-bold block mt-5">
                100% FREE ROOFING QUOTES
              </span>
              <h1 className="text-6xl font-bold mt-8 leading-none">
                Save Big on a New Roof
              </h1>
              <h3 className="italic	text-3xl mt-5 leading-lg">
                Compare Roofing Prices Now for Great Deals
              </h3>
              <ul className="mt-6 text-xl leading-normal">
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <li>Completely FREE Service, No Obligation</li>
                </div>

                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <li>You Simply Pick The Best Deal!</li>
                </div>

                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <li>Roofing Companies Compete, You SAVE!</li>
                </div>
              </ul>
              <div className="certificate flex mt-2">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <img
                className="w-full mt-2 rounded-md"
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vZmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
                alt=""
              />
            </div>
            <div className="content__right bg-white w-full p-4">
              <div className="form p-8 rounded-md">
                <h1 className="bg-green-600 rounded-md p-4 text-3xl text-center mb-4 font-bold">
                  Contact Me
                </h1>

                <form className="" onSubmit={handleSubmit}>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Enter Your Name"
                    type="text"
                    className="form-input px-4 py-3 rounded-md w-full mb-5"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Your Email"
                    className="form-input px-4 py-3 rounded-md w-full "
                  />
                  <div className="authority__box mt-3">
                    <input
                      checked
                      name="authority_box"
                      type="checkbox"
                      className="rounded text-pink-500 mr-2"
                    />
                    <label htmlFor="authority_box">
                      I have the authority to make changes to this house
                    </label>
                  </div>
                  <button className=" pointer flex gap-5 justify-center items-center text-2xl w-full mt-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-5 px-4 border border-blue-700 rounded">
                    <span>Contact Me</span>
                    <img
                      className="w-6"
                      src="https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_054_right_arrow_next_foward_follow_link-128.png"
                      alt=""
                    />
                  </button>
                  <span className="mt-4 flex justify-center items-center">
                    <img
                      className="w-6"
                      src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/clock-128.png"
                      alt=""
                    />
                    it only takes a minute!
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl m-auto">
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <p className="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl sm:tracking-tight">
                  A better way to send money
                </p>
                <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
              </div>

              <div className="mt-10 p-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium">
                        Competitive exchange rates
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium">
                        No hidden fees
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium">
                        Transfers are instant
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium">
                        Mobile notifications
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
