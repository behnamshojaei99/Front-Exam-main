export default {
    BASE_URL: "http://172.16.1.58/api/",
    BASE_SOCKET_URL: "http://172.16.1.58",
    BASE_ADMIN_ADDRESS: "/dashboard",
    LOGIN_KEY: "loggedIn",
    TOKEN_EXPIRY_KEY: "tokenExpiryKey",
    LOGIN_EVENT_KEY: "loginEvent",
    REMEMBER_ME: 'rememberMe',
    TOKEN: 'token',

    // ===================== Error Messages ======================

    ERROR: "در روال اجرای برنامه اخلالی رخ داده است",
    E404: "آدرس داده شده برای ارتباط با وب سرویس اشتباه می باشد",
    E401: "نام کاربری و یا پسورد اشتباه می باشد",
    E403: "آدرس داده شده برای ارتباط با وب سرویس اشتباه می باشد",
    E405: "اکانت کاربر مورد نظر تا اطلاع ثانویه غیر فعال گردید شده",
    E406: "مجوز ورود از سمت مدیر به کاربر مورد نظر داده نشده",
    E500: "در پاسخ دهی از سرور مشکلی پیش آمده کمی صبور باشید و دوباره سعی کنید",
    TIMEOUT_ERROR: "در ارتباط با سرور اخلالی رخ داده لطفا کمی صبور باشید و دوباره سعی کنید",

    //   ====================== API =====================================

    ROLES: "Roles",

    EXAM_USERS: 'ExamUsers',
    EXAM_USERS_COURSES: 'UserCourses',
    EXAM_HOSTS: 'ExamHosts',
    RECENT_EXAMS: 'RecentExams',
    EXAM_PAGES: 'ExamPages',
    EXAM_PAGE_HOSTS: "ExamPageHosts",
    EXAM_USER_ACCESSES: "ExamUserAccesses",
    
    //   ===================== Title =================================

    SUC_TITLE: 'عملیات موفق',
    FAL_TITLE: 'عملیات ناموفق',

    //   ===================== Messages =================================
    SUC_MSG: 'کاربر گرامی عملیات با موفقیت انجام شد',
    SUC_CHANGE_PASS: 'کلمه عبور شما با موفقیت تغییر کرد',
    FAL_MSG: 'متاسفانه عملیات موفقیت آمیز نبود لطفا دوباره تلاش کنید',
    EMPTY_FIELDS: 'کاربر گرامی لطفا فیلدهای اجباری را پر کنید',
    
    //======================== Table Headers ============================
    PROFESSORS_RECENT_EXAMS:[
        { id: 'name', numeric: false, disablePadding: true, label: 'عنوان آزمون' },
        { id: 'calories', numeric: true, disablePadding: false, label: 'کد درس' },
        { id: 'fat', numeric: true, disablePadding: false, label: 'تاریخ برگزاری' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'وضعیت' },
        { id: 'protein', numeric: true, disablePadding: false, label: 'مدت برگزاری' },
        { id: 'protein', numeric: true, disablePadding: false, label: '' },

    ],
    STUDENTS_RECENT_EXAMS:[
        { id: 'name', numeric: false, disablePadding: true, label: 'عنوان آزمون' },
        { id: 'calories', numeric: true, disablePadding: false, label: 'کد درس' },
        { id: 'fat', numeric: true, disablePadding: false, label: 'تاریخ برگزاری' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'وضعیت' },
        { id: 'protein', numeric: true, disablePadding: false, label: 'مدت برگزاری' },
        
    ],
    STUDENTS_EXAMS_LIST:[
        { id: 'name', numeric: false, disablePadding: true, label: 'عنوان آزمون' },
        { id: 'fat', numeric: true, disablePadding: false, label: 'تاریخ برگزاری' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'وضعیت' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'مدت برگزاری آزمون' },
        { id: 'protein', numeric: true, disablePadding: false, label: '' },
    ],
    PROFESSORS_EXAMS_LIST:[
        { id: 'name', numeric: false, disablePadding: true, label: 'عنوان آزمون' },
        { id: 'fat', numeric: true, disablePadding: false, label: 'تاریخ برگزاری' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'وضعیت' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'مدت برگزاری آزمون' },
        { id: 'protein', numeric: true, disablePadding: false, label: '' },
    ],
    PROFESSORS_EXAMS_STUDENTS_LIST:[
        { id: 'protein', numeric: true, disablePadding: false, label: '' },
        { id: 'name', numeric: false, disablePadding: true, label: 'نام دانشجو' },
        { id: 'fat', numeric: true, disablePadding: false, label: 'شماره دانشجویی' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'نمره' },
        { id: 'protein', numeric: true, disablePadding: false, label: '' }
    ],
    STUDENTS_COURSES_LIST:[
        { id: 'name', numeric: false, disablePadding: true, label: 'نام درس' },
        { id: 'calories', numeric: true, disablePadding: false, label: 'کد درس' },
        { id: 'fat', numeric: true, disablePadding: false, label: '' },
        { id: 'carbs', numeric: true, disablePadding: false, label: '' },
        { id: 'protein', numeric: true, disablePadding: false, label: '' },
    ],
    PROFESSORS_COURSES_LIST:[
        { id: 'name', numeric: false, disablePadding: true, label: 'نام درس' },
        { id: 'calories', numeric: true, disablePadding: false, label: 'کد درس' },
        { id: 'fat', numeric: true, disablePadding: false, label: '' },
        { id: 'carbs', numeric: true, disablePadding: false, label: '' },
        { id: 'protein', numeric: true, disablePadding: false, label: '' },
    ],
    
}
