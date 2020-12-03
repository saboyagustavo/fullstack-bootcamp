# Guided Exercise 1 - Countries

_Challenge taught by [Rafael Gomide](https://github.com/rrgomide) at **[IGTI](https://www.igti.com.br/) FullStack  Developer Bootcamp**
_Application built, using pure HTML, CSS and JS, which search countries from an API and display some statistics._

## SOW - Statement of work

With the already provided CSS and HTML, build a JavaScript to list countries and mark them as favorites.

### Reach the following goals:

1. Fetch data from _restcountries_ API;
2. Transform data to show only the following items:
    - Name
    - Flag
    - Population
    - ID
3. Show the amount of countries and total population on a side-by-side lists;
4. When a country is added to favorites, it should be moved from left list to right on the display;
5. When a country is removed from favorites, it should be reinserted on left list
6. Countries list should always be shown in alphabetical order;

#### Step by step

-   [x] Create application state variables;

-   [x] Create eventListener with _'load'_ and _start_ function;

-   [x] implement fetchCountries asynchronous function;
-   [x] fetch data from "https://restcountries.eu/rest/v2/all" and transform it, to obtain id, name, population and flag, then invoke _render_ function;
-   [x] implement _render()_ containing these functions: _renderCountryList_, _renderFavorites_, _renderSummary_ and _handleCountryButtons_;
-   [x] implement _renderCountryList_ and _renderFavorites_ using template literals;
-   [x] implement renderSummary with reduce;
-   [x] implement _handleCountryButtons_ with _querySelectorAll_ and _forEach_, adding listeners in all _buttons_ throughout _button.id_.;
-   [x] implement _addToFavorites(id)_;
-   [x] implement _removeFromFavorites(id)_;
-   [ ] implement formatting number values.
