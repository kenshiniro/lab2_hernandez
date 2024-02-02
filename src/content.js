function Content(props) {
  return (
    <div>
      <div className="content-wrapper--MF5LS">
        <div className="row">
          <div className="erc-browse-cards-collection">
            <div className="browse-card">
              <a tabIndex={-1} href="/series/GRDV0019R/jujutsu-kaisen">
                <img
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
