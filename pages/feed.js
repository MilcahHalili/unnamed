import Post from '../components/Post'
import { Main, Div, TextArea, BtnContainer, UploadBtn, PostBtn } from '../styles/FeedStyle'

const Feed = () => {
  return (
    <Main>
      <Div>
        <TextArea />
        <BtnContainer >
          <div>
            <UploadBtn />
            <UploadBtn />
          </div>
          <PostBtn>
            POST
          </PostBtn>
        </BtnContainer >
        <Post />
      </Div>
    </Main>
  )
}

export default Feed