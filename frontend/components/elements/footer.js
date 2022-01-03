import PropTypes from "prop-types";
import { linkPropTypes, mediaPropTypes } from "utils/types";
import NextImage from "./image";
import CustomLink from "./custom-link";

const Footer = ({ footer }) => {
  return (
    <footer className=" bg-dark">
      <div className="container flex flex-col lg:flex-row lg:justify-between white-borders">
        <div>
          {footer.logo && (
            <NextImage width="120" height="33" media={footer.logo} />
          )}
        </div>
        <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >
              <p className="text-grey-30 uppercase tracking-wide font-semibold">
                {footerColumn.title}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="text-grey-30 py-1 px-1 -mx-1 hover:text-white"
                  >
                    <CustomLink link={link}>{link.text}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm text-grey-30 b-10 ml-20">{footer.smallText}</p>
        </nav>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
};

export default Footer;
