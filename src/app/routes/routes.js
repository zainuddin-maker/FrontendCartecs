import { NotFound, Home,Uploadtrainer,Kontentrainer,Homestudent, Hometrainer,UserRegister, UserLogin ,UserRegisterMember ,UserRegisterMontir ,UserRegisterPerusahaan} from '../pages'

const routes = [
    {
        path: "/",
        pageTitle: 'Home',
        exact: true,
        component: Home,

    },
   
    {
        path: "/company/register",
        pageTitle: 'Daftarkan Perusahaan Anda',
        exact: true,
        component: NotFound,
    },
    {
        pageTitle: 'Page Not Found',
        component: NotFound,
        exact: true
    }
];
const empty = [
    {
        path: "/users/register",
        pageTitle: 'Daftar Sekarang',
        exact: true,
        component: UserRegister,
    },
    {
        path: "/users/registermember",
        pageTitle: 'Daftar Sekarang Member',
        exact: true,
        component: UserRegisterMember,
    },
    {
        path: "/users/registermontir",
        pageTitle: 'Daftar Sekarang Montir',
        exact: true,
        component: UserRegisterMontir,
    },
    {
        path: "/users/registerperusahaan",
        pageTitle: 'Daftar Sekarang Perusahaan',
        exact: true,
        component: UserRegisterPerusahaan,
    },
    {
        path: "/users/login",
        pageTitle: 'Masuk Sekarang',
        exact: true,
        component: UserLogin,
    },
    {
        path: "/Home/student",
        pageTitle: 'Home Student',
        exact: true,
        component: Homestudent,

    },
    {
        path: "/Home/trainer",
        pageTitle: 'Home Trainer',
        exact: true,
        component: Hometrainer,

    },
    {
        path: "/Home/trainerupload",
        pageTitle: 'Home Trainer Upload',
        exact: true,
        component: Uploadtrainer,

    },
    {
        path: "/Home/kontentrainer",
        pageTitle: 'Home Trainer Konten',
        exact: true,
        component: Kontentrainer,

    },



    // , {
    //     path: "/signup",
    //     exact: true,
    //     pageTitle: 'Sign Up',
    //     component: Signup
    // }
];
export { routes, empty };