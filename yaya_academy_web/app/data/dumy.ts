export type home_data_entry_type = {
    en: string,
    html: string | null,
}
export type home_data_type = {
    site_name: home_data_entry_type,
    site_description: home_data_entry_type,
    self_intro_title: home_data_entry_type,
    self_intro_pharagraph: home_data_entry_type,
    recent_courses_subtitle: home_data_entry_type,
    popular_courses_subtitle: home_data_entry_type,
}

export type recent_course_type = {
    id: number,
    imageUrl: string,
    title: string,
    desc: string,
    videos: string,
    duration: string,
    about: string,
    pre_requisits: string,
    level: string,
    thumbnail: string,
    video: string
}
export type single_unit_type = {
    unit: string,
    title: string,
    desc: string,
    total_time: string,
    finished: boolean,
    resource: Array<{
        title: string,
        type: 'video' | 'file' | 'quiz',
        minutes: string,
        checked: boolean
    }>
}
export type single_unit_resource = {
    type: 'quiz' | 'video' | 'file',
    title: string,
    description: string,
    passPercentage:  string | 'none',
}
export type quiz_question = {
    question: string,
    options: Array<string>,
    answer: number
}
export type single_course_quiz = {
    [id: string]: quiz_question[]
}

export type courses_unit_type = {
    [id: string]: single_unit_type[]
}

export type unit_resource = {
    [id: string] : single_unit_resource[]
}

export const recent_courses: recent_course_type[] = [

    {

        id: 1,

        imageUrl: '/ConstructionManagement.jpg',

        title: "Construction Management",

        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem Lorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur adipisicing elit. lorem consectetur adipisicing elit. loremLorem ipsum dolor sit amet consectetur adipisicing elit. loremLorem ipsum dolor sit amet consectetur adipisicing elit. lorem',

        videos: '20 Videos',

        duration: '3 Months',

        about: 'This course teaches the principles of construction management, including project planning, scheduling, and budgeting. Students will learn how to manage construction projects from start to finish, including how to work with architects, engineers, and contractors. The course also covers safety, quality control, and risk management.',

        pre_requisits: 'None',

        level: 'Beginner',

        thumbnail: 'https://example.com/ConstructionManagementThumbnail.jpg',

        video: 'https://example.com/ConstructionManagementVideo.mp4'

    },

    {

        id: 2,

        imageUrl: '/Buildinginf.jpg',

        title: "Building Information Modeling",

        desc: 'Learn how to use BIM software to design, construct, and operate buildings and infrastructure.',

        videos: '15 Videos',

        duration: '2 Months',

        about: 'This course teaches students how to use Building Information Modeling (BIM) software to design, construct, and operate buildings and infrastructure. Students will learn how to create 3D models, generate construction documents, and analyze building performance. The course also covers collaboration, data management, and interoperability.',

        pre_requisits: 'None',

        level: 'Intermediate',

        thumbnail: 'https://example.com/BuildinginfThumbnail.jpg',

        video: 'https://example.com/BuildinginfVideo.mp4'

    },

    {

        id: 3,

        imageUrl: '/Teacher.jpg',

        title: "Sustainable Construction",

        desc: 'Discover the principles and practices of green building and how to apply them to your projects.',

        videos: '18 Videos',

        duration: '2.5 Months',

        about: 'This course teaches the principles and practices of green building and how to apply them to construction projects. Students will learn about sustainable materials, energy-efficient design, and green building certification programs. The course also covers life-cycle assessment, waste reduction, and environmental regulations.',

        pre_requisits: 'None',

        level: 'Intermediate',

        thumbnail: 'https://example.com/TeacherThumbnail.jpg',

        video: 'https://example.com/TeacherVideo.mp4'

    },
    {
        id: 4,
        imageUrl: '/ConstructionManagement.jpg',
        title: "Construction Project Management",
        desc: 'Master the skills and knowledge needed to manage complex construction projects from start to finish.',
        videos: '22 Videos',
        duration: '3.5 Months',
        about: 'This course teaches students how to manage complex construction projects from start to finish. Students will learn how to develop project plans, manage budgets and schedules, and oversee construction activities. The course also covers procurement, contracts, and dispute resolution.',
        pre_requisits: 'Construction Management',
        level: 'Advanced',
        thumbnail: 'https://example.com/ConstructionProjectManagementThumbnail.jpg',
        video: 'https://example.com/ConstructionProjectManagementVideo.mp4'
    },
    {
        id: 5,
        imageUrl: '/ConstructionSafety.jpg',
        title: "Construction Safety and Health",
        desc: 'Learn how to identify, prevent, and control hazards in the construction industry.',
        videos: '12 Videos',
        duration: '1.5 Months',
        about: 'This course teaches students how to identify, prevent, and control hazards in the construction industry. Students will learn about safety regulations, hazard recognition, and risk assessment. The course also covers personal protective equipment, emergency response, and safety management systems.',
        pre_requisits: 'None',
        level: 'Beginner',
        thumbnail: 'https://example.com/ConstructionSafetyThumbnail.jpg',
        video: 'https://example.com/ConstructionSafetyVideo.mp4'
    }
];

