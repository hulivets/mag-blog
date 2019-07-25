import React from 'react'
import posts from '../PostList/posts'
import SidebarArchivesListItem from './SidebarArchivesListItem';


const SidebarArchivesList = () => {
    return (
        <div className="row">
            {
                posts.reverse().slice(0, 7).map(({
                    id,
                    title,
                    category,
                }) => (
                    <div className="col-12" key={id}>
                        <SidebarArchivesListItem 
                            title={title}
                            category={category}
                            id={id}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default SidebarArchivesList