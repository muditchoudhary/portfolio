import './style.css';
import 'animate.css';
import myProfileImg from './Assets/Images/profile.jpg';

import { ImageController } from './classes/imageController';

ImageController.addImg(document.querySelector('.my-profile > img'), myProfileImg);
