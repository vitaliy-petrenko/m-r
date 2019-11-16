import { getJSON } from './ajax';
const config = {
  attributes: {
    local: 'data-local', //attribute, which contains in all tags, that needs to localize
    localValues: 'data-local-values', //values for replacement, ex data-local-values='{"foo": "bar"}':
                                      // 'string %_foo' from your json will replace to 'string bar'
  },
  localizationsPath: 'localization/',
  replacementKey: '%_'
};

function replaceAllSubstrings(string, search, replacement) {
  return string.replace(new RegExp(search, 'g'), replacement);
}

class Localization {

  constructor() {
    this.localizations = {}; //saves loaded localizations into this array
  }

  init() {
    this.updateElementsList();
  }

  updateElementsList() {
    this.elementsList = document.querySelectorAll(`[${config.attributes.local}]`) || [];
  }

  _updateNodes(data) {
    this.updateElementsList();

    this.elementsList.forEach(update);

    function update(element) {
      let locale = element.getAttribute(config.attributes.local),
        valuesString = replaceAllSubstrings(element.getAttribute(config.attributes.localValues), '\'', '\"'),
        values,
        localizationString = JSON.parse(data)[locale];

      if (valuesString) {
        //try to parse locale values as a '%_foo': 'bar' and JSON it
        try {
          values = JSON.parse(valuesString)
        } catch (e) {
          console.log(`Error. Wrong "data-local-values" attribute format: ${e}`)
        }
        if (values) {
          //check all values for all repeats in string from JSON
          for (let prop in values) {
            if (!values.hasOwnProperty(prop)) continue;
            localizationString = replaceAllSubstrings(localizationString, config.replacementKey + prop, values[prop]);
          }
        }
      }

      //put formatted locale into the DOM
      element.textContent = localizationString;
    }
  }

  translateTo(newLanguage) { //ru, en, etc
    //check for localization in memory
    for (let language in this.localizations) {
      if (newLanguage === language) {
        this._updateNodes(this.localizations[newLanguage]);
        return;
      }
    }
    getJSON(`${config.localizationsPath + newLanguage}.json`)
      .then(data => {
        this.localizations[newLanguage] = data;
        this._updateNodes(this.localizations[newLanguage]);
      });
  }

}

export let localization = new Localization();
;