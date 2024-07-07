
import AIIcon from '../../../assets/svg/ai.svg'
import CopyIcon from '../../../assets/svg/copyIcon.svg'
import AddIcon from '../../../assets/svg/add-circle.svg'
import upload from '../../../assets/svg/upload.svg'
import DriveIcon from '../../../assets/svg/drive.svg'
import GmailIcon from '../../../assets/svg/drive.svg'
import MiCloudIcon from '../../../assets/svg/mi-cloud.svg'
import OutlookIcon from '../../../assets/svg/outlook.svg'
import SlackIcon from '../../../assets/svg/slack.svg'
import ClutchIcon from '../../../assets/svg/cluch.svg'



const AI = () => {
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <>
            {/* Card widget */}
            <div className='flex flex-col'>
                <h1 className="text-3xl font-bold text-black">Integrations</h1>
            </div>
            <div className='mt-10 overflow-auto'>
                <div className='w-full border border border-color rounded-xl  p-4 w-fit text-[15px] font-normal text-black mb-3'>
                    <div className='flex flex-col md:flex-row  items-start justify-between '>
                        <div className='flex flex-col'>
                        <h2 className='text-lg font-bold'>Google</h2>
                        <p className='text-[15px] font-normal text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className='flex w-full justify-end items-center gap-x-3 mt-3 mt-md-0'>
                            <a href='/'><img src={DriveIcon} alt='drive' /></a>
                            <a href='/'><img src={OutlookIcon} alt='drive' /></a>
                            <a href='/'><img src={SlackIcon} alt='drive' /></a>
                            <div className='ml-2'>
                                <label htmlFor="one">
                                    <input id="one" type="checkbox" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full border border border-color rounded-xl  p-4 w-fit text-[15px] font-normal text-black mb-3'>
                    <div className='flex flex-col md:flex-row  items-start justify-between '>
                        <div className='flex flex-col'>
                        <h2 className='text-lg font-bold'>Google</h2>
                        <p className='text-[15px] font-normal text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className='flex w-full justify-end items-center gap-x-3 mt-3 mt-md-0'>
                            <a href='/'><img src={MiCloudIcon} alt='drive' /></a>
                            <a href='/'><img src={OutlookIcon} alt='drive' /></a>
                            <a href='/'><img src={SlackIcon} alt='drive' /></a>
                            <div className='ml-2'>
                                <label htmlFor="one">
                                    <input id="one" type="checkbox" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full border border border-color rounded-xl  p-4 w-fit text-[15px] font-normal text-black mb-3'>
                    <div className='flex flex-col md:flex-row  items-start justify-between '>
                        <div className='flex flex-col'>
                        <h2 className='text-lg font-bold'>Google</h2>
                        <p className='text-[15px] font-normal text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className='flex w-full justify-end items-center gap-x-3 mt-3 mt-md-0'>
                            <a href='/'><img src={ClutchIcon} alt='drive' /></a>
                            <div className='ml-2'>
                                <label htmlFor="one">
                                    <input id="one" type="checkbox" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AI;
