

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
        imageUrl: 'https://www.bing.com/th?id=OIP._W0Qgix-Pw-QrSGD3JAFpgHaEs&w=126&h=88&c=8&rs=1&qlt=70&pcl=1b1a19&o=6&pid=3.1&rm=2',
        title: "Construction Management",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        videos: '20 Videos',
        duration: '3 Months'
    },
    {
        id: 2,
        imageUrl: 'https://www.bing.com/th?id=OIP.39E4aW5C0LUZI4tsZL8IZQHaEu&w=126&h=88&c=8&rs=1&qlt=70&pcl=1b1a19&o=6&pid=3.1&rm=2',
        title: "Building Information Modeling",
        desc: 'Learn how to use BIM software to design, construct, and operate buildings and infrastructure.',
        videos: '15 Videos',
        duration: '2 Months'
    },
    {
        id: 3,
        imageUrl: 'https://www.bing.com/th?id=OIP.gF1XPCVLkPx0DO3rXMEf6gHaEc&w=145&h=102&c=8&rs=1&qlt=70&pcl=1b1a19&o=6&pid=3.1&rm=2',
        title: "Sustainable Construction",
        desc: 'Discover the principles and practices of green building and how to apply them to your projects.',
        videos: '18 Videos',
        duration: '2.5 Months'
    },
    {
        id: 4,
        imageUrl: 'https://www.bing.com/th?id=OIP.KZuttIPMK2S6Ur5n14Vx8wHaHH&w=107&h=102&c=8&rs=1&qlt=70&pcl=1b1a19&o=6&pid=3.1&rm=2',
        title: "Construction Project Management",
        desc: 'Master the skills and knowledge needed to manage complex construction projects from start to finish.',
        videos: '22 Videos',
        duration: '3.5 Months'
    },
    {
        id: 5,
        imageUrl: 'https://www.bing.com/th?id=OIP.GSmEdd4pvAgO2OmGNhiJqQHaFO&w=157&h=94&c=8&rs=1&qlt=70&pcl=1b1a19&o=6&pid=3.1&rm=2',
        title: "Construction Safety and Health",
        desc: 'Learn how to identify, prevent, and control hazards in the construction industry.',
        videos: '12 Videos',
        duration: '1.5 Months'
    }
]
