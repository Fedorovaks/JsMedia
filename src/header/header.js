
import './header.scss'

const Header = () => {
    const SiteHead = document.createElement('header');
    SiteHead.className = 'site-head';

    const Logo = document.createElement('img');
    Logo.src = 'pictures/logo.png';

    SiteHead.appendChild(Logo);

    return SiteHead
}

export default Header