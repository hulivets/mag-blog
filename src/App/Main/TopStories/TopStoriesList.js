import React from 'react'
import './TopStoriesList.css'

import {movieFilter, tvNewsFilter, travelFilter} from '../PostList/posts'
import TopStoriesListItem from './TopStoriesListItem';


const TopStoriesList = () => {
    return (
        <div className="top-post-wrap">
            <div className="row">
                <div className="top-stories">
                    <p>top stories</p>
                </div>
                {
                    movieFilter.slice(movieFilter.length-1).map(({
                        id,
                        image,
                        title,
                        category,
                        categoryStyle,
                    }) => (
                        <div className="col-4" key={id}>
                            <TopStoriesListItem
                                image = {image}
                                title = {title}
                                category = {category}
                                id = {id}
                                categoryStyle = {categoryStyle}
                            />
                        </div>
                    ))
                }
                {
                    tvNewsFilter.slice(tvNewsFilter.length-1).map(({
                        id,
                        image,
                        title,
                        category,
                        categoryStyle,
                    }) => (
                        <div className="col-4" key={id}>
                            <TopStoriesListItem
                                image = {image}
                                title = {title}
                                category = {category}
                                id = {id}
                                categoryStyle = {categoryStyle}
                            />
                        </div>
                    ))
                }
                {
                    travelFilter.slice(travelFilter.length-1).map(({
                        id,
                        image,
                        title,
                        category,
                        categoryStyle,
                    }) => (
                        <div className="col-4" key={id}>
                            <TopStoriesListItem
                                image = {image}
                                title = {title}
                                category = {category}
                                id = {id}
                                categoryStyle = {categoryStyle}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopStoriesList