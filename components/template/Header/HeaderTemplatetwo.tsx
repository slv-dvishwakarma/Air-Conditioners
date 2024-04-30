"use client"
import { LanguageSelector } from '@/app/shop/LanguageSelector';
import { SVGIcon } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Search } from './Search';
import { useForm } from 'react-hook-form';
import { Popup } from '@/components/Popup';
import { LoginPopup } from './Popup/LoginPopup';
import { SignUpPopup } from './Popup/SignUpPopup';

interface passwordItem {
    eye: string;
    eye_off: string;
}

interface AccountItem {
    name: string;
    url: string;
}

interface checkboxItem {
    name: string;
    label: string;
}


interface InputItem {
    name: string;
    placeholder: string;
    label: string;
    icon: string;
}

interface LoginFormItem {
    email: InputItem;
    password: InputItem;
    button: string;
    password_protection: passwordItem;
    checkbox: checkboxItem;
}

interface SignupItem {
    email: InputItem;
    password: InputItem;
    button: string;
    password_protection: passwordItem;
    username: InputItem;
}

interface NavigationItem {
    label: string;
    link: string;
}

interface buttonItem {
    login_btn: string;
    signup_button: string;
}

interface SearchItem {
    name: string;
    placeholder: string;
    icon: string;
}

interface HeaderItem {
    logo: string;
    alt: string;
    cart: number;
    options: string[];
    language: string[];
    navigation: NavigationItem[];
}

interface HeaderProps {
    header_data: HeaderItem;
    search: SearchItem;
    button: buttonItem;
    login_form: LoginFormItem;
    signup_form: SignupItem;
    myaccount: AccountItem;
    logout: string;
}

