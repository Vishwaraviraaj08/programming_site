import React from 'react';
import Link from 'next/link';
export default function LandingPage() {
    return (
        <div className="overflow-hidden pt-7">
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <img
                                src="data:image/png;base64,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"
                                className="mr-3 h-6 sm:h-9" alt="Logo"/>
                            <span
                                className="font-mono self-center text-xl font-semibold whitespace-nowrap dark:text-white">CodeMindsHub</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <Link href="/login"
                               className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-1.5xl px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                Log in</Link>
                            <Link href="/signup"
                               className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-1.5xl px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                Get started</Link>
                            <button data-collapse-toggle="mobile-menu-2" type="button"
                                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                             id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

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

            <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/" className="flex items-center">
                                <span
                                    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeMindsHub</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow
                                    us</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline ">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#"
                                                                                        className="hover:underline">CodeMindsHub</a>. All Rights Reserved.
        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}