import styled from 'styled-components'
import { Username, Img, P, BtnContainer, UploadBtn } from '../styles/FeedStyle'

const Post = () => {
  return (
    <>
      <Username>Unnamed</Username>
      <Img src="http://placekitten.com/800/400" />
      <P>Playing with balls of wool sleep everywhere, but not in my bed but i like frogs and 0 gravity. Get scared by sudden appearance of cucumber i vomit in the bed in the middle of the night bawl under human beds swipe at owner's legs i do no work yet get food, shelter, and lots of stuff just like man who lives with us for stare at owner accusingly then wink for stare out cat door then go back inside. Touch water with paw then recoil in horror. Love fish meow for food, then when human fills food dish, take a few bites of food and continue meowing but mew. Stares at human while pushing stuff off a table knock over christmas tree but chase the pig around the house and really likes hummus mice cat sit like bread, sweet beast.</P>
      <BtnContainer>
        <div>
          <UploadBtn />
          <UploadBtn />
        </div>
      </BtnContainer>
    </>
  )
}

export default Post