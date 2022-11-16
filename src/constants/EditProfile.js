
import profile from '../assets/profile.svg'
import PatnerPrefrence from '../assets/patnerPrefrence.svg'
import horoscope from '../assets/horoscope.svg'
import  profiles_you_viewed from '../assets/profiles_you_viewed.svg'
import who_viewd_your_profile from '../assets/who_viewed_your_profile.svg';

let editProfile = [
    {
        content: "MY PROFILE",
        image: profile,
        link: '/manage/profile'
    },
    {
        content: "PATNER PREFERENCES",
        image: PatnerPrefrence,
        link: '/manage/patner-prefrence'
    },
    {
        content: "HOROSCOPE",
        image: horoscope,
        link: '/manage/horoscope'
    },
    {
        content: "PHOTOS",
        image: profile,
        link: '/manage/photos'
    },
    {
        content: "PROFILES_YOU_VIEWD",
        image: profiles_you_viewed,
        link: '/manage/profiles_you_viewed'
    },
    {
        content: "WHO_VIEWED_YOUR_PROFILE",
        image: who_viewd_your_profile,
        link: '/manage/who_viewd_your_profile,'
    }
]

export default editProfile