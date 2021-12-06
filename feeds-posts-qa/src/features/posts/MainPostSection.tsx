import React, { useState } from 'react'
import { MainProfilePicture, MainPostInput, MainInputSection, MainSection, MainForm, PostItButton, PostItSection, SectionDivider } from './MainPostSection-styling'
import profilePicture from '../../photos/efuse.png'
import { useDispatch } from 'react-redux'
import { addPost } from './actionsSlice'


export const MainPostSection = (): JSX.Element => {
  const [textValue, setTextValue] = useState("")
  const dispatch = useDispatch()

  const textChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => setTextValue(event.target.value)
  const onEnterKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {event.key === 'Enter' && event.preventDefault()}

  const onPostItClick = () => {
    if(textValue){
      dispatch(addPost(textValue))
    }
  }

  return (
    <MainSection data-testid='main-post-section'>
      <MainForm>
        <MainInputSection>
          <MainProfilePicture data-testid='profile-picture' src={ profilePicture } alt='profile' />
          <MainPostInput
            data-testid='text-input'
            type='text'
            placeholder='What is on your mind?'
            id='postText'
            value={textValue}
            onKeyDown={ onEnterKeyPressed }
            onChange={ textChangedEvent }>
          </MainPostInput>
        </MainInputSection>
        <SectionDivider data-testid='divider'></SectionDivider>
        <PostItSection data-testid='post-btn-section'>
          <PostItButton data-testid='post-btn' type='button' onClick={ onPostItClick }>Post</PostItButton>
        </PostItSection>
      </MainForm>
    </MainSection>
  )
}