import './style.css';
import 'animate.css';
import myProfileImg from './Assets/Images/profile.jpg';
import { ImageController } from './classes/imageController';
import { AnimationController } from './classes/animationController';
import {NavigationController} from './classes/navigationController'
import {Projects} from './classes/projects';
import githubIcon from './Assets/Icons/github.svg'
import twitterIcon from './Assets/Icons/twitter.svg'
import linkedinIcon from './Assets/Icons/linkedin.svg'
import instagramIcon from './Assets/Icons/instagram.svg'

ImageController.addImg(document.querySelector('.my-profile > img'), myProfileImg);
AnimationController.keyHightLightAnim("Tech Enthusiast");
NavigationController.navBarToggler();
Projects.madeProjedtSection();

// Adding social icons
const socialIcons = [githubIcon, twitterIcon, linkedinIcon, instagramIcon];
for (let i = 0; i < 4; i++) {
    ImageController.addImg(document.querySelector(`#social${i + 1}`), socialIcons[i]);
}