export const courses_unit: courses_unit_type = {
    '1': [
        {
            'unit': '1',
            'title': 'Introduction to Construction Management',
            'desc': 'Project management is a broad field that involves supervising all parts of a project, from the initial design to the final product. In construction, project managers oversee the entire process of new building projects.',
            'total_time': '1h 16m',
            'finished': true,
            'resource': [
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'video',
                    'checked': true
                },
                {
                    'title': 'Quiz',
                    'minutes': '30m',
                    'type': 'quiz',
                    'checked': false
                }
            ]
        },
        {
            'unit': '2',
            'title': 'Project Management',
            'desc': 'Project management is a broad field that involves supervising all parts of a project, from the initial design to the final product. In construction, project managers oversee the entire process of new building projects.',
            'total_time': '1h 16m',
            'finished': false,
            'resource': [
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'video',
                    'checked': false
                },
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'file',
                    'checked': false
                }
            ]
        },
        {
            'unit': '3',
            'title': 'Risk Management',
            'desc': 'Project management involves identifying and mitigating risks that could impact the success of a project. In construction, risk management is especially important due to the high costs and potential for accidents.',
            'total_time': '1h 16m',
            'finished': false,
            'resource': [
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'video',
                    'checked': false
                },
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'file',
                    'checked': false
                }
            ]
        },
        {
            'unit': '4',
            'title': 'Construction Management',
            'desc': 'Construction management involves overseeing the entire construction process, from planning to completion. This includes managing budgets, schedules, and personnel.',
            'total_time': '1h 16m',
            'finished': false,
            'resource': [
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'video',
                    'checked': false
                },
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'file',
                    'checked': false
                }
            ]
        },
        {
            'unit': '5',
            'title': 'Problem Solving',
            'desc': 'Problem solving is a critical skill in construction management. Project managers must be able to identify problems and develop effective solutions to keep projects on track.',
            'total_time': '1h 16m',
            'finished': false,
            'resource': [
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'video',
                    'checked': false
                },
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'file',
                    'checked': false
                }
            ]
        },
        {
            'unit': '6',
            'title': 'Process Analysis',
            'desc': 'Process analysis involves breaking down complex processes into smaller, more manageable steps. In construction management, this can help identify areas for improvement and increase efficiency.',
            'total_time': '1h 16m',
            'finished': false,
            'resource': [
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'video',
                    'checked': false
                },
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'file',
                    'checked': false
                }
            ]
        },
        {
            'unit': '7',
            'title': 'Supply Chain and Logistics',
            'desc': 'Supply chain and logistics management involves coordinating the flow of materials, equipment, and personnel to ensure that construction projects are completed on time and within budget.',
            'total_time': '1h 16m',
            'finished': false,
            'resource': [
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'video',
                    'checked': false
                },
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'file',
                    'checked': false
                }
            ]
        },
        {
            'unit': '8',
            'title': 'Change Management',
            'desc': 'Change management involves managing changes to a project\'s scope, schedule, or budget. In construction, change management is critical to ensure that projects stay on track and within budget.',
            'total_time': '1h 16m',
            'finished': false,
            'resource': [
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'video',
                    'checked': false
                },
                {
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'file',
                    'checked': false
                }
            ]
        },
    ],
}

export const course_material: unit_resource = {
    '1': [
        {
            'title': 'Summary Quiz',
            'description': "This quiz touches all the topics that have been taught in the past lessons",
            'passPercentage': 'none',
            'type': 'video'
        },
        {
            'title': 'Summary Quiz',
            'description': "This quiz touches all the topics that have been taught in the past lessons",
            'passPercentage': '75',
            'type': 'quiz'
        }
    ]
}

