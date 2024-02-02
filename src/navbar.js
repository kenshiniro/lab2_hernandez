function Navbar() {
  return (
    <div>
      <div class="erc-large-header">
        <div class="container--cq5XE container--has-no-gutters--WqnNJ header-content">
          <div class="header-logo">
            <a tabindex="0" class="erc-logo state-scalable" href="/">
              <svg
                class="logo-icon hidden-mobile"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 136 24"
                data-t="crunchyroll-horizontal-svg"
                aria-labelledby="crunchyroll-horizontal-svg"
                aria-hidden="false"
                role="img"
              >
                <title id="crunchyroll-horizontal-svg">Crunchyroll logo</title>
                <path d="M66.397 6.887c-2.775 0-5.067.25-5.067 2.124v9.317h2.62V9.873c0-.48 1.355-.577 2.097-.577 2.383 0 2.336 1.045 2.336 2.037v6.995h2.602v-7.053c0-3.134-1.552-4.388-4.588-4.388zm66.757 11.449h2.68V2.786h-2.68v15.55zm-5.808 0h2.682V2.786h-2.682v15.55zm-7.589-2.018c-1.594 0-2.603-.59-2.603-3.579 0-2.99 1.009-3.58 2.603-3.58 1.59 0 2.601.59 2.601 3.58s-1.01 3.579-2.6 3.579zm0-9.401c-3.41 0-5.292 2.06-5.292 5.822s1.882 5.822 5.292 5.822c3.406 0 5.29-2.06 5.29-5.822 0-3.761-1.884-5.822-5.29-5.822zM107.52 8.34v9.995h2.684V9.903c0-.66 1.646-.64 3.141-.663V6.894s-5.825-.243-5.825 1.447zm-7.143 6.587l-2.503-7.854h-2.834l3.994 10.674c-.14.398 0 .003-2.034 5.036l2.802.002 1.623-4.18 4.244-11.532h-2.836l-2.456 7.854zm-11.79-8.034c-.871 0-1.61.135-2.234.383V2.786h-2.679v15.55h2.679V9.624c.446-.203 1.05-.339 1.785-.339 2.502 0 2.726 1.06 2.726 2.055v6.996h2.658v-6.771c0-2.934-1.832-4.671-4.934-4.671zm-7.323 8.778c-.83.34-1.75.566-2.784.566-1.883 0-3.052-.59-3.052-3.493 0-2.925 1.169-3.492 3.052-3.492 1.034 0 1.953.204 2.784.543V7.528a8.639 8.639 0 0 0-3.233-.634c-3.41 0-5.299 2.087-5.299 5.85 0 3.767 1.89 5.831 5.299 5.831 1.192 0 2.27-.252 3.233-.636v-2.267zm-25.05-2.049c0 1.812-.656 2.431-2.289 2.431-1.613 0-2.268-.619-2.268-2.43v-6.55h-2.638v6.185c0 3.33 1.07 5.302 4.906 5.302 3.826 0 4.928-1.971 4.928-5.302V7.074h-2.64v6.55zM43.831 9.91c0-.667 1.632-.646 3.127-.67V6.894s-5.807-.237-5.807 1.447v9.995h2.68V9.91zM30 12.739c0-3.761 1.882-5.845 5.293-5.845 1.188 0 2.265.249 3.23.634v2.265a7.265 7.265 0 0 0-2.78-.542c-1.885 0-3.05.566-3.05 3.488 0 2.9 1.165 3.49 3.05 3.49 1.029 0 1.949-.226 2.78-.565v2.265a8.661 8.661 0 0 1-3.23.634c-3.41 0-5.293-2.06-5.293-5.824zm-10.875 1.175a3.8 3.8 0 0 0 3.039-1.516 8.357 8.357 0 0 1-8.217 9.889 8.357 8.357 0 0 1-8.357-8.358 8.357 8.357 0 0 1 12.243-7.4 3.806 3.806 0 0 0 1.292 7.385zM11.892 0c6.569 0 11.893 5.325 11.893 11.892 0 .236-.007.469-.02.7-.376-5.43-4.9-9.72-10.427-9.72-5.773 0-10.454 4.68-10.454 10.453 0 5.56 4.34 10.103 9.817 10.433-.267.018-.536.027-.809.027C5.325 23.785 0 18.461 0 11.892 0 5.325 5.325 0 11.892 0z"></path>
              </svg>
              <svg
                class="logo-icon hidden-desktop"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-t="crunchyroll-logo-only-svg"
                aria-labelledby="crunchyroll-logo-only-svg"
                aria-hidden="true"
                role="img"
              >
                <title id="crunchyroll-logo-only-svg">Crunchyroll logo</title>
                <path d="M19.125 13.914a3.804 3.804 0 0 1-1.292-7.385 8.357 8.357 0 0 0-12.243 7.4 8.357 8.357 0 0 0 8.357 8.357 8.357 8.357 0 0 0 8.217-9.888 3.8 3.8 0 0 1-3.04 1.516M11.893 0C5.325 0 0 5.325 0 11.892c0 6.569 5.325 11.893 11.892 11.893.273 0 .542-.01.809-.027-5.476-.33-9.817-4.873-9.817-10.433 0-5.773 4.68-10.453 10.454-10.453 5.527 0 10.051 4.29 10.427 9.72.013-.231.02-.464.02-.7C23.785 5.325 18.461 0 11.892 0"></path>
              </svg>
            </a>
          </div>
          <div class="header-menu">
            <div class="erc-menu">
              <div class="state-visible-on-desktop">
                <div
                  role="button"
                  tabindex="0"
                  class="erc-header-tile menu-tile"
                  data-t="menu-browse"
                >
                  <span class="text--gq6o- text--is-l--iccTo item-title">
                    Browse
                  </span>
                  <div class="erc-header-svg menu-icon">
                    <svg
                      class="header-svg-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-t="dropdown-svg"
                      aria-labelledby="dropdown-svg"
                      aria-hidden="true"
                      role="img"
                    >
                      <title id="dropdown-svg">Dropdown menu</title>
                      <path d="M7 10h10l-5 5z"></path>
                    </svg>
                  </div>
                </div>
                <div class="erc-browse-menu-dropdown">
                  <nav class="menu-wrapper">
                    <div class="menu-section">
                      <ul class="menu-list">
                        <li class="menu-item" data-t="item">
                          <a
                            aria-current="page"
                            class="erc-menu-item-title state-active"
                            tabindex="0"
                            href="/videos/popular"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              Popular
                            </span>
                          </a>
                        </li>
                        <li class="menu-item" data-t="item">
                          <a
                            class="erc-menu-item-title"
                            tabindex="0"
                            href="/videos/new"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              New
                            </span>
                          </a>
                        </li>
                        <li class="menu-item" data-t="item">
                          <a
                            class="erc-menu-item-title"
                            tabindex="0"
                            href="/videos/alphabetical"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              Alphabetical
                            </span>
                          </a>
                        </li>
                        <li class="menu-item" data-t="item">
                          <a
                            class="erc-menu-item-title"
                            tabindex="0"
                            href="/simulcasts/seasons/winter-2024"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              Simulcast Season
                            </span>
                          </a>
                        </li>
                        <li class="menu-item" data-t="item">
                          <a
                            tabindex="0"
                            class="erc-menu-item-title"
                            href="https://www.crunchyroll.com/simulcastcalendar"
                            target="_self"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              Release Calendar
                            </span>
                          </a>
                        </li>
                        <li class="menu-item" data-t="item">
                          <a
                            class="erc-menu-item-title"
                            tabindex="0"
                            href="/music"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              Music Videos &amp; Concerts
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="genres-wrapper">
                      <small class="text--gq6o- text--is-semibold--AHOYN text--is-s--JP2oa section-title">
                        Genres
                      </small>
                      <div class="genres-section">
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/action"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Action
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/adventure"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Adventure
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/comedy"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Comedy
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/drama"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">Drama</h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/fantasy"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Fantasy
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/music"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">Music</h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/romance"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Romance
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/sci-fi"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Sci-Fi
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/seinen"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Seinen
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/shojo"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">Shojo</h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/shonen"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Shonen
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/slice-of-life"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Slice of life
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/sports"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Sports
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/supernatural"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Supernatural
                            </h5>
                          </a>
                        </li>
                        <li class="erc-submenu-item" data-t="item">
                          <a
                            class="submenu-item-title"
                            tabindex="0"
                            href="/videos/thriller"
                          >
                            <h5 class="text--gq6o- text--is-m--pqiL-">
                              Thriller
                            </h5>
                          </a>
                        </li>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="state-visible-on-mobile">
                <div
                  role="button"
                  tabindex="0"
                  class="erc-header-tile state-icon-only menu-tile"
                  data-t="header-tile"
                >
                  <div class="erc-header-svg">
                    <svg
                      class="header-svg-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-t="menu-svg"
                      aria-labelledby="menu-svg"
                      aria-hidden="true"
                      role="img"
                    >
                      <title id="menu-svg">Menu</title>
                      <path d="M21 4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18z"></path>
                    </svg>
                  </div>
                </div>
                <div class="erc-vertical-menu-dropdown">
                  <div class="menu-dropdown-fader"></div>
                  <div class="menu-dropdown-content">
                    <nav>
                      <div class="menu-section">
                        <small class="text--gq6o- text--is-semibold--AHOYN text--is-s--JP2oa menu-section-title">
                          Browse
                        </small>
                        <ul>
                          <li class="menu-item" data-t="item">
                            <a
                              aria-current="page"
                              class="erc-menu-item-title state-active"
                              tabindex="0"
                              href="/videos/popular"
                            >
                              <span class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                                Popular
                              </span>
                            </a>
                          </li>
                          <li class="menu-item" data-t="item">
                            <a
                              class="erc-menu-item-title"
                              tabindex="0"
                              href="/videos/new"
                            >
                              <span class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                                New
                              </span>
                            </a>
                          </li>
                          <li class="menu-item" data-t="item">
                            <a
                              class="erc-menu-item-title"
                              tabindex="0"
                              href="/videos/alphabetical"
                            >
                              <span class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                                Alphabetical
                              </span>
                            </a>
                          </li>
                          <li class="menu-item" data-t="item">
                            <a
                              class="erc-menu-item-title"
                              tabindex="0"
                              href="/simulcasts/seasons/winter-2024"
                            >
                              <span class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                                Simulcast Season
                              </span>
                            </a>
                          </li>
                          <li class="menu-item" data-t="item">
                            <a
                              tabindex="0"
                              class="erc-menu-item-title"
                              href="https://www.crunchyroll.com/simulcastcalendar"
                              target="_self"
                            >
                              <span class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                                Release Calendar
                              </span>
                            </a>
                          </li>
                          <li class="menu-item" data-t="item">
                            <a
                              class="erc-menu-item-title"
                              tabindex="0"
                              href="/music"
                            >
                              <span class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                                Music Videos &amp; Concerts
                              </span>
                            </a>
                          </li>
                          <li
                            class="erc-genres-menu-item menu-item"
                            data-t="expandable-item"
                          >
                            <div
                              role="button"
                              tabindex="0"
                              class="erc-menu-item-title"
                            >
                              <span class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                                Genres
                              </span>
                              <span class="menu-item-icon">
                                <svg
                                  class="angle--pJ1yZ angle--is-bottom--RZzvm"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  data-t="angle-bottom-svg"
                                  aria-labelledby="angle-svg"
                                  aria-hidden="true"
                                  role="img"
                                >
                                  <title id="angle-svg">Expand</title>
                                  <path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path>
                                </svg>
                              </span>
                            </div>
                            <ul class="erc-submenu-dropdown">
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/action"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Action
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/adventure"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Adventure
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/comedy"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Comedy
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/drama"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Drama
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/fantasy"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Fantasy
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/music"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Music
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/romance"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Romance
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/sci-fi"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Sci-Fi
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/seinen"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Seinen
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/shojo"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Shojo
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/shonen"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Shonen
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/slice-of-life"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Slice of life
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/sports"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Sports
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/supernatural"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Supernatural
                                  </h5>
                                </a>
                              </li>
                              <li class="erc-submenu-item" data-t="item">
                                <a
                                  class="submenu-item-title"
                                  tabindex="0"
                                  href="/videos/thriller"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Thriller
                                  </h5>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="menu-section">
                        <ul>
                          <li class="menu-item" data-t="external-item">
                            <a
                              tabindex="0"
                              class="erc-menu-item-title"
                              href="https://www.crunchyroll.com/games/index.html"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                                Games
                              </span>
                            </a>
                          </li>
                          <li
                            class="erc-news-submenu menu-item"
                            data-t="news-expandable-item"
                          >
                            <div
                              role="button"
                              tabindex="0"
                              class="erc-menu-item-title"
                            >
                              <span class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                                News
                              </span>
                              <span class="menu-item-icon">
                                <svg
                                  class="angle--pJ1yZ angle--is-bottom--RZzvm"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  data-t="angle-bottom-svg"
                                  aria-labelledby="angle-svg"
                                  aria-hidden="true"
                                  role="img"
                                >
                                  <title id="angle-svg">Expand</title>
                                  <path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path>
                                </svg>
                              </span>
                            </div>
                            <ul class="erc-news-submenu-dropdown">
                              <li
                                class="news-submenu-dropdown-item"
                                data-t="news-submenu-item"
                              >
                                <a
                                  tabindex="0"
                                  class="news-submenu-dropdown-item-title"
                                  href="https://www.crunchyroll.com/news"
                                  target="_self"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    All News
                                  </h5>
                                </a>
                              </li>
                              <li
                                class="news-submenu-dropdown-item"
                                data-t="news-submenu-item"
                              >
                                <a
                                  tabindex="0"
                                  class="news-submenu-dropdown-item-title"
                                  href="https://www.crunchyroll.com/animeawards/index.html"
                                  target="_self"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Anime Awards
                                  </h5>
                                </a>
                              </li>
                              <li
                                class="news-submenu-dropdown-item"
                                data-t="news-submenu-item"
                              >
                                <a
                                  tabindex="0"
                                  class="news-submenu-dropdown-item-title"
                                  href="https://www.crunchyrollexpo.com"
                                  target="_self"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Crunchyroll Expo
                                  </h5>
                                </a>
                              </li>
                              <li
                                class="news-submenu-dropdown-item"
                                data-t="news-submenu-item"
                              >
                                <a
                                  tabindex="0"
                                  class="news-submenu-dropdown-item-title"
                                  href="https://www.crunchyrollmovienight.com"
                                  target="_self"
                                >
                                  <h5 class="text--gq6o- text--is-m--pqiL-">
                                    Anime Movie Night
                                  </h5>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div class="state-visible-on-desktop">
              <a
                tabindex="0"
                class="erc-header-tile"
                href="https://www.crunchyroll.com/games/index.html"
                target="_blank"
                data-t="header-menu-games"
              >
                <span class="text--gq6o- text--is-l--iccTo">Games</span>
              </a>
              <div class="erc-news-menu">
                <div
                  role="button"
                  tabindex="0"
                  class="erc-header-tile news-menu-tile"
                  data-t="header-menu-news"
                >
                  <span class="text--gq6o- text--is-l--iccTo news-item-title">
                    News
                  </span>
                  <div class="erc-header-svg news-menu-icon">
                    <svg
                      class="header-svg-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-t="dropdown-svg"
                      aria-labelledby="dropdown-svg"
                      aria-hidden="true"
                      role="img"
                    >
                      <title id="dropdown-svg">Dropdown menu</title>
                      <path d="M7 10h10l-5 5z"></path>
                    </svg>
                  </div>
                </div>
                <div class="erc-news-menu-dropdown">
                  <nav class="news-menu-wrapper">
                    <div class="news-menu-section">
                      <ul>
                        <li class="news-menu-item" data-t="news-dropdown-item">
                          <a
                            tabindex="0"
                            class="erc-menu-item-title"
                            href="https://www.crunchyroll.com/news"
                            target="_self"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              All News
                            </span>
                          </a>
                        </li>
                        <li class="news-menu-item" data-t="news-dropdown-item">
                          <a
                            tabindex="0"
                            class="erc-menu-item-title"
                            href="https://www.crunchyroll.com/animeawards/index.html"
                            target="_self"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              Anime Awards
                            </span>
                          </a>
                        </li>
                        <li class="news-menu-item" data-t="news-dropdown-item">
                          <a
                            tabindex="0"
                            class="erc-menu-item-title"
                            href="https://www.crunchyrollexpo.com"
                            target="_self"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              Crunchyroll Expo
                            </span>
                          </a>
                        </li>
                        <li class="news-menu-item" data-t="news-dropdown-item">
                          <a
                            tabindex="0"
                            class="erc-menu-item-title"
                            href="https://www.crunchyrollmovienight.com"
                            target="_self"
                          >
                            <span class="text--gq6o- text--is-m--pqiL-">
                              Anime Movie Night
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="header-actions">
            <ul class="erc-user-actions">
              <li class="user-actions-item">
                <div class="erc-upsell-popup erc-premium-header-link">
                  <a
                    tabindex="0"
                    class="erc-header-tile state-icon-only erc-header-free-trial-tile"
                    href="https://www.crunchyroll.com/premium?referrer=newweb_organic_header&amp;return_url=https%3A%2F%2Fwww.crunchyroll.com%2Fvideos%2Fpopular#plans"
                    aria-label="premium"
                    data-t="header-tile"
                  >
                    <div class="erc-header-svg premium-icon">
                      <svg
                        class="premium-filled-icon--nW2Vi header-svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-t="premium-filled-svg"
                        aria-labelledby="premium-filled-svg"
                        aria-hidden="true"
                        role="img"
                      >
                        <title id="premium-filled-svg">Premium</title>
                        <path d="M2.419 13L0 4.797 4.837 6.94 8 2l3.163 4.94L16 4.798 13.581 13z"></path>
                      </svg>
                    </div>
                    <div class="text-wrapper">
                      <span class="text--gq6o- text--is-semibold--AHOYN text--is-xs--5PTBo first-row">
                        Try free
                      </span>
                      <span class="text--gq6o- text--is-semibold--AHOYN text--is-xs--5PTBo second-row">
                        Premium
                      </span>
                    </div>
                  </a>
                  <div class="erc-upsell-popup-body popup">
                    <a
                      tabindex="0"
                      href="https://www.crunchyroll.com/premium?referrer=newweb_header_modal&amp;return_url=https%3A%2F%2Fwww.crunchyroll.com%2Fvideos%2Fpopular#plans"
                      class="content-wrapper"
                    >
                      <div class="erc-upsell-popup-background background">
                        <div class="background-inner">
                          <svg
                            class="left-up-stars"
                            viewBox="0 0 50 36"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(2 -7)"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                stroke="#FAB818"
                                stroke-width="2"
                                d="m15.225 33.094.214 1.078-.744.833 1.083-.215.853.733-.237-1.068.73-.855-1.068.24z"
                              ></path>
                              <path
                                stroke="#FFF"
                                stroke-width="2"
                                d="m6.602 16.97.24 1.124-.837.868 1.218-.224.96.764-.267-1.113.822-.891-1.202.25z"
                              ></path>
                              <path
                                stroke="#FAB818"
                                stroke-width="2.4"
                                d="m36.534 15.907.088 1.565-1.215 1.028 1.57-.09 1.059 1.205-.123-1.554 1.201-1.063-1.555.127z"
                              ></path>
                            </g>
                          </svg>
                          <svg
                            class="right-up-star"
                            viewBox="0 0 17 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(-276 -10)"
                              stroke="#FAB818"
                              stroke-width="2"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path d="m284.748 17.598.078.375-.273.28.396-.062.313.265-.087-.373.268-.287-.391.07z"></path>
                            </g>
                          </svg>
                          <svg
                            class="right-bottom-lines-star"
                            viewBox="0 0 75 79"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(-290 -89)"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                stroke="#FFC94D"
                                stroke-width="1.68"
                                opacity=".688"
                                d="m343.9 145.118.037.41-.31.28.412-.038.289.306-.047-.406.305-.29-.406.048z"
                              ></path>
                              <path
                                stroke="#FAB818"
                                opacity=".4"
                                d="m365.957 85.043-52.5 82.059M361.457 173.102l-66-41.03"
                              ></path>
                            </g>
                          </svg>
                          <svg
                            class="left-bottom-lines"
                            viewBox="0 0 70 63"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              transform="translate(5 -105)"
                              stroke="#FAB818"
                              fill="none"
                              fill-rule="evenodd"
                              opacity=".4"
                            >
                              <path d="M-43 73 93.876 192.954M-35.5 158.5l93.301-21.628"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div class="content">
                        <h3 class="heading--nKNOf heading--is-xxs--1CKSn heading--is-family-type-one--GqBzU title">
                          <svg
                            class="premium-icon--V9L7x premium-title-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-t="premium-svg"
                            aria-labelledby="premium-svg"
                            aria-hidden="true"
                            role="img"
                          >
                            <title id="premium-svg">Premium Only</title>
                            <path d="M18.188 17l1.667-5.606-4.26 1.864L12 7.688l-3.596 5.57-4.259-1.864L5.812 17h12.376zm-14.08 1.285L1.614 9.9a1 1 0 0 1 1.36-1.2l4.673 2.045 3.512-5.442a1 1 0 0 1 1.68 0l3.514 5.442 4.674-2.046a1 1 0 0 1 1.36 1.201l-2.494 8.386a1 1 0 0 1-.959.715H5.067a1 1 0 0 1-.959-.715z"></path>
                          </svg>
                          14-Day Free Trial
                        </h3>
                        <p class="text--gq6o- text--is-semibold--AHOYN text--is-m--pqiL-">
                          Premium access includes unlimited anime, no ads, and
                          new episodes shortly after they air in Japan. Try it
                          now!
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li class="user-actions-item">
                <a
                  tabindex="0"
                  class="erc-header-tile state-icon-only erc-search-header-button"
                  data-t="header-tile"
                  href="/search"
                >
                  <div class="erc-header-svg">
                    <svg
                      class="header-svg-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-t="search-svg"
                      aria-labelledby="search-svg"
                      aria-hidden="false"
                      role="img"
                    >
                      <title id="search-svg">Search</title>
                      <path d="M15.474 14.035l6.235 6.26a1 1 0 1 1-1.418 1.41l-6.228-6.253a7.5 7.5 0 1 1 1.41-1.418zM9.5 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li class="user-actions-item watchlist-wrapper">
                <a
                  tabindex="0"
                  class="erc-header-tile state-icon-only erc-watchlist-header-button"
                  data-t="header-tile"
                  href="/watchlist"
                >
                  <div class="erc-header-svg">
                    <svg
                      class="header-svg-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-t="watchlist-svg"
                      aria-labelledby="watchlist-svg"
                      aria-hidden="false"
                      role="img"
                    >
                      <title id="watchlist-svg">Watchlist</title>
                      <path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li class="user-actions-item">
                <div class="erc-anonymous-user-menu">
                  <div
                    role="button"
                    tabindex="0"
                    class="erc-header-tile"
                    data-t="header-tile"
                  >
                    <div class="erc-header-svg">
                      <svg
                        class="header-svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-t="user-settings-svg"
                        aria-labelledby="user-settings-svg"
                        aria-hidden="true"
                        role="img"
                      >
                        <title id="user-settings-svg">Account menu</title>
                        <path d="M12 20a6.01 6.01 0 0 1-5.966-5.355L12 12.088l5.966 2.557A6.01 6.01 0 0 1 12 20m0-16c1.654 0 3 1.346 3 3s-1.345 3-2.999 3h-.002A3.003 3.003 0 0 1 9 7c0-1.654 1.346-3 3-3m7.394 9.081l-4.572-1.959A4.997 4.997 0 0 0 17 7c0-2.757-2.243-5-5-5S7 4.243 7 7c0 1.71.865 3.22 2.178 4.122l-4.572 1.959A.999.999 0 0 0 4 14c0 4.411 3.589 8 8 8s8-3.589 8-8c0-.4-.238-.762-.606-.919"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="erc-user-menu">
                    <div class="user-menu-scrollable">
                      <div class="user-menu-section">
                        <a
                          tabindex="0"
                          href="https://sso.crunchyroll.com/authorize?client_id=noaihdevm_6iyg0a8l0q&amp;redirect_uri=https%3A%2F%2Fwww.crunchyroll.com%2Fcallback&amp;response_type=cookie&amp;state=%2Fvideos%2Fpopular&amp;prompt=register"
                          class="erc-user-menu-nav-item"
                          data-t="signup-link"
                        >
                          <div class="nav-item-info">
                            <h5 class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                              Create Account
                            </h5>
                            <div class="nav-item-description">
                              <p class="text--gq6o- text--is-m--pqiL- description-text">
                                Join for free or go Premium.
                              </p>
                            </div>
                          </div>
                        </a>
                        <a
                          tabindex="0"
                          href="https://sso.crunchyroll.com/authorize?client_id=noaihdevm_6iyg0a8l0q&amp;redirect_uri=https%3A%2F%2Fwww.crunchyroll.com%2Fcallback&amp;response_type=cookie&amp;state=%2Fvideos%2Fpopular"
                          class="erc-user-menu-nav-item"
                          data-t="signin-link"
                        >
                          <div class="nav-item-info">
                            <h5 class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                              Log In
                            </h5>
                            <div class="nav-item-description">
                              <p class="text--gq6o- text--is-m--pqiL- description-text">
                                Already joined Crunchyroll? Welcome back.
                              </p>
                            </div>
                          </div>
                        </a>
                        <a
                          class="erc-user-menu-nav-item"
                          tabindex="0"
                          data-t="gift-card-link"
                          href="/redeem"
                        >
                          <div class="nav-item-info">
                            <h5 class="text--gq6o- text--is-fixed-size--5i4oU text--is-l--iccTo">
                              Gift Card
                            </h5>
                            <div class="nav-item-description">
                              <p class="text--gq6o- text--is-m--pqiL- description-text">
                                Have a gift card? Redeem it here.
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="user-menu-section">
                        <div class="button-wrapper">
                          <a
                            tabindex="0"
                            class="button--xqVd0 button--is-type-five--qz0dA"
                            data-t="upsell-btn"
                            href="https://www.crunchyroll.com/premium?referrer=newweb_organic_acct_menu&amp;return_url=https%3A%2F%2Fwww.crunchyroll.com%2Fvideos%2Fpopular#plans"
                          >
                            <span class="call-to-action--PEidl call-to-action--is-m--RVdkI button__cta--LOqDH">
                              <svg
                                class="premium-icon--V9L7x"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-t="premium-svg"
                                aria-labelledby="premium-svg"
                                aria-hidden="true"
                                role="img"
                              >
                                <title id="premium-svg">Premium Only</title>
                                <path d="M18.188 17l1.667-5.606-4.26 1.864L12 7.688l-3.596 5.57-4.259-1.864L5.812 17h12.376zm-14.08 1.285L1.614 9.9a1 1 0 0 1 1.36-1.2l4.673 2.045 3.512-5.442a1 1 0 0 1 1.68 0l3.514 5.442 4.674-2.046a1 1 0 0 1 1.36 1.201l-2.494 8.386a1 1 0 0 1-.959.715H5.067a1 1 0 0 1-.959-.715z"></path>
                              </svg>
                              14-Day Free Trial
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="erc-page-overlay"></div>
      </div>
    </div>
  );
}

export default Navbar;
