

export type recent_course_type = {
    id: number,
    imageUrl: string,
    title: string,
    desc: string,
    videos: string,
    duration: string,
}

export const recent_courses: recent_course_type[] = [
    {
        id: 1,
        imageUrl: '/ConstructionManagement.jpg',
        title: "Construction Management",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem Lorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur adipisicing elit. lorem consectetur adipisicing elit. loremLorem ipsum dolor sit amet consectetur adipisicing elit. loremLorem ipsum dolor sit amet consectetur adipisicing elit. loremLorem ipsum dolor sit amet consectetur adipisicing elit. lorem',
        videos: '20 Videos',
        duration: '3 Months'
    },
    {
        id: 2,
        imageUrl: '/Buildinginf.jpg',
        title: "Building Information Modeling",
        desc: 'Learn how to use BIM software to design, construct, and operate buildings and infrastructure.',
        videos: '15 Videos',
        duration: '2 Months'
    },
    {
        id: 3,
        imageUrl: '/Teacher.jpg',
        title: "Sustainable Construction",
        desc: 'Discover the principles and practices of green building and how to apply them to your projects.',
        videos: '18 Videos',
        duration: '2.5 Months'
    },
    {
        id: 4,
        imageUrl: '/ConstructionManagement.jpg',
        title: "Construction Project Management",
        desc: 'Master the skills and knowledge needed to manage complex construction projects from start to finish.',
        videos: '22 Videos',
        duration: '3.5 Months'
    },
    {
        id: 5,
        imageUrl: '/ConstructionSafety.jpg',
        title: "Construction Safety and Health",
        desc: 'Learn how to identify, prevent, and control hazards in the construction industry.',
        videos: '12 Videos',
        duration: '1.5 Months'
    }
]
