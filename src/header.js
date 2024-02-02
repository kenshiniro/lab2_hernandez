function Header() {
  return (
    <div>
      <div className="erc-browse-header">
        <div className="erc-sticky-header browse-header-sticky scrolling-uo state-static">
          <div className="header-content">
            <div className="content-wrapper--MF5LS">
              <div className="title-with-dropdowns">
                <h1 className="heading-nKNOf heading--is-m--7bv3g heading--is-family-type-one--GqBzU browse-title">
                  Most Popular Anime
                </h1>
                <ul className="browse-dropdowns">
                  <li className="dropdown-item">
                    <div className="dropdown--cacSP erc-browse-sorting">
                      <div
                        role="button"
                        tabIndex={0}
                        className="dropdown-trigger--P--FX select-trigger--is-type-filled--4DySC"
                      >
                        <svg
                          className="dropdown-trigger__icon--yrLaj base-svg--is-flip--QvCQC"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-t="sort-svg"
                          aria-labelledby="sort-svg"
                          aria-hidden="true"
                          role="img"
                        >
                          <title id="sort-svg">Sort</title>
                          <path d="M9 18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h6zM21 4a11 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm-6 7a1 1 0 0 1 0 2H3a11 0 0 1 0-2h12z"></path>
                        </svg>
                        <span className="call-to-action--PEidl call-to-action--is-m--RVdkI select-trigger__title-cta--C5-uH trigger-title">
                          Popularity
                        </span>
                        <span className="text--gq6o- text--is-semibold--AHOYN text-is-xl---ywR- select-trigger__title-truncated--D00zB trigger-title">
                          <span className="select-trigger__title-truncated-text--5KH40">
                            Popularity
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-item">
                    <div className="dropdown--cacSP erc-browse-filtering">
                      <div
                        role="button"
                        tabIndex={0}
                        className="dropdown-trigger--P--FX"
                      >
                        <svg
                          className="dropdown-trigger__icon--yrLaj"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-t="filter-svg"
                          aria-labelledby="filter-svg"
                          aria-hidden="true"
                          role="img"
                        >
                          <title id="filter-svg">Filter / Settings</title>
                          <path
                            fill-rule="evenodd"
                            d="M9 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2M3 8a1 1 0 0 1 0-2h2.142c.447-1.72 2-3 3.858-3s3.411 1.28 3.858-3s3.411 1.28 3.858 355.589 9.72 5.1428H3zm12 11c1.103 0 2-.897 2-2s-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2zm6-3a1 1 0 0 1 0 2h-2.142c-.447 1.72-2 3-3.858 3s-3.411-1.28-3.858-3H3a1 1 0 0 1 0-2h8.142c.447-1.72 2-3 3.858-3s3.411 1.28 3.858 3H21"
                          ></path>
                        </svg>
                        <span className="call-to-action--PEidl call-to-action--is-m--RVdkI dropdown-trigger__title--TrWn trigger-tile">
                          FILTER
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper--MF5LS">
        <h2 className="heading--nKNOf heading--is-xxs--1CKSn heading--is-family-type-one--GqBzU browse-collection-title">
          Popular
        </h2>
      </div>
    </div>
  );
}

export default Header;
