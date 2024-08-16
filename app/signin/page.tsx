/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

const SigninPage = () => {
  return (
    <>
      <section className="bg-[#F5F6FA]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center bg-[#F5F6FA] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <Image
                src="/images/paysenta-logo.png"
                alt=""
                width={200}
                height={100}
                className="mb-10"
              />
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Welcome back
              </h2>
              {/* <p className="text-gray-600 mt-2 text-base">
                Don’t have an account?{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 font-medium transition-all duration-200 hover:underline"
                >
                  Create a free account
                </a>
              </p> */}

              <form action="#" method="POST" className="mt-8 mb-10">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-gray-900 text-base font-medium"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="text-gray-400 focus-within:text-gray-600 relative mt-2.5">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>

                      <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="email@mail.com "
                        className="placeholder-gray-500 border-gray-200 bg-gray-50 focus:border-blue-600 caret-blue-600 block w-full rounded-md border py-4 pl-10 pr-4 text-black transition-all duration-200 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-gray-900 text-base font-medium"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div className="text-gray-400 focus-within:text-gray-600 relative mt-2.5">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </div>

                        <input
                          type="password"
                          name=""
                          id=""
                          placeholder="Enter your password"
                          className="placeholder-gray-500 border-gray-200 bg-gray-50 focus:border-blue-600 caret-blue-600 block w-full rounded-md border py-4 pl-10 pr-4 text-black transition-all duration-200 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-2 flex items-end justify-end">
                      <a
                        href="#"
                        title=""
                        className="hover:text-blue-700 focus:text-blue-700 text-sm font-medium text-[#08ADAD] hover:underline"
                      >
                        {" "}
                        Forgot password?{" "}
                      </a>
                    </div>
                  </div>

                  {/* login button  */}
                  <div>
                    <button
                      type="submit"
                      className="hover:bg-blue-700 focus:bg-blue-700 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#08ADAD] px-4 py-4 text-base font-semibold text-white transition-all duration-200 focus:outline-none"
                    >
                      Log in
                    </button>
                  </div>

                  <p className="text-gray-600 mt-2 flex justify-center gap-2 text-base">
                    Don&apos;t have an account?{" "}
                    <a
                      href="/signup"
                      title=""
                      className="focus:text-blue-700  font-medium text-[#08ADAD] transition-all duration-200 hover:underline"
                    >
                      Register Now
                    </a>
                  </p>
                </div>
              </form>

              {/* google  */}

              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="text-gray-700 border-gray-200 hover:bg-gray-100 focus:bg-gray-100 relative inline-flex w-full items-center justify-center rounded-md border-2 bg-white px-4 py-4 text-base font-semibold transition-all duration-200 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="text-rose-500 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Sign in with Google
                </button>

                {/* facebook  */}
                <button
                  type="button"
                  className="text-gray-700 border-gray-200 hover:bg-gray-100 focus:bg-gray-100 relative inline-flex w-full items-center justify-center rounded-md border-2 bg-white px-4 py-4 text-base font-semibold transition-all duration-200 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="h-6 w-6 text-[#059BE5]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </div>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>

          {/* right side  */}
          <div className="relative hidden h-screen items-end bg-[url('/images/login-right-bg.png')] px-4 pb-10 pt-60 sm:flex sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-contain"
                // src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg"
                src="/images/cards-img.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative">
              <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                <h3 className="text-3xl font-bold text-white">
                  Make International Payments a Breeze with Paysenta
                  <br className="hidden xl:block" />
                  build your website
                </h3>
                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-500 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      No hidden fees
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-500 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Secure transactions
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-500 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Fast transfers
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