export const HeaderTemplatetwo: React.FC<HeaderProps> = ({ header_data, search, button, login_form, signup_form, myaccount, logout }) => {

    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    const [account, setAccount] = useState(false);

    useEffect(() => {
        const gettoken = localStorage.getItem('token');

        if (gettoken) {
            if (gettoken === 'admin') {
                setAccount(true);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    useEffect(() => {
        const handleScroll = () => {
            if (!open && window.scrollY > 10) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [open]);


    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [open]);


    const handleLogin = () => {
        setLogin(true);
    }

    const handleLoginClose = () => {
        setLogin(false);
    }

    const handleSignup = () => {
        setSignup(true);
    }

    const handlesignupClose = () => {
        setSignup(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const pathName = usePathname();

    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <Popup />
            <form onSubmit={handleSubmit(onSubmit)}>
                <header className={`main-header  ${isSticky ? 'shadow-[0_13px_35px_-12px_rgba(35,35,35,0.15)] fixed w-full z-[99] top-0 animate-animateSlideInDown bg-primary px-[4%] md:px-[3%] lg:px-[5%] xl:px-[5%] left-0' : ''}`} style={isSticky ? { animationDuration: ".5s", animationFillMode: "both", animationName: "slideInDown", transform: "translate3d(0, -100%, 0)" } : undefined}>
                    <nav className="mx-auto flex items-center justify-between py-3 xl:gap-10 lg:gap-5" aria-label="Global">
                        <div className="xl:w-[15%] lg:w-[30%] md:w-[30%] w-[80%]">
                            <Link href="/"><Image src={header_data.logo} alt={header_data.alt} width={280} height={44} className='xl:w-full lg:w-[90%] md:w-9/12 w-[75%]' /></Link>
                        </div>
                        <div className="flex xl:hidden lg:hidden md:hidden gap-10">
                            <div className='absolute xl:right-0 lg:right-0 md:right-0 right-[70px]'>
                                <Link href="/cart">
                                    <span className='text-white text-2xl'>
                                        <SVGIcon name="cart" />
                                    </span>
                                    <span className='absolute top-[-8px] bg-accentColor text-[white] w-5 h-5 leading-5 text-center rounded-[50%] xl:right-[20px] lg:right-[20px] md:right-[20px] right-[-15px] text-xs'>
                                        {header_data.cart}
                                    </span>
                                </Link>
                            </div>
                            <button type="button" onClick={handleOpen} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <SVGIcon className="text-[23px] text-accentColor" name="HamburgerMenu" />
                            </button>
                        </div>
                        <div className='flex xl:hidden lg:flex md:flex hidden gap-10 '>
                            <LanguageSelector options={header_data.options} />
                            {!account ? (
                                <div className='login flex gap-4'>
                                    <button type='button' className='text-[13px] text-white leading-[0]' onClick={handleLogin}>{button.login_btn}</button>
                                    <button type='button' className='text-[14px] bg-accentColor px-[15px] py-[5px] rounded-[18px] text-white leading-[0]' onClick={handleSignup}>{button.signup_button}</button>
                                </div>
                            ) : (
                                <div className='logedin flex gap-4'>
                                    <div className='flex items-center'>
                                        <Link href={myaccount.url} className='text-[13px] text-white'>{myaccount.name}</Link>
                                    </div>
                                    <button type='button' className='text-[14px] bg-accentColor px-[15px] py-[5px] rounded-[18px] text-white' onClick={handleLogout}>{logout}</button>
                                </div>
                            )}
                            <div className='xl:relative lg:relative md:relative xl:right-0 lg:right-0 md:right-0 top-[4px]'>
                                <Link href="/cart">
                                    <span className='text-white text-2xl'>
                                        <SVGIcon name="cart" />
                                    </span>
                                    <span className='absolute top-[-5px] bg-accentColor text-[white] w-4 h-4 leading-4 text-center rounded-[50%] xl:right-[-10px] lg:right-[-10px] md:right-[-10px] right-[-15px] text-xs'>
                                        {header_data.cart}
                                    </span>
                                </Link>
                            </div>
                            <button type="button" onClick={handleOpen} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <SVGIcon className="text-[23px] text-accentColor" name="HamburgerMenu" />
                            </button>
                        </div>
                        <div className="hidden xl:flex lg:hidden md:hidden xl:gap-8 lg:gap-5 text-white">
                            {header_data.navigation.map((menu, index) => (
                                <Link key={index} href={menu.link} className={`text-[15px] ${pathName == menu.link ? "text-accentColor" : "hover:text-accentColor"}`}>{menu.label}</Link>
                            ))}
                        </div>
                        <div className="xl:flex hidden lg:hidden lg:flex-1 lg:justify-end gap-5">
                            <Search name={search.name} placeholder={search.placeholder} icon={search.icon} control={control} errors={errors} />
                            <LanguageSelector options={header_data.options} />
                            {!account ? (
                                <div className='login flex gap-4'>
                                    <button type='button' className='text-[13px] text-white leading-[0]' onClick={handleLogin}>{button.login_btn}</button>
                                    <button type='button' className='text-[14px] bg-accentColor px-[15px] py-[5px] rounded-[18px] text-white leading-[0]' onClick={handleSignup}>{button.signup_button}</button>
                                </div>
                            ) : (
                                <div className='logedin flex gap-4'>
                                    <div className='flex items-center'>
                                        <Link href={myaccount.url} className='text-[13px] text-white'>{myaccount.name}</Link>
                                    </div>
                                    <button type='button' className='text-[14px] bg-accentColor px-[15px] py-[5px] rounded-[18px] text-white' onClick={handleLogout}>{logout}</button>
                                </div>
                            )}
                            <div className='xl:relative lg:relative md:relative xl:right-0 lg:right-0 md:right-0 top-[4px]'>
                                <Link href="/cart">
                                    <span className='text-white text-2xl'>
                                        <SVGIcon name="cart" />
                                    </span>
                                    <span className='absolute top-[-5px] bg-accentColor text-[white] w-4 h-4 leading-4 text-center rounded-[50%] xl:right-[-10px] lg:right-[20px] md:right-[20px] right-[-15px] text-xs'>
                                        {header_data.cart}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className={`${open ? "bg-[rgba(0,0,0,0.8)] fixed inset-0 overflow-y-auto z-[999] " : ""}`}>
                    <div className={`lg:w-auto lg:order-1 z-50 ${open ? "animate-[slideIn_0.5s_forwards] fixed w-full h-full bg-white transition-[left] duration-[0.3s] ease-[ease] z-[1] left-0 top-0 xl:bg-transparent xl:relative xl:animate-[unset] xl:inset-x-[unset] lg:bg-white lg:relative lg:animate-[slideIn_0.5s_forwards] lg:inset-x-[unset]" : "animate-[slideOut_0.5s_forwards] fixed w-full h-full bg-white transition-[left] duration-[0.3s] ease-[ease] left-0 top-0 xl:bg-transparent xl:relative xl:animate-[slideOut_0.5s_forwards] xl:inset-x-[unset] lg:bg-white lg:relative lg:animate-[unset] lg:inset-x-[unset]"}`}>
                        {open && (
                            <div className='w-4/5 float-right'>
                                <div className='text-[white] absolute right-[-60px] text-[35px] top-5'>
                                    <span onClick={handleClose}><SVGIcon name="RxCross2" /></span>
                                </div>
                                <div className='bg-primary py-3 px-2 flex justify-between items-center'>
                                    <Link href="/">
                                        <Image
                                            className='xl:w-[96%] lg:w-full md:w-full w-9/12'
                                            src={header_data.logo}
                                            alt={header_data.alt}
                                            width={280}
                                            height={44}
                                        />
                                    </Link>
                                    <div className='mr-[35px]'>
                                        <LanguageSelector options={header_data.options} />
                                    </div>
                                </div>
                                <div className="text-black flex flex-wrap px-2 divide-y-2 ">
                                    {header_data.navigation.map((menu, index) => (
                                        <Link key={index} href={menu.link} className={`xl:text-[15px] lg:text-[15px] md:text-[15px] text-[18px] py-2.5 w-full ${pathName == menu.link ? "text-accentColor" : "hover:text-accentColor"}`}>{menu.label}</Link>
                                    ))}
                                </div>
                                <div className='p-2.5 space-y-3 mt-5'>
                                    <h3 className='text-[15px] text-accentColor'>Search Product</h3>
                                    <Search name={search.name} placeholder={search.placeholder} icon={search.icon} control={control} errors={errors} />
                                </div>
                                {!account ? (
                                    <div className='space-x-3 flex absolute bottom-0 w-4/5 float-right p-2.5 border-t-[#BBBFBF] border-t border-solid bg-[#EEF3F9]'>
                                        <button type='button' className='text-[15px] bg-accentColor px-[15px] py-[5px] rounded-[18px] text-white w-full' onClick={handleLogin}>{button.login_btn}</button>
                                        <button type='button' className='text-[15px] bg-accentColor px-[15px] py-[5px] rounded-[18px] text-white w-full' onClick={handleSignup}>{button.signup_button}</button>
                                    </div>
                                ) : (
                                    <div className='logedin space-x-3 flex absolute bottom-0 w-4/5 float-right p-2.5 border-t-[#BBBFBF] border-t border-solid bg-[#EEF3F9]'>
                                        <div className='flex items-center w-full px-[15px] py-[5px] text-[15px] bg-accentColor  rounded-[18px] text-white justify-center'>
                                            <Link href={myaccount.url} className='text-center'>{myaccount.name}</Link>
                                        </div>
                                        <button type='button' className='text-[15px] bg-accentColor px-[15px] py-[5px] rounded-[18px] text-white w-full' onClick={handleLogout}>{logout}</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </form>
            {login && (
                <div className={`${login ? "fixed inset-0 overflow-y-auto z-[999] bg-[#00000096]" : ""}`}>
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="relative bg-white xl:w-[40%] lg:w-[50%] md:w-[60%] w-[90%] mx-auto shadow-lg rounded-[20px] px-[20px]">
                            <div className='flex items-center justify-between py-[20px] border-b-[#DADADA] border-b border-solid'>
                                <span className='text-[22px] font-semibold text-accentColor'>Login</span>
                                <button type='button' onClick={handleLoginClose} ><SVGIcon className="text-xl" name="RxCross2" /></button>
                            </div>
                            <LoginPopup email={login_form.email} password={login_form.password} button={login_form.button} password_protection={login_form.password_protection} checkbox={login_form.checkbox} />
                        </div>
                    </div>
                </div>
            )}

            {signup && (
                <div className={`${signup ? "fixed inset-0 overflow-y-auto z-[999] bg-[#00000096]" : ""}`}>
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="relative bg-white xl:w-[40%] lg:w-[50%] md:w-[60%] w-[90%] mx-auto shadow-lg rounded-[20px] px-[20px]">
                            <div className='flex items-center justify-between py-[20px] border-b-[#DADADA] border-b border-solid'>
                                <span className='text-[22px] font-semibold text-accentColor'>Sign Up</span>
                                <button type='button' onClick={handlesignupClose} ><SVGIcon className="text-xl" name="RxCross2" /></button>
                            </div>
                            <SignUpPopup username={signup_form.username} email={signup_form.email} password={signup_form.password} button={signup_form.button} password_protection={signup_form.password_protection} handleClose={handlesignupClose} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

