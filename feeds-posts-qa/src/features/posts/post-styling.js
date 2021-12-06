import styled from 'styled-components'

export const PostItem = styled.section`
    background: #ffffff;
    border-radius: 8px;
`

export const UserDisplayInfo = styled.div`
    padding: 20px 20px 10px 20px;
`

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
`

export const ProfilePicture = styled.img`
    width: 50px;
`

export const ProfileName = styled.div`
    color: #4E4E5B;
    font-weight: bold; 
    font-size: 7px;
`

export const Location = styled.div`
    display:flex;
    color: #5286F2;
    font-size: 12px;
`

export const UserLocation = styled.div`
    margin-left: 5px;
    font-size: 10px;
    font-weight: bold;
`

export const Time = styled.span`
    font-size: 25px;
    color: #8494AB;
`

export const Content = styled.p`
    margin-top: 10px;
    font-size: 15px;
`

export const LikeCommentInfo = styled.div`
    color: #979AA8;
    font-size: 12px;
`

export const LikeCommentSection = styled.div`
    background: #eee;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 10px 20px;
    display: flex;
    
`
export const LikeButton = styled.div`
    font-size: 12px;
    color: #888;
    cursor: pointer;
    margin-right: 20px;
    user-select: none;
    >svg{
        margin-right: 5px;
    }
    &.liked{
        color: aquamarine; 
    }
`
export const CommentButton = styled.div`
    font-size: 12px;
    color: #888;
    user-select: none;
    cursor: pointer;
    >svg{
        margin-right: 5px;
    }
`

export const DotDivider = styled.span`
    font-weight: 900;
    margin-right: 5px;
    margin-left: 5px;
`
