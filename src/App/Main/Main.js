import React from 'react'
import TopStoriesList from './TopStories/TopStoriesList';
import {mainPageFilter, movieFilter, tvNewsFilter, travelFilter, fashionFilter, archivePageFilter} from './PostList/posts'
import PostsList from './PostList/PostsList';
import {Route} from 'react-router-dom'
import PostPage from './PostPage/PostPage';
import Sidebar from './Sidebar/Sidebar';
import PageUnderConstuction from './PageUnderConstriction/PageUnderConstruction';
import Sticky from 'react-sticky-el'


const Main = () => {

        return (
            <div className="container">   
                <Route exact path="/" component={TopStoriesList}></Route>
                <div className="row">
                    <div className="col-8">
                        <Route exact path="/" render={() => (
                                <PostsList 
                                    postsFilter = {mainPageFilter}
                                />
                            )}>
                        </Route>
                        <Route exact path="/movie" render={() => (
                                <PostsList 
                                    postsFilter = {movieFilter}
                                />
                            )}>
                        </Route>
                        <Route exact path="/television" render={() => (
                                <PostsList 
                                    postsFilter={tvNewsFilter}
                                />
                            )}>
                        </Route>
                        <Route exact path="/travel" render={() => (
                                <PostsList 
                                    postsFilter={travelFilter}
                                />
                        )}>
                        </Route>
                        <Route exact path="/fashion" render={() => (
                            <PostsList 
                                postsFilter={fashionFilter}
                            />
                        )}>
                        </Route>
                        <Route exact path="/archives" render={() => (
                                <PostsList 
                                    postsFilter={archivePageFilter}
                                />
                            )}>
                        </Route>
                        <Route exact path="/contact-us" component={PageUnderConstuction}></Route>
                        <Route path="/movie/id=:id" component={PostPage}></Route>
                        <Route path="/television/id=:id" component={PostPage}></Route>
                        <Route path="/travel/id=:id" component={PostPage}></Route>
                        <Route path="/archives/id=:id" component={PostPage}></Route>  
                        <Route path="/fashion/id=:id" component={PostPage}></Route>      
                    </div>
                    <div className="col-4">
                        <Sticky topOffset={0} bottomOffset={0}>
                        <Sidebar />
                        </Sticky>
                        
                    </div>
                </div>
            </div>
        )
    }

    


export default Main