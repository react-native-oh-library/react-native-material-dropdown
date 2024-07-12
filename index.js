import { Dropdown as IOSAndAndroid } from 'react-native-material-dropdown';
import DropdownHarmony from './src/components/dropdown';
import { Platform } from 'react-native';

const isIosAndroid = (() => Platform.OS === 'ios' || Platform.OS === 'android')();

const Dropdown  = isIosAndroid ? IOSAndAndroid : DropdownHarmony;
export { Dropdown  };
