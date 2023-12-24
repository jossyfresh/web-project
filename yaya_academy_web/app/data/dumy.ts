

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
export type courses_unit_type = {
    [id: string]: single_unit_type[]
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
                    'title': 'planning',
                    'minutes': '30m',
                    'type': 'file',
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

