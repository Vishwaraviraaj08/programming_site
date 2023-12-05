import React from "react";
import Link from "next/link";
export default function BodyComponent() {
    return(
        <>
            <section className="bg-white dark:bg-black">
                <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="place-self-center mr-auto lg:col-span-7">
                        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Mastering
                            the Art of <span
                                className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Programming</span>
                        </h1>


                        <h1
                            className="pt-8 relative w-[100%] pb-8 font-mono text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">

                            Learn to code and be the architect of your own success.

                        </h1>

                        <Link href="/signup"
                              className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 hover:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Sign Up
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link href="/login"
                              className="mx-5 inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Log in
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="/homepic.png" alt="mockup"/>
                    </div>
                </div>
            </section>


            <section className="bg-white dark:bg-black">
                <div
                    className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Lorem ipsum</h2>
                        <p className="mb-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            ullamcorper vestibulum ex, at lacinia odio aliquam a. Vivamus luctus justo sit amet diam
                            volutpat, eu venenatis ligula eleifend. Integer fermentum fermentum elit nec tincidunt.
                            Etiam eu urna eget risus consectetur bibendum. Mauris dapibus ex sit amet leo scelerisque,
                            vitae euismod velit fermentum. Vivamus hendrerit neque sit amet nulla dapibus, vel bibendum
                            leo aliquet. In hac habitasse platea dictumst. Ut a metus nec risus dignissim facilisis.
                            Vivamus vel metus sit amet lacus fermentum vestibulum. Integer tempus augue non est
                            tincidunt, nec venenatis lectus fringilla.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg"
                             src="https://w0.peakpx.com/wallpaper/757/791/HD-wallpaper-code-programming-it-technology.jpg"
                             alt="office content 1"/>
                        <img className="mt-4 w-full rounded-lg lg:mt-10"
                             src="https://w0.peakpx.com/wallpaper/919/48/HD-wallpaper-coding-developer-programming.jpg"
                             alt="office content 2"/>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Lorem Ipsum Dolor
                            amit</h2>
                        <p className="mb-4 font-medium">orem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            ullamcorper vestibulum ex, at lacinia odio aliquam a. Vivamus luctus justo sit amet diam
                            volutpat</p>
                        <a href="#"
                           className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                            More Collaborators
                            <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">Start
                            your journey with us today ...</h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Exclusively free for
                            SAIRAM Students</p>

                    </div>
                </div>
            </section>
        </>
    )
}