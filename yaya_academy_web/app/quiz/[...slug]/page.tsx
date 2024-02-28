import { course_material, single_unit_resource } from '@/app/data/dumy';
import React from 'react'

function page({ params }: { params: { slug: any } }) {
	const unit_id = params.slug[0];
    const resource_id = params.slug[1];
    const quiz: single_unit_resource = course_material[unit_id][resource_id];
    
	return <div>page</div>;
}

export default page