import { widget,carousel,stories,landingPage,sms,emails } from "../assets";

const paddingX ='px-[30px]'
const boneWhite='bg-[#F8F7F3]'
const sectionTitleStyle='font-sans text-[64px] max-md:text-[48px] max-[680px]:text-[36px] max-xs:text[24px] '
const sectionTextStyle='w-[570px] max-[680px]: w-[300px] max-[650px]:w-[200px] max-[370px]:w-[150px] text-[18px] max-md:text-[14px] pb-6 '

export const navLinks = [
    {
      id: "Widgets",
      title: "Widgets",
      icon: widget,
    },
    {
      id: "Carousel",
      title: "Carousel",
      icon:carousel,
    },
    {
      id: "Stories",
      title: "Stories",
      icon:stories,
    },
    {
        id: "Landing pages",
        title: "Landing pages",
        icon:landingPage,
      },
      {
        id: "SMS Campaigns",
        title: "SMS Campaigns",
        icon:sms,
      },
      {
        id: "Emails",
        title: "Emails",
        icon: emails,
      },
  ];

export {paddingX,boneWhite,sectionTitleStyle,sectionTextStyle}