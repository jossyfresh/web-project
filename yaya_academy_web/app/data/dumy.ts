

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
]
