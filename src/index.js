import './style.css';
import 'animate.css';
import myProfileImg from './Assets/Images/profile.jpg';
import { ImageController } from './classes/imageController';
import { AnimationController } from './classes/animationController';

ImageController.addImg(document.querySelector('.my-profile > img'), myProfileImg);
AnimationController.keyHightLightAnim("Tech Enthusiast");
