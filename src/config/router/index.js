import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import Timeline from '../../pages/timeline'
import Profil from '../../pages/Profil'
import ProfilStar from '../../pages/ProfilStar'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'

const LoginStack = createSwitchNavigator(
  {
    Login,
    Signup
  },
  {
    headerMode:'none',
    initialRouteName:'Login'
  }
)

const TimelineStack = createStackNavigator(
   {
     Timeline,
   },
   {
     headerMode:'none',
     initialRouteName:'Timeline'
   }
)
const ProfilStack = createStackNavigator(
  {
    Profil,
    ProfilStar,
  },
  {
    headerMode:'none',
    initialRouteName:'Profil'
  }
)
const Router = createSwitchNavigator(
  {
    TimelineStack,
    ProfilStack,
    LoginStack
  },
  {
    headerMode:'none',
    initialRouteName:'TimelineStack'
  }
);
export default createAppContainer(Router);
  
  