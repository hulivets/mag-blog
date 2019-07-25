import React from 'react'
import SidebarTopStoriesListItem from './SidebarTopStoriesListItem'


const SidebarTopStoriesList = ({
    postFilter
}) => {
    return (
        <div className="row">
            {
                postFilter.slice(0, 3).map(({
                    id,
                    title,
                    shortDescription,
                    image,
                    category,
                }) => (
                    <div className="col-12" key={id}>
                        <SidebarTopStoriesListItem 
                            title={title}
                            shortDescription={shortDescription}
                            image={image}
                            category={category}
                            id={id}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default SidebarTopStoriesList