// import React, { Component } from 'react';
// import ChatButton from "./components/ChatButton"
// import LogIn from './components/LogIn'
// import NewGroup from './components/NewGroup'
// import ChatPage from './components/ChatPage'
// import './App.css';
// import ChatGroup from './components/ChatGroup';
// import NewFriendPage from './components/NewFriendPage'
// import ShoppingBag from './components/ShoppingBag'
// import Settings from './components/Settings'
// import UserProfile from './components/UserProfile'
// import { connect } from 'react-redux'
// import AdminPage from './components/AdminPage';
// import Messages from './components/Messages'
// import posed, { PoseGroup } from 'react-pose';



// class App extends Component {

//   state = {
//     logIn: false,
//     Profile: false,
//     New: false,
//     activeChat: false,
//     Info: false,
//     newFriend: false,
//     bag: false,
//     settings: false,
//     isVisible: false 
//   }
//   MainButtonClick = () => {
//     if (this.state.logIn === false) {
//       this.setState({ logIn: true,isVisible:true })


//     } else {
//       this.setState({ logIn: false,isVisible:false })

//     }

//   }
//   userProfile = () => {
//     this.state.Profile ? this.setState({ logIn: false, Profile: false }) : this.setState({ Profile: true, logIn: false })
//   }
//   OpenNewGroup = () => {
//     this.state.New ? this.setState({ New: false, Profile: false }) : this.setState({ New: true, Profile: false })
//   }

//   Active = () => {
//     this.state.activeChat ? this.setState({ activeChat: false, Profile: false }) : this.setState({ activeChat: true, Profile: false })
//   }

//   groupInfo = () => {
//     this.state.Info ? this.setState({ activeChat: false, Info: false }) : this.setState({ activeChat: false, Info: true })

//   }

//   cGroupClose = () => {
//     this.setState({ activeChat: true, Info: false })
//   }
//   scrollDownCgroup = () => {
//     this.setState({ Info: false })
//   }

//   inviteFriend = () => {
//     this.state.newFriend ? this.setState({ newFriend: false, Info: false }) : this.setState({ newFriend: true, Info: false })
//     console.log(this.state.newFriend)
//   }

//   chooseBag = (id) => {
//     this.props.users.filter(user => user.id == id)
//   }
//   bagPage = () => {
//     this.state.bag ? this.setState({ bag: false, Info: false }) : this.setState({ bag: true, Info: false })
//   }
//   bagClose = () => {
//     this.setState({ bag: false })
//   }
//   userSetting = () => {
//     this.state.settings ? this.setState({ settings: false, Profile: true }) : this.setState({ settings: true, Profile: false })
//     console.log(this.state.settings)
//   }



//   render() {
//     const { Profile, New, activeChat, Info, newFriend, bag, settings,isVisible } = this.state
//     return (

//       <div className="App" >

//           {this.state.logIn? 
//             <LogIn  MainButtonClick={this.MainButtonClick} userProfile={this.userProfile} isVisible={isVisible} />: Profile ? <UserProfile userSetting={this.userSetting} userProfile={this.userProfile} OpenNewGroup={this.OpenNewGroup} Active={this.Active} /> :
//              New ? <NewGroup OpenNewGroup={this.OpenNewGroup} /> : activeChat ? <ChatPage Active={this.Active} groupInfo={this.groupInfo} /> :
//                Info ? <ChatGroup cGroupClose={this.cGroupClose} scrollDownCgroup={this.scrollDownCgroup} inviteFriend={this.inviteFriend} bagPage={this.bagPage} /> :
//                  newFriend ? <NewFriendPage inviteFriend={this.inviteFriend} /> : bag ? <ShoppingBag bagClose={this.bagClose} /> : settings ? <Settings userSetting={this.userSetting}/>:
//                    <ChatButton MainButtonClick={this.MainButtonClick} />}

//         {/* <LogIn /> */}
//         {/* <NewGroup /> */}
//         {/* <ChatPage /> */}
//         {/* <ChatGroup /> */}
//         {/* <NewFriendPage /> */}
//         {/* <ShoppingBag /> */}
//         {/* <Settings /> */}
//         {/* <AdminPage /> */}
//         <button onClick={this.MainButtonClick}>hello</button>

//         <Messages isVisible={this.state.isVisible}/>



//       </div>

//     );
//   }
// }


// const mapStateToProps = (state) => {
//   return {
//     users: state.userInfo
//   }
// }




// export default connect(mapStateToProps)(App)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import ChatButton from "./components/ChatButton"
import LogIn from './components/LogIn'
import NewGroup from './components/NewGroup'
import ChatPage from './components/ChatPage'
import './App.css';
import ChatGroup from './components/ChatGroup';
import NewFriendPage from './components/NewFriendPage'
import ShoppingBag from './components/ShoppingBag'
import Settings from './components/Settings'
import UserProfile from './components/UserProfile'
import { connect } from 'react-redux'
import AdminPage from './components/AdminPage';
import Messages from './components/Messages'
import posed, { PoseGroup } from 'react-pose';


class App extends Component {

