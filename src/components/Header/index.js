import Link from 'next/link'


const Header = () => {
    const isAuth = true
    return (
        <header className="bg-blue-400 w-full">
            <div className="container mx-auto flex items-center">
                <div>
                    <h3 className="text-2xl font-bold">MetaStartup</h3>
                </div>
                <nav className="w-full flex justify-between items-center py-2 ml-8">
                    <ul className="lg:flex items-center justify-center text-sm text-gray-700 pt-4 lg:pt-0">
                        <li>
                            <Link className="lg:px-5 lg:py-2 py-3 px-0 block border-b-2 border-transparent hover:border-primary font-bold" href="/startups">
                                Startups
                            </Link>
                        </li>
                        <li>
                            <Link className="lg:px-5 lg:py-2 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="/">
                                Jobs
                            </Link>
                        </li>
                    </ul>
                    {!isAuth && (
                        <ul className="lg:flex items-center justify-center text-sm text-gray-700 pt-4 lg:pt-0">
                            <li>
                                <Link className="lg:px-5 lg:py-2 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="/login">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link className="lg:ml-4 lg:px-12 lg:py-2 py-3 px-0 bg-gray-900 text-white rounded block border-b-2 border-transparent hover:border-primary" href={'/signup'}>
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    )}
                    {isAuth && (
                        <ul className="lg:flex items-center justify-between text-sm font-medium text-gray-700 pt-4 lg:pt-0">
                            <li className="dropdown inline-block relative">
                                <div className="lg:px-5 lg:py-2 py-3 px-0 bg-gray-800 text-white rounded block border-b-2 border-transparent hover:border-primary inline-flex items-center">
                                    <span className="mr-1">Ravi Khatri</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                    </svg>
                                </div>
                                <div className="dropdown-menu hidden absolute left-0 text-gray-700 pt-1 z-50">
                                    <ul className="_shadow">
                                        <li>
                                            <Link className="w-40 bg-white hover:bg-gray-200 py-2 px-5 block whitespace-no-wrap" href="/">
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="w-40 bg-white hover:bg-gray-200 py-2 px-5 block whitespace-no-wrap" href="/">
                                                Notifications
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="w-40 bg-white hover:bg-gray-200 py-2 px-5 block whitespace-no-wrap" href="/">
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <p className="w-40 bg-white hover:bg-gray-200 py-2 px-5 block whitespace-no-wrap rounded-b cursor-pointer">
                                                Logout
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    )

}

export default Header
