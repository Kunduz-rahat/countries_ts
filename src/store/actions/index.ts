import * as CountriesActionCreators from './countriesAction'
import * as CountryActionCreators from './countryItemAction'

export default {

    ...CountryActionCreators,
    ...CountriesActionCreators
}