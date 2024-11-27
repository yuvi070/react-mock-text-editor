import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Main,
  Body,
  Div1,
  Div2,
  MainHeading,
  Image,
  MiniDiv,
  Div3,
  Button,
} from './styled'

class Home extends Component {
  render() {
    return (
      <Main>
        <Body>
          <Div1>
            <MainHeading>Text Editor</MainHeading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Div1>
          <Div2>
            <MiniDiv>
              <Div3>
                <Button type="button">
                  <VscBold />
                </Button>
                <Button type="button">
                  <GoItalic />
                </Button>
                <Button type="button">
                  <AiOutlineUnderline />
                </Button>
              </Div3>
            </MiniDiv>
          </Div2>
        </Body>
      </Main>
    )
  }
}

export default Home
