import NextImage from "../elements/image";
import { useState } from "react";
import { getStrapiMedia } from "utils/media";
import { getStrapiURL } from "utils/media";
// import ProjectWidgetLink from "../elements/project-widget-link";

const ProjectsWidget = ({ data }) => {
  const [activeGallery, setActiveGallery] = useState("bureau");

  const applyHoverEffect = (e) => {
    let projectwidgetlink =
      document.getElementsByClassName("projectwidgetlink");

    for (let i = 0; i < projectwidgetlink.length; i++) {
      projectwidgetlink[i].style.background = "";
      projectwidgetlink[i].style.color = "white";
      projectwidgetlink[i].style.opacity = "0.4";
    }

    // e.target.style.background =
    //   "no-repeat url(http://localhost:1337/uploads/surround_bef86b0a61.svg)";
    e.target.style.color = "black";
    e.target.style.opacity = "initial";

    setActiveGallery(e.target.id);
  };

  const disableHoverEffect = (e) => {
    e.target.style.background = "";
    e.target.style.color = "white";
  };

  return (
    <>
      <section className="projets">
        <div className="container">
          <div className="flex md:gap-90">
            <div className="flex flex-col">
              <p className="subtitle subtitle-left uppercase tracking-wide mt-90 mb-30">
                projets
              </p>

              <ul>
                <li>
                  <a
                    id="bureau"
                    class="projectwidgetlink relative"
                    href="#"
                    onMouseEnter={applyHoverEffect}
                  >
                    Bureaux
                  </a>
                </li>
                <li>
                  <a
                    id="restaurant"
                    class="projectwidgetlink relative"
                    href="#"
                    onMouseEnter={applyHoverEffect}
                  >
                    Restaurants
                  </a>
                </li>
                <li>
                  <a
                    id="medical"
                    class="projectwidgetlink relative"
                    href="#"
                    onMouseEnter={applyHoverEffect}
                  >
                    Médical
                  </a>
                </li>
                <li>
                  <a
                    id="industrie"
                    class="projectwidgetlink "
                    href="#"
                    onMouseEnter={applyHoverEffect}
                  >
                    Industrie
                  </a>
                </li>
              </ul>
              {/* <div className="flex items-center mt-40">
                <div className="arrow">
                  <svg
                    width="29"
                    height="18"
                    viewBox="0 0 29 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-1.14382e-08 8.93242C1.73569 8.93242 3.43761 9.11647 5.16905 9.17617C7.3754 9.25225 9.56821 9.06146 11.772 9.06146C14.6276 9.06146 17.4858 8.93242 20.3464 8.93242C21.9523 8.93242 23.5582 8.93242 25.1642 8.93242C26.0224 8.93242 26.9022 8.67432 27.7451 8.67432"
                      stroke="black"
                    />
                    <path
                      d="M22.1113 17C23.0066 16.3217 23.9513 15.4141 24.5 14.4264C24.7909 13.9028 25.1829 13.4624 25.4845 12.9522C25.7131 12.5652 25.8638 12.1444 26.1091 11.7628C26.7841 10.7129 27.2905 9.56201 28.178 8.67447C28.6549 8.1976 27.4769 7.09319 27.1486 6.7455C26.4812 6.03883 26.0293 5.09933 25.2496 4.48671C24.4648 3.87012 23.7599 3.11409 23.0808 2.40783C22.6529 1.96281 22.0245 1.53465 21.7515 0.988588"
                      stroke="black"
                    />
                  </svg>
                </div>
                <p className="link ml-4">Voir tous nos projets</p>
              </div> */}
              {/* <p>{JSON.stringify(data.bureau.photo1)}</p> */}
            </div>
            {/* <NextImage media={data.bureau.photo1} /> */}
            <div className="hidden md:flex flex-col gap-90 mt-90 ml-auto">
              <img
                className="img1"
                src={getStrapiURL(
                  data[activeGallery]["photo1"].data.attributes.url
                )}
                alt=""
                style={{
                  width: "345px",
                  height: "440px",
                  border: "1px solid var(--color-dark)",
                  objectFit: "cover",
                }}
              />
              <img
                className="img3 ml-auto"
                src={getStrapiURL(
                  data[activeGallery]["photo3"].data.attributes.url
                )}
                alt=""
                style={{
                  width: "270px",
                  height: "220px",
                  border: "1px solid var(--color-dark)",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="hidden md:flex flex-col gap-90">
              <img
                className="img2"
                src={getStrapiURL(
                  data[activeGallery]["photo2"].data.attributes.url
                )}
                alt=""
                style={{
                  width: "340px",
                  height: "190px",
                  border: "1px solid var(--color-dark)",
                  objectFit: "cover",
                }}
              />
              <img
                className="img4"
                src={getStrapiURL(
                  data[activeGallery]["photo4"].data.attributes.url
                )}
                alt=""
                style={{
                  width: "560px",
                  height: "430px",
                  border: "1px solid var(--color-dark)",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsWidget;
