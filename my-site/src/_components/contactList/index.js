'use client'
import { useTranslations } from "next-intl";
import { MdOutlineMarkEmailRead, MdOutlinePhoneIphone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const ContactList=()=>{
    const translate = useTranslations(); // Using useTranslations to access messages

    return(
        <>
          
          <ul
          className="flex flex-col justify-center items-center gap-8 text-center"
          role="list">
          <li className="flex items-start gap-4" role="listitem">
          <h3 className="flex justify-center items-center text-center text-white text-lg sm:text-xl md:text-2xl font-semibold">
          {translate('ContactMe')} 
          </h3>
        </li>
          <li className="flex items-start gap-4" role="listitem">
            <div className="bg-[#1b1b1b] w-16 h-16 rounded-xl flex justify-center items-center text-white">
              <MdOutlineMarkEmailRead className="text-3xl" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold"> {translate('Email')} </div>
              <p className="text-xs text-white mt-2">
                yasaminomid9643@gmail.com
              </p>
              <p className="text-xs text-white">somdr0889@gmail.com</p>
            </div>
          </li>
          <li className="flex items-start gap-4" role="listitem">
            <div className="bg-[#1b1b1b] w-16 h-16 rounded-xl flex justify-center items-center text-white">
              <MdOutlinePhoneIphone className="text-3xl" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">{translate('Phone')}</div>
              <p className="text-xs text-white mt-2">
                09339610841 — 09302177630
              </p>
              <p className="text-xs text-white">0513-274-2034</p>
            </div>
          </li>
          <li className="flex items-start gap-4" role="listitem">
            <div className="bg-[#1b1b1b] w-16 h-16 rounded-xl flex justify-center items-center text-white">
              <IoLocationOutline className="text-3xl" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">{translate('Location')}</div>
              <p className="text-xs text-white mt-2">
                 KhorasanRazavi ---- Mashhad
              </p>
              <p className="text-xs text-white">BLV — Mofatteh</p>
            </div>
          </li>
        </ul>
        </>
    )}
    export default ContactList;
