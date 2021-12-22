import NextImage from "../elements/image";
import { useState } from "react";
import { getStrapiMedia } from "utils/media";

const ProjectsWidget = ({ data }) => {
  // state = {
  //   img1url: getStrapiMedia(data.bureau1.data.attributes.url),
  //   img2url: getStrapiMedia(data.bureau2.data.attributes.url),
  //   img3url: getStrapiMedia(data.bureau3.data.attributes.url),
  //   img4url: getStrapiMedia(data.bureau4.data.attributes.url),
  // }

  const [bureauIsShown, setBureauIsShown] = useState(true);
  const [restaurantIsShown, setRestaurantIsShown] = useState(false);
  const [medicalIsShown, setMedicalIsShown] = useState(false);
  const [industrieIsShown, setIndustrieIsShown] = useState(false);

  const [img1url, setImg1url] = useState(data.bureau1.data.attributes.url);
  const [img2url, setImg2url] = useState(data.bureau2.data.attributes.url);
  const [img3url, setImg3url] = useState(data.bureau3.data.attributes.url);
  const [img4url, setImg4url] = useState(data.bureau4.data.attributes.url);

  // if (bureauIsShown) {
  //   this.setImg1({ img1: data.bureau1.data.attributes.url });
  //   this.setImg2({ img2: data.bureau2.data.attributes.url });
  //   this.setImg3({ img2: data.bureau3.data.attributes.url });
  //   this.setImg4({ img2: data.bureau4.data.attributes.url });
  // }

  // if (restaurantIsShown) {
  //   () => setImg1({ img1: data.restaurant1.data.attributes.url });
  //   this.setImg2({ img2: data.restaurant.data.attributes.url });
  //   this.setImg3({ img2: data.restaurant3.data.attributes.url });
  //   this.setImg4({ img2: data.restaurant4.data.attributes.url });
  // }

  const updateStyleAndUrl = () => {
    // setStyle("cont2"); this.props.data.id;
    setImg1url(
      getStrapiMedia("data." + this.props.data.id + "1.data.attributes.url")
    );
    setImg2url(
      getStrapiMedia("data." + this.props.data.id + "2.data.attributes.url")
    );
    setImg3url(
      getStrapiMedia("data." + this.props.data.id + "3.data.attributes.url")
    );
    setImg4url(
      getStrapiMedia("data." + this.props.data.id + "4.data.attributes.url")
    );
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
              <ul onMouseLeave={() => setRestaurantIsShown(false)}>
                <li>
                  <a
                    id="bureau"
                    href="#"
                    onMouseEnter={() => updateStyleAndUrl()}
                    // onMouseEnter={() => setBureauIsShown(true)}
                    // onMouseLeave={() => setRestaurantIsShown(false)}
                    // onMouseLeave={() => setMedicalIsShown(false)}
                    // onMouseLeave={() => setIndustrieIsShown(false)}
                  >
                    Bureaux
                  </a>
                </li>
                <li>
                  <a
                    id="restaurant"
                    href="#"
                    onMouseEnter={() => updateStyleAndUrl()}
                    // onMouseEnter={() => setBureauIsShown(false)}
                    // onMouseLeave={() => setRestaurantIsShown(true)}
                    // onMouseLeave={() => setMedicalIsShown(false)}
                    // onMouseLeave={() => setIndustrieIsShown(false)}
                  >
                    Restaurants
                  </a>
                </li>
                <li>
                  <a
                    id="medical"
                    href="#"
                    onMouseEnter={() => updateStyleAndUrl()}
                    // onMouseEnter={() => setBureauIsShown(false)}
                    // onMouseLeave={() => setRestaurantIsShown(false)}
                    // onMouseLeave={() => setMedicalIsShown(true)}
                    // onMouseLeave={() => setIndustrieIsShown(false)}
                  >
                    Médical
                  </a>
                </li>
                <li>
                  <a
                    id="industrie"
                    href="#"
                    onMouseEnter={() => updateStyleAndUrl()}
                    // onMouseEnter={() => setBureauIsShown(false)}
                    // onMouseLeave={() => setRestaurantIsShown(false)}
                    // onMouseLeave={() => setMedicalIsShown(false)}
                    // onMouseLeave={() => setIndustrieIsShown(true)}
                  >
                    Industrie
                  </a>
                </li>
              </ul>
              <div className="flex items-center mt-40">
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
                <p>{/* {JSON.stringify()} */}</p>
              </div>
            </div>
            {/* <NextImage media={data.bureau1} /> */}
            <div className="hidden md:flex flex-col gap-90 mt-90 ml-auto">
              <img
                className="img1"
                src={img1url}
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
                src={img2url}
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
                src={img3url}
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
                src={img4url}
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
