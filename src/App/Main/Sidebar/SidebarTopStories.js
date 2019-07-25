import React, {Component} from 'react'
import SidebarTopStoriesList from './SidebarTopStoriesList';
import {movieFilter, tvNewsFilter, fashionFilter} from '../PostList/posts'


class SidebarTopStories extends Component {
    state = {
        fashionView: true,
        movieView: false,
        televisionView: false,
    }

    viewFashionPost = () => {
        this.setState({
            fashionView: true,
            movieView: false,
            televisionView: false,
        })
    }

    viewMoviePost = () => {
        this.setState({
            fashionView: false,
            movieView: true,
            televisionView: false,
        })
    }

    viewTelevisionPost = () => {
        this.setState({
            fashionView: false,
            movieView: false,
            televisionView: true,
        })
    }

    render () {
        return (
            <div className="sidebar-top-stories">
                <div className="sidebar-title bg-violet text-color-white">top stories</div>
                <div className="widget-btn">
                    {
                        this.state.fashionView ? 
                            <button className="widget-btn-fashion-marked bg-pink" onClick={
                                ()=>this.viewFashionPost()
                            }>fashion</button> : <button className="bg-pink"
                                onClick={()=>this.viewFashionPost()
                            }>fashion</button>
                    }
                    {
                        this.state.movieView ?
                            <button className="widget-btn-movie-marked bg-orange" 
                            onClick={
                                ()=>this.viewMoviePost()
                            }>movie</button> :
                            <button className="bg-orange" 
                                onClick={()=>this.viewMoviePost()
                            }>movie</button>
                    }
                    {
                        this.state.televisionView ?
                            <button className="widget-btn-television-marked bg-lightblue" 
                                onClick={()=>this.viewTelevisionPost()
                            }>television</button> :
                            <button className="bg-lightblue" 
                                onClick={()=>this.viewTelevisionPost()
                            }>television</button>
                    }
                </div>
                <div className="sidebar-top-stories-wrap">
                    {
                        ((this.state.fashionView) ? <SidebarTopStoriesList postFilter={fashionFilter} /> : null)
                    }
                </div>
                <div className="sidebar-top-stories-wrap">
                    {
                        ((this.state.movieView) ? <SidebarTopStoriesList postFilter={movieFilter} /> : null)
                    }
                </div>
                <div className="sidebar-top-stories-wrap">
                    {
                        ((this.state.televisionView) ? <SidebarTopStoriesList postFilter={tvNewsFilter} /> : null)
                    }
                </div>
            </div>
        )
    }
}

export default SidebarTopStories