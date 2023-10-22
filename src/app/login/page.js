import Link from 'next/link'

const styleClass = {
    input: "w-full px-4 py-2 appearance-none border-2 border-gray-800 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800",
    inputLabel: "block text-gray-500 text-sm font-bold mb-2",
    button: "w-full px-4 py-2 flex justify-center items-center border-2 border-gray-800 rounded",
}


const Login = () => {

        return (
            <div className="flex justify-center">
                <div className="h-auto w-1/3 my-6">
                    <div className="mb-5">
                        <h2 className="text-2xl text-gray-800 font-medium leading-tight">Hello, welcome back again</h2>
                        <p className="text-gray-600 font-medium leading-tight">Fill your login credentails and explore a world.</p>
                    </div>
                    <form className="mb-4">
                        <div className="mb-3">
                            <label className={styleClass.inputLabel} htmlFor="email">Email</label>
                            <input className={styleClass.input} type="email" id="email" autoComplete="chrome-off" />
                        </div>
                        <div className="mb-5">
                            <label className={styleClass.inputLabel} htmlFor="password">Password</label>
                            <input className={styleClass.input} type="password" id="password" autoComplete="chrome-off" />
                        </div>

                        <button className={`bg-gray-800 text-white ${styleClass.button}`}>
                            Login
                        </button>
                    </form>

                    <div className="flex justify-between items-center">
                        <div className='mb-3 text-center'>
                            <Link href="/signup"><span className="text-gray-800 font-bold">Forgot password</span></Link>
                        </div>
                        <div className='mb-3 text-center'>
                            Need an account? <Link href="/signup"><span className="text-gray-800 font-bold">Signup</span></Link>
                        </div>
                    </div>

                    <div className='mb-3 text-center or-line flex items-center justify-center'>
                        <span className="px-2">or</span>
                    </div>

                    <button className={`mb-5 ${styleClass.button}`}>
                        <svg height="18" width="18" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#0077B7" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z"/>
                        </svg>
                        <span className="ml-2">Continue with LinkedIn</span>
                    </button>
                    <button className={`mb-5 ${styleClass.button}`}>
                        <svg height="18" width="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="m120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308h-86.308c-34.255 44.488-52.823 98.707-52.823 155.785s18.568 111.297 52.823 155.785h86.308v-86.308c-12.142-20.347-19.131-44.11-19.131-69.477z" fill="#fbbd00" />
                            <path d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216c-20.525 12.186-44.388 19.039-69.569 19.039z" fill="#0f9d58" />
                            <path d="m139.131 325.477-86.308 86.308c6.782 8.808 14.167 17.243 22.158 25.235 48.352 48.351 112.639 74.98 181.019 74.98v-120c-49.624 0-93.117-26.72-116.869-66.523z" fill="#31aa52" />
                            <path d="m512 256c0-15.575-1.41-31.179-4.192-46.377l-2.251-12.299h-249.557v120h121.452c-11.794 23.461-29.928 42.602-51.884 55.638l86.216 86.216c8.808-6.782 17.243-14.167 25.235-22.158 48.352-48.353 74.981-112.64 74.981-181.02z" fill="#3c79e6" />
                            <path d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606c-48.352-48.352-112.639-74.981-181.02-74.981l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" fill="#cf2d48" />
                            <path d="m256 120v-120c-68.38 0-132.667 26.629-181.02 74.98-7.991 7.991-15.376 16.426-22.158 25.235l86.308 86.308c23.753-39.803 67.246-66.523 116.87-66.523z" fill="#eb4132" />
                        </svg>
                        <span className="ml-2">Continue with Google</span>
                    </button>
                </div>
            </div>
        )
}

export default Login
