import App from "./App";

function Content(props) {
  return (
    <div>
      <div className="content-wrapper--MF5LS">
        <div className="row">
          <div className="erc-browse-cards-collection">
            <div class="browse-card__footer--eSAmN">
              <div
                class="meta-tags--o8OYw browse-card__meta-tags--OCMfY"
                data-t="meta-tags"
              >
                <span class="text--gq6o- text--is-m--pqiL- meta-tags__tag--W4JTZ">
                  <div>
                    {props.animeObj.rank <= 5 ? (
                      <label style={{ color: "yellow" }}>MOST LOVED 👑</label>
                    ) : (
                      <label style={{ color: "green" }}>TOP CONTENDER 👍</label>
                    )}
                  </div>
                </span>
              </div>
            </div>
            <div className="browse-card">
              <a tabIndex={-1} href="/series/GRDV0019R/jujutsu-kaisen">
                <img
                  style={{
                    filter:
                      props.animeObj.status === "COMPLETED"
                        ? "grayscale(100%)"
                        : "grayscale(0%)",
                  }}
                  class="content-image__image--7tGlg content-image__fade--is-ready--5a8us"
                  src={props.animeObj.photoName}
                  alt="JUJUTSU KAISEN"
                  loading="lazy"
                ></img>
              </a>
            </div>
            <div class="browse-card__body--yGjzX">
              <h4
                class="text--gq6o- text--is-m--pqiL- browse-card__title--YK28O"
                data-t="title"
              >
                <a
                  tabindex="-1"
                  href="/series/GRDV0019R/jujutsu-kaisen"
                  class="browse-card__title-link--SLlRM"
                >
                  {props.animeObj.name}
                </a>
              </h4>
              <div class="browse-card__footer--eSAmN">
                <div
                  class="meta-tags--o8OYw browse-card__meta-tags--OCMfY"
                  data-t="meta-tags"
                >
                  <span class="text--gq6o- text--is-m--pqiL- meta-tags__tag--W4JTZ">
                    {props.animeObj.status}
                  </span>
                </div>
              </div>
              <div class="browse-card__footer--eSAmN">
                <div
                  class="meta-tags--o8OYw browse-card__meta-tags--OCMfY"
                  data-t="meta-tags"
                >
                  <span class="text--gq6o- text--is-m--pqiL- meta-tags__tag--W4JTZ">
                    {props.animeObj.language}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
