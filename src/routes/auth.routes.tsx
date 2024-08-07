import { NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack'

import { SignUp } from '@screens/SignUp';
import { SignIn } from '@screens/SignIn';

type AuthRoutes = {
  singIn: undefined;
  signUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="singIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  )
}