export const quiz:single_course_quiz = {
    '1': [
        {
            question: 'what is the name of this course?',
            options: [
                "Introduction to Science",
                "Introduction to Technology",
                "Introduction to Construction Management",
                "None"
            ],
            answer: 2
        },
        {
            question: 'what is the name of this course?',
            options: [
                "Introduction to Science",
                "Introduction to Technology",
                "Introduction to Construction Management",
                "None"
            ],
            answer: 2
        },
        {
            question: 'what is the name of this course?',
            options: [
                "Introduction to Science",
                "Introduction to Technology",
                "Introduction to Construction Management",
                "None"
            ],
            answer: 2
        },
    ]
}

export const home_page_data: home_data_type = {
    site_name: {
        en: 'YaYa Academy',
        html: null
    },
    site_description: {
        en: 'Learn the skills you need to build your dream home or start a career in construction.',
        html: `<p className="p-2 lg:text-2xl md:text-left text-center text-base font-light">
              Learn the skills you need to
              <span className="text-highlight-foreground">build</span> your
              dream home or start a career in construction.
            </p>`
    },
    self_intro_title: {
        en: 'Hello',
        html: `<p className="text-highlight-foreground text-lg font-semibold">Hello</p>`
    },
    self_intro_pharagraph: {
        en: "Are you feeling stuck or overwhelmed in your construction skills? Don't worry, I've got your back! Together, we'll work to level up your skills, increase your earning potential, andbuild a brighter future.",
        html: `<p className="text-center">
          Are you feeling stuck or overwhelmed in your construction skills?
          Don&apos;t worry, I&apos;ve got your back! Together, we&apos;ll work
          to level up your skills, increase your earning potential, and
          <span className="text-highlight-foreground">build</span> a brighter
          future.
        </p>`
    },
    recent_courses_subtitle: {
        en: "Learn the latest lessons for a professional",
        html: `<p className="flex-1 lg:ml-5 text-center font-light text-sm lg:text-base opacity-80">
            Learn the latest lessons for a professional
          </p>`
    },
    popular_courses_subtitle: {
        en: "Learn the latest lessons for a professionals",
        html: `<p className="flex-1 lg:ml-5 text-center font-light text-sm lg:text-base opacity-80">
            Learn the latest lessons for a professionals
          </p>`
    }
}

// user types
export type user_type = 'admin' | 'super_admin' | 'student';

// users
export type single_user_type = {
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    password: string,
    description?: string,
    user_type: user_type,
}

export type users = {
    [id: string] : single_user_type
}

export const users: users = {
    '1': {
        first_name: 'Yodahe',
        last_name: 'Ketema',
        email: 'ketemayodahe@gmail.com',
        phone_number: '0983325216',
        user_type: 'super_admin',
        password: 'passpass'
    },
    '2': {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        phone_number: '1234567890',
        user_type: 'student',
        password: 'secret123'
    },
    '3': {
        first_name: 'Alice',
        last_name: 'Smith',
        email: 'alice.smith@example.com',
        phone_number: '9876543210',
        user_type: 'student',
        password: 'qwerty456'
    },
    '4': {
        first_name: 'Michael',
        last_name: 'Johnson',
        email: 'michael.johnson@example.com',
        phone_number: '5551234567',
        user_type: 'student',
        password: 'abc123'
    },
    '5': {
        first_name: 'Emily',
        last_name: 'Brown',
        email: 'emily.brown@example.com',
        phone_number: '9879876543',
        user_type: 'student',
        password: 'password123'
    },
    '6': {
        first_name: 'Daniel',
        last_name: 'Lee',
        email: 'daniel.lee@example.com',
        phone_number: '1112223333',
        user_type: 'student',
        password: 'securepass'
    },
    '7': {
        first_name: 'Sophia',
        last_name: 'Garcia',
        email: 'sophia.garcia@example.com',
        phone_number: '4445556666',
        user_type: 'student',
        password: 'hello123'
    },
    '8': {
        first_name: 'Oliver',
        last_name: 'Martinez',
        email: 'oliver.martinez@example.com',
        phone_number: '7778889999',
        user_type: 'student',
        password: 'welcome1'
    },
    '9': {
        first_name: 'Isabella',
        last_name: 'Nguyen',
        email: 'isabella.nguyen@example.com',
        phone_number: '3334445555',
        user_type: 'student',
        password: 'testpass'
    },
    '10': {
        first_name: 'Liam',
        last_name: 'Kim',
        email: 'liam.kim@example.com',
        phone_number: '6667778888',
        user_type: 'student',
        password: 'mysecret'
    }
};
