import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const BottomTab = createBottomTabNavigator();

export default function Home() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Posts" component={PostsScreen} />
      <BottomTab.Screen name="Create" component={CreatePostsScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
