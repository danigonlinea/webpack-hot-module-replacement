import '../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import '../assets/styles/styles.scss';
import webpackLogo from '../assets/images/webpackLogo.png';

let messageWelcome = 'Live-Reload and Hot Replacement Module Example';

const basicTemplate = `
    <img src="${webpackLogo}" alt="Webpack LogoSSsss">
    <h1> ${messageWelcome} </h1>
  `;

document.body.innerHTML = basicTemplate;

if (module.hot) {
  module.hot.accept();
}
