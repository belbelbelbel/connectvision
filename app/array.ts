import ComprehensiveEye from "./components/ComprehensiveEye"
import ContactLense from "./components/ContactLense"
import VisionCare from "./components/VisionCare"
import RetinalExams from "./components/RetinalExams"
import FreeLasik from "./components/FreeLasik"

export const NavArray = [
  {
    href: '/',
    name: "Home"
  },
  {
    href: "/about",
    name: "About"
  },
  {
    href: '/service',
    name: 'Service'
  },
  {
    href: '/contact',
    name: 'Contact'
  }
]

export const imgarray = [
  {
    img: '/patientformimg.png',
    title: 'Patient Form',
    link: "/patientform",
  },
  {
    img: '/healthinsuranceimg.png',
    title: 'Insurance',
    link: "/insurance",
  }
  , {
    img: '/paymentoption.png',
    title: 'Payment Options',
    link: "/paymentoption",
  }
]

export const Servicearray = [
  {
    img: '/comprehensiveEye.png',
    title: 'Comprehensive eye exam',
    component: ComprehensiveEye
  },
  {
    img: '/contactlens.png',
    title: 'Contact Lenses',
    component: ContactLense
  }
  , {
    img: '/visioncare.png',
    title: 'Pediatric vision care',
    component: VisionCare
  },
  {
    img: '/retinalexam.png',
    title: 'Retinal Exam',
    component: RetinalExams
  },
  // {
  //   img: '/freelasik.png',
  //   title: 'Free lasik co-management'
  //   , component: FreeLasik
  // }
]