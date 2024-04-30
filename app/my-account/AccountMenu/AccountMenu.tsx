import { SVGIcon } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface DataItem {
    label: string;
    yes: string;
    cancel: string;
}

interface MenuItem {
    name: string;
    icon: string;
    url: string;
}

interface ProfileItem {
    image: string;
    user: string;
    email: string;
}

interface logoutItem {
    name: string;
    icon: string;
}

interface AccountMenuProps {
    menu: MenuItem[];
    profile: ProfileItem;
    logout: logoutItem;
    logout_data: DataItem;
}

export const AccountMenu: React.FC<AccountMenuProps> = ({ menu, profile, logout, logout_data }) => {
    const [log, setLog] = useState(false);
    const pathname = usePathname();

    const handleLogout = () => {
        setLog(true);
    }

    const handleClose = () => {
        setLog(false);
    }

    const handleLog = () => {
        localStorage.removeItem('token');
        window.location.href = "/";
    }

    useEffect(() => {
        if (log) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [log]);

    return (
        <>
            <div className='menu-item p-6 shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-[15px]'>
                <div className='flex items-center gap-3'>
                    <Image src={profile.image} alt={profile.user} width={400} height={400} className='w-[20%] rounded-[50%]' />
                    <div className='profile'>
                        <h3 className='text-lg font-semibold text-left'>{profile.user}</h3>
                        <Link href={`mailto:${profile.email}`} className='text-left text-sm text-accentColor'>{profile.email}</Link>
                    </div>
                </div>
                <div className='menu pt-[30px] space-y-3'>
                    {menu.map((item, index) => (
                        <div key={index} className={`flex items-center gap-2.5 p-2 ${pathname == item.url ? "bg-accentColor rounded-xl" : ""}`}>
                            <SVGIcon className={`w-[30px] h-[30px] flex items-center bg-[white] justify-center rounded-[50%] ${pathname == item.url ? "text-accentColor" : "bg-accentColor text-white"}`} name={item.icon} />
                            <Link className={`${pathname == item.url ? "text-white" : ""}`} href={item.url}>{item.name}</Link>
                        </div>
                    ))}
                    <div className='flex items-center gap-2.5 p-2'>
                        <SVGIcon className="w-[30px] h-[30px] flex items-center bg-[white] justify-center rounded-[50%] bg-accentColor text-white" name={logout.icon} />
                        <button onClick={handleLogout}>{logout.name}</button>
                    </div>
                </div>
            </div>
            {log && (
                <div className={`${log ? "fixed inset-0 overflow-y-auto z-[999] bg-[#00000096]" : ""}`}>
                    <div className='flex items-center justify-center min-h-screen'>
                        <div className='relative bg-white w-[30%] mx-auto shadow-lg rounded-[20px] p-[2%]'>
                            <h2 className='text-xl text-center'>{logout_data.label}</h2>
                            <div className='flex items-center gap-3 pt-[30px]'>
                                <button type='button' className='w-full bg-accentColor text-[white] px-0 py-2 rounded-xl' onClick={handleLog} >{logout_data.yes}</button>
                                <button type='button' className='w-full bg-accentColor text-[white] px-0 py-2 rounded-xl' onClick={handleClose}>{logout_data.cancel}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
