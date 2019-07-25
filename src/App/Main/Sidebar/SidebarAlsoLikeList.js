import React from 'react'
import {movieFilter} from '../PostList/posts'
import SidebarAlsoLikeListItem from './SidebarAlsoLikeListItem';


const SidebarAlsoLikeList = () => {
    return (
        <div className="row">
            {
                movieFilter.slice(0,3).map(({
                    title,
                    image,
                    id,
                    category,
                }) => (
                    <div className="col-12" key={id}>
                        <SidebarAlsoLikeListItem 
                            title={title}
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

export default SidebarAlsoLikeList