  state = {
    logIn: false,
    Profile: false,
    New: false,
    activeChat: false,
    Info: false,
    newFriend: false,
    bag: false,
    settings: false,
    isVisible: false,
    messageNumber: false,
    AnimClassName: "",
    animuserProfile: "",
    newPageAnim: "",
    activeChatAnim: "",
    groupInfoAnim: "",
    newFriendAnim: "",
    closebagAnim: "",
  }
  openMessage = () => {
    if (this.state.isVisible === false) {
      console.log(167);
      this.setState({ isVisible: true });
    } else {
      return

    }
  }
  MainButtonClick = () => {
    if (this.state.logIn === false) {
      this.setState({ logIn: true, isVisible: true, messageNumber: true, AnimClassName: "slide_up", })


    } else {
      setTimeout(() => { this.setState({ logIn: false }) }, 400)
      this.setState({ AnimClassName: "slide_down", })

    }

  }
  userProfile = () => {
    if (this.state.Profile) {
      setTimeout(() => { this.setState({ logIn: false, Profile: false, }) }, 400)
      this.setState({ animuserProfile: "Slide_down_user" })
    } else { this.setState({ Profile: true, logIn: false, animuserProfile: "" }) }
  }
  OpenNewGroup = () => {
    if (this.state.New) {
      setTimeout(() => { this.setState({ New: false, Profile: false }) }, 300)
      this.setState({ newPageAnim: "Slide_down_new_group" })
    } else { this.setState({ New: true, Profile: false, newPageAnim: "" }) }
  }

  Active = () => {
    if (this.state.activeChat) {
      setTimeout(() => { this.setState({ activeChat: false, Profile: false }) }, 400)
      this.setState({ activeChatAnim: "Slide_down_new_group" })
    } else { this.setState({ activeChat: true, Profile: false, activeChatAnim: "" }) }
  }

  groupInfo = () => {
    this.state.Info ? this.setState({ activeChat: false, Info: false }) : this.setState({ activeChat: false, Info: true })

  }

  cGroupClose = () => {
    this.setState({ activeChat: true, Info: false })
  }
  scrollDownCgroup = () => {
    if (this.state.Info) {
      setTimeout(() => { this.setState({ Info: false }) }, 400)
      this.setState({ groupInfoAnim: "Slide_down_new_group" })
    } else { this.setState({ groupInfoAnim: "" }) }
  }

  inviteFriend = () => {
    if (this.state.newFriend) {
      setTimeout(() => { this.setState({ newFriend: false, Info: false }) }, 400)
      this.setState({ newFriendAnim: "Slide_down_new_group" })
    } else { this.setState({ newFriend: true, Info: false, newFriendAnim: "" }) }
  }

  chooseBag = (id) => {
    this.props.users.filter(user => user.id == id)
  }
  bagPage = () => {
    this.state.bag ? this.setState({ bag: false, Info: false }) : this.setState({ bag: true, Info: false })
  }
  bagClose = () => {
    if (this.state.bag) {
      setTimeout(() => { this.setState({ bag: false }) }, 400)
      this.setState({ closebagAnim: "Slide_down_new_group" })
    } else { this.setState({ closebagAnim: "" }) }

  }
  userSetting = () => {
    this.state.settings ? this.setState({ settings: false, Profile: true }) : this.setState({ settings: true, Profile: false })
    console.log(this.state.settings)
  }

  openUser =() =>{
    this.setState({ settings: false, Profile: true, logIn: false,  New: false, activeChat: false, Info: false, newFriend: false, bag: false})
  }


  render() {
    console.log(this.state.closebagAnim)
    const { closebagAnim, Profile, New, activeChat, Info, newFriend, bag, settings, isVisible, messageNumber, AnimClassName, animuserProfile, newPageAnim, activeChatAnim, groupInfoAnim, newFriendAnim } = this.state
    return (

      <div className="App" onKeyPress={this.openMessage}>

        {this.state.logIn ?
          <LogIn MainButtonClick={this.MainButtonClick} userProfile={this.userProfile} isVisible={isVisible} AnimClassName={AnimClassName} /> : Profile ?
            <UserProfile userSetting={this.userSetting} userProfile={this.userProfile} OpenNewGroup={this.OpenNewGroup} Active={this.Active} animuserProfile={animuserProfile} /> :
            New ? <NewGroup openUser={this.openUser} OpenNewGroup={this.OpenNewGroup} newPageAnim={newPageAnim} /> : activeChat ? <ChatPage openUser={this.openUser} Active={this.Active} groupInfo={this.groupInfo} activeChatAnim={activeChatAnim} /> :
              Info ? <ChatGroup openUser={this.openUser} cGroupClose={this.cGroupClose} scrollDownCgroup={this.scrollDownCgroup} inviteFriend={this.inviteFriend} bagPage={this.bagPage} groupInfoAnim={groupInfoAnim} /> :
                newFriend ? <NewFriendPage inviteFriend={this.inviteFriend} newFriendAnim={newFriendAnim} /> : bag ? <ShoppingBag bagClose={this.bagClose} closebagAnim={closebagAnim} /> : settings ? <Settings userSetting={this.userSetting} /> :
                  <ChatButton MainButtonClick={this.MainButtonClick} messageNumber={messageNumber} />}

        <Messages isVisible={isVisible} />



      </div>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.userInfo
  }
}




export default connect(mapStateToProps)(App)