import React, { FC } from 'react'
import { Content, DotDivider, LikeCommentInfo, Location, PostItem, Profile, ProfileName, ProfilePicture, UserDisplayInfo, ProfileSection, Time, UserLocation, LikeCommentSection, LikeButton, CommentButton } from './post-styling'
import profilePicture from '../../photos/efuse.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCommentDots, faHeart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { IPost } from './postsReducer'
import { useDispatch } from 'react-redux'
import { likePost } from './actionsSlice'

type PostProps = {
  post: IPost
}



export const Post:FC<PostProps> = ({ post }: PostProps) => {
    const dispatch = useDispatch();
  return (
    <PostItem data-testid='post'>
        <UserDisplayInfo data-testid='user-display-info'>
            <ProfileSection>
                <ProfilePicture data-testid='post-profile-picture' src={profilePicture}></ProfilePicture>
                <Profile data-testid='profile-area'>
                    <ProfileName data-testid='user-name'>Efuse User</ProfileName>
                    <Location data-testid='location-section'>
                        <FontAwesomeIcon data-testid='map-marker' icon={faMapMarkerAlt} />
                        <UserLocation data-testid='user-location'>OH, USA</UserLocation>
                    </Location>
                    <Time data-testid='posted-time'>1 minute ago</Time>
                </Profile>
            </ProfileSection>
            <Content data-testid='post-value'>{post.text}</Content>
            <LikeCommentInfo>
                <span data-testid='post-likes'>{post.likes} Likes</span>
                    <DotDivider>&#183;</DotDivider>
                <span data-testid='post-comments'>0 Comments</span>
            </LikeCommentInfo>
        </UserDisplayInfo>
        <LikeCommentSection data-testid='like-comment-section'>
            <LikeButton data-testid='like-btn' onClick={() => dispatch(likePost(123))} className={`${post.likes && 'liked'}`}>
                <FontAwesomeIcon icon={faHeart}/>
                Like
            </LikeButton>
            <CommentButton data-testid='comment-btn'>
                <FontAwesomeIcon icon={faCommentDots}/>
                Comment
            </CommentButton>
        </LikeCommentSection>
    </PostItem>
  )
}