import React, {useState} from 'react'
import PostsListItem from './PostsListItem';
import {keys} from 'lodash'



const PostsList = ({
    postsFilter,
    focusHeader
}) => {
    const [postsQuantity, addPostsQuantity] = useState(3);
    return (
        <div className="c-main">
            <div className="row">
                {
                    postsFilter.slice(0, postsQuantity).map(({
                        id,
                        postDay,
                        postMonth,
                        title,
                        shortDescription,
                        category,
                        image
                    }) => (
                        <div className="col-12" key={id}>
                            <PostsListItem 
                                postDay={postDay}
                                postMonth={postMonth}
                                title={title}
                                shortDescription={shortDescription}
                                category={category}
                                image={image}
                                id={id}
                                focusHeader={focusHeader}
                            />
                        </div>
                    ))
                }
            </div>
            {
                postsQuantity >= keys(postsFilter).length ? 
                    null :  <button className="show-more-btn" onClick={() => addPostsQuantity(postsQuantity + 3)}
                    >Show more</button>
            }
            {
                postsQuantity === 3 ?
                    null: <button className="show-less-btn" onClick={() => addPostsQuantity(postsQuantity - 3)}
                    >Show less</button>  
            }  
        </div>
    )
}

export default PostsList