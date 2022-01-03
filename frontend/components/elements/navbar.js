import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

import { getButtonAppearance } from "utils/button";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import { MdMenu } from "react-icons/md";
import MobileNavMenu from "./mobile-nav-menu";
import ButtonLink from "./button-link";
import NextImage from "./image";
import CustomLink from "./custom-link";
import LocaleSwitch from "../locale-switch";

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter();
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);

  return (
    <>
      {/* The actual navbar */}
      <nav className="bg-yellow-10 border-yellow-30 z-50 fixed w-full">
        <div className="container sm:px-6 sm:py-3 md:px-8 md:py-6 flex flex-row items-center justify-between border border-yellow-30 border-b">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            <Link href="/">
              <a className="h-14 w-48">
                <NextImage width="120" height="54" media={navbar.logo} />
              </a>
            </Link>
            {/* List of links on desktop */}
          </div>
          <div className="flex">
            {/* Locale Switch Mobile */}
            {/* {pageContext.localizedPaths && (
              <div className="md:hidden">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )} */}
            {/* Hamburger menu on mobile */}
            {/* <button
              onClick={() => setMobileMenuIsShown(true)}
              className="p-1 block md:hidden"
            >
              <MdMenu className="h-8 w-auto" />
            </button> */}
            {/* CTA button on desktop */}
            {/* {navbar.button && (
              <div className="hidden md:block">
                <ButtonLink
                  button={navbar.button}
                  appearance={getButtonAppearance(navbar.button.type, "light")}
                  compact
                />
              </div>
            )} */}
            {/* Locale Switch Desktop */}
            {/* {pageContext.localizedPaths && (
              <div className="hidden md:block">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )} */}
          </div>
          <ul className="hidden list-none md:flex flex-row gap-4 items-baseline ml-10">
            {navbar.links.map((navLink) => (
              <li key={navLink.id}>
                <CustomLink link={navLink} locale={router.locale}>
                  <div className="hover:text-gray-900 px-2 py-1">
                    {navLink.text}
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  );
};

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: PropTypes.shape({
      image: mediaPropTypes,
      url: PropTypes.string,
    }),
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  initialLocale: PropTypes.string,
};

export default Navbar;
