import Markdown from "react-markdown";
import { backgroundPosition, backgroundSize } from "tailwindcss/defaultTheme";
import { getButtonAppearance } from "utils/button";
import ButtonLink from "../elements/button-link";
import NextImage from "../elements/image";

const Hero = ({ data }) => {
  return (
    <>
      <main className="bg-yellow-10">
        <div className="container relative">
          <div className="subtitles">
            <p className="subtitle subtitle-left uppercase tracking-wide">
              {data.accroche}
            </p>
            <p className="subtitle subtitle-right uppercase tracking-wide ">
              {data.metier}
            </p>
          </div>
          <div className="flex flex-col justify-start md:justify-between md:items-center gap-10 lg:flex-row ">
            <div className="left-column">
              <h1>
                {data.titre}
                <span className="text-yellow-100">*</span>
              </h1>
              <p className="text-3xl text-yellow-100 font-serif absolute sm:left-1 md:left-12">
                *
              </p>
              <div className="flex rich-text-hero">
                <Markdown>{data.asterisque}</Markdown>
              </div>
            </div>
            <div className="steps">
              <div className="img-step img-step1 ">
                <NextImage media={data.image1} />
              </div>
              <div className="img-step img-step2 ">
                <NextImage media={data.image2} />
              </div>
              <div className="img-step img-step3">
                <NextImage media={data.image3} />
              </div>
              <h2 className="txt-step txt-step1">créer un impact ?</h2>
              <h2 className="txt-step txt-step2">
                attirer et retenir les talents ?
              </h2>
              <h2 className="txt-step txt-step3">être plus créatif ?</h2>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className="container flex items-center">
          <div className="flex flex-col justify-start md:justify-between md:items-center gap-60 lg:flex-row">
            <div>
              <svg
                width="99"
                height="3"
                viewBox="0 0 99 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.765137 2.01598C3.98668 2.01598 7.16883 2.17389 10.3975 2.17389C12.1422 2.17389 13.8695 1.93087 15.5997 1.70016C17.6928 1.42109 19.91 1.38435 22.0126 1.38435C26.0889 1.38435 30.1653 1.38435 34.2417 1.38435C36.6742 1.38435 39.167 1.22579 41.5932 1.39312C44.0471 1.56235 46.4956 1.85807 48.9623 1.85807C65.4293 1.85807 81.9213 1.85807 98.3525 1.85807"
                  stroke="#B47B48"
                  stroke-linecap="square"
                />
              </svg>
            </div>
            <h2 className=" text-yellow-100">Comment</h2>
          </div>
        </div>
      </section>
      <section className="dreams bg-yellow-10 z-40">
        <div className="container relative justify-start flex flex-col lg:flex-row md:justify-between gap-60">
          <div className="flex flex-col">
            <h2>Nous vous aidons à faire la différence</h2>
          </div>

          <div className="img-rounded rounded-img md:self-center">
            <img
              src="http://localhost:1337/uploads/Bureaux_Agence_Caisse_Epargne_Lille_Nationale_2_75776f9e01.jpg"
              alt=""
              style={{
                width: "530px",
                height: "530px",
                borderRadius: "99999px",
                border: "1px solid var(--color-dark)",
                objectFit: "cover",
              }}
            />
          </div>
          <h2 className="md:self-end">
            Et faire de vos rêves, une réalité
            <span class="text-yellow-100">*</span>
          </h2>
          <p className="text-3xl text-yellow-100 font-serif absolute sm:left-1 md:left-12 bottom-120">
            *
          </p>
          <div className="absolute bottom-68 w-500">
            <div className="flex rich-text-hero">
              <p>
                Pour autant que qu’ils soient de ce type : avoir un lieu qui
                vous ressemble et dont vous êtes fière, un lieu qui rassemble
                autour de votre vision et de vos valeurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vision">
        <div className="container">
          <div className="m-auto flex flex-col gap-50">
            <p className="subtitle subtitle-left uppercase tracking-wide mx-auto my-0">
              vision
            </p>
            <div className="mx-auto my-0">
              <h2 className="text-center">
                Nous avons à coeur de créer des{" "}
                <span className="text-yellow-100">
                  lieux attirants et inspirants
                </span>{" "}
                dans le respect de l’
                <span className="text-yellow-100">environnement</span> qui
                rendent <span className="text-yellow-100">heureux</span> les
                utilisateurs.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Display the list of sections
// const Photos = ({ photos })

export default Hero;
