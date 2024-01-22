/* This HeroBanner requires Tailwind CSS v3.0+ */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, EnvelopeIcon, PhoneArrowDownLeftIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const navigation = [
    {
        name: 'Home',
        href: '/home',
        access: 'public'
    },
    {
        name: 'About',
        href: '/about',
        access: 'public'
    },
    {
        name: 'Insurance',
        href: '/insurance',
        access: 'public'
    },
    {
        name: 'Dashboard',
        href: '/dashboard',
        access: 'private'
    },
    {
        name: 'Documents',
        href: '/documents',
        access: 'private'
    },
    {
        name: 'Application Form',
        href: '/application-form',
        access: 'private'
    },
    {
        name: 'Change Password',
        href: '/change-password',
        access: 'private'
    },
]

export default function HeroBanner() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className='bti-main-menus'>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <div className="flex lg:min-w-0 lg:flex-1 " aria-label="Global">
                        <Link to="/home" className="-m-1.5 p-1.5">
                            <span className="sr-only">BTI Insurance</span>
                            <img className="h-3 lg:h-4" src={Logo} alt="BTI Insurance" />
                        </Link>
                    </div>
                </div>
                <div className='lg:block md:block hidden'>
                    <div className='flex'>
                        <div className='p-2'>
                            <EnvelopeIcon className="h-12 w-12 text-blue" aria-hidden="true" />
                        </div>
                        <div className='p-2'>
                            <h4 className='text-white font-bold leading-6 text-white hover:bg-gray-400/10'>Email Us</h4>
                            <h5 className='text-muted font-semibold'>info@btiinsurance.com</h5>
                        </div>
                    </div>
                </div>
                <div className='lg:block md:block hidden'>
                    <div className='flex'>
                        <div className='p-2'>
                            <PhoneArrowDownLeftIcon className="h-12 w-12 text-blue" aria-hidden="true" />
                        </div>
                        <div className='p-2'>
                            <h4 className='text-white font-bold leading-6 text-white hover:bg-gray-400/10'>Call for help</h4>
                            <h5 className='text-muted font-semibold'>+34 624411955</h5>
                        </div>
                    </div>
                </div>
                <div className='lg:block md:block hidden'>
                    <div className='flex'>
                        <div className='p-2'>
                            <MapPinIcon className="h-12 w-12 text-blue" aria-hidden="true" />
                        </div>
                        <div className='p-2'>
                            <h4 className='text-white font-bold leading-6 text-white hover:bg-gray-400/10'>Avenida Isidor Macabich 1 07816</h4>
                            <h5 className='text-muted font-semibold' style={{ whiteSpace: 'nowrap' }}>San Rafael, Ibiza, Balearic Islands</h5>
                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden justify-end md:justify-start">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-3 w-10" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <nav className="flex h-4 items-center justify-center bti-main-nav rounded-2xl lg:block hidden" aria-label="Global">

                <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-between lg:gap-x-12 h-full items-center">
                    <div className=''>
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.href} className="px-4 font-semibold text-primary ">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className='flex h-full'>
                        <Link to='lawyer-login' className='h-full'>
                            <button
                                type="button"
                                className="h-full py-1 px-4 font-semibold  border-r-2 bg-gradient"
                            >
                                <span className='text-white'>Lawyer Login</span>
                            </button>
                        </Link>

                        <Link to='lawyer-on-boarding' className='h-full rounded-tr-2xl rounded-br-2xl'>
                            <button
                                type="button"
                                className="h-full py-1 px-4 font-semibold  border-r-2 bg-gradient rounded-tr-2xl rounded-br-2xl"
                            >
                                <span className='text-white'>Lawyer On-Boarding</span>
                            </button>
                        </Link>
                    </div>
                </div>
                {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                        Log in
                    </a>
                </div> */}
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden bg-primary">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <Link to="/home" className="">
                                <span className="sr-only">BTI Insurance</span>
                                <img
                                    className="h-4"
                                    src={Logo}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="flex">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10 text-white">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                                        onClick={()=> setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className='py-6 '></div>
                        </div>
                        <div className="py-3 mt-5">
                            <Link to='lawyer-login' className='h-full w-full bg-blue py-4 '>
                                <button
                                    type="button"
                                    className="h-full w-1/2 py-1 font-semibold border-r text-white"
                                >
                                    <span className='text-white'>Lawyer Login</span>
                                </button>
                            </Link>

                            <Link to='lawyer-on-boarding' className='w-full h-full bg-blue py-4'>
                                <button
                                    type="button"
                                    className="h-full w-1/2 py-1 font-semibold  "
                                >
                                    <span className='text-white'>Lawyer Boarding</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}
