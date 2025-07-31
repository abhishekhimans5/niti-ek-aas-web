import React, { useState } from 'react'
import './post.css'
import verified from '../../icons/verified.png'
import boost from '../../icons/boost.png'
import view from '../../icons/view.png'
import send from '../../icons/send.png'
import menu from '../../icons/menu.png'
import heart from '../../icons/heart.png'
import redheart from '../../icons/red_heart.png'


const Post = () => {
    const [isLiked,setIsLiked] = useState(false);

    const handleIsLiked = () => {
        setIsLiked(!isLiked);
    }
    const news = 'A 19-year-old Indian has just become a grandmaster, the highest ranking a chess player can achieve. Divya Deshmukh defeated some of the world’s best at the FIDE Women’s World Cup to land in the final, where she was set for an intergenerational clash with Koneru Humpy.'
  return (
    <div className="post-container">
        <div className="post-header">
            <div className="user-info">
                <div className="user-pic">AH</div>
                <div className="user-container">
                    <div className="user-name">
                        <div className="user-display-name">Abhishek Himanshu</div>
                        <div className="verified">
                            <img src={verified} alt='verified'/>
                        </div>
                    </div>
                    <div className="post-time-container">3 minutes ago</div>
                </div>
            </div>
            <div className="other-option">
                <div className="boost-post">
                    <img src={boost} alt='boost'/>
                </div>
                <div className="other-menu">
                    <img src={menu} alt='menu'/>
                </div>
            </div>
        </div>
        <div className="post-body">
            <div className="post-text">{news}</div>
            <div className="post-image"></div>
        </div>
        <div className="post-footer">
            <div className="total-boosts each-option">
                <img src={boost} alt='boost'/>
                <div className="count">100</div>
            </div>
            <div className="total-views each-option">
                <img src={view} alt='views'/>
                <div className="count">100</div>
            </div>
            <div className="total-likes each-option">
                <img src={isLiked ? redheart : heart} alt='likes'
                        onClick={handleIsLiked}/>
                <div className="count">23</div>
            </div>
            <div className="share each-option">
                <img src={send} alt='views'/>
            </div>
        </div>
    </div>
  )
}

export default Post