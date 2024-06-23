/* import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '01d1be5f-596e-4ac6-9dee-00e7e107882d', 
    props.user.username, 
    props.user.secret
    );

    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style= {{height : '100%'}} />
        </div>
    )
}
export default ChatsPage */

import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
      return (
          <div style={{height: '100vh'}}>
              <PrettyChatWindow 
                projectId='01d1be5f-596e-4ac6-9dee-00e7e107882d'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
              
              
            />
          </div>
      )
  }
  export default ChatsPage