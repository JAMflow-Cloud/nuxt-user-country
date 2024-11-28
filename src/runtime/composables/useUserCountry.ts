import { createError, useFetch, useRuntimeConfig, type AsyncData } from '#app'

type CountryEnum =
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'CV'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CD'
  | 'CG'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW'

interface Country {
  name: string
  iso: CountryEnum
}

const countrys: Country[] = [
  { name: 'Afghanistan', iso: 'AF' },
  { name: 'Åland Islands', iso: 'AX' },
  { name: 'Albania', iso: 'AL' },
  { name: 'Algeria', iso: 'DZ' },
  { name: 'American Samoa', iso: 'AS' },
  { name: 'Andorra', iso: 'AD' },
  { name: 'Angola', iso: 'AO' },
  { name: 'Anguilla', iso: 'AI' },
  { name: 'Antarctica', iso: 'AQ' },
  { name: 'Antigua and Barbuda', iso: 'AG' },
  { name: 'Argentina', iso: 'AR' },
  { name: 'Armenia', iso: 'AM' },
  { name: 'Aruba', iso: 'AW' },
  { name: 'Australia', iso: 'AU' },
  { name: 'Austria', iso: 'AT' },
  { name: 'Azerbaijan', iso: 'AZ' },
  { name: 'Bahamas, The', iso: 'BS' },
  { name: 'Bahrain', iso: 'BH' },
  { name: 'Bangladesh', iso: 'BD' },
  { name: 'Barbados', iso: 'BB' },
  { name: 'Belarus', iso: 'BY' },
  { name: 'Belgium', iso: 'BE' },
  { name: 'Belize', iso: 'BZ' },
  { name: 'Benin', iso: 'BJ' },
  { name: 'Bermuda', iso: 'BM' },
  { name: 'Bhutan', iso: 'BT' },
  { name: 'Bolivia', iso: 'BO' },
  { name: 'Bonaire, Sint Eustatius and Saba', iso: 'BQ' },
  { name: 'Bosnia and Herzegovina', iso: 'BA' },
  { name: 'Botswana', iso: 'BW' },
  { name: 'Bouvet Island', iso: 'BV' },
  { name: 'Brazil', iso: 'BR' },
  { name: 'British Indian Ocean Territory', iso: 'IO' },
  { name: 'Brunei', iso: 'BN' },
  { name: 'Bulgaria', iso: 'BG' },
  { name: 'Burkina Faso', iso: 'BF' },
  { name: 'Burundi', iso: 'BI' },
  { name: 'Cape Verde', iso: 'CV' },
  { name: 'Cambodia', iso: 'KH' },
  { name: 'Cameroon', iso: 'CM' },
  { name: 'Canada', iso: 'CA' },
  { name: 'Cayman Islands', iso: 'KY' },
  { name: 'Central African Republic', iso: 'CF' },
  { name: 'Chad', iso: 'TD' },
  { name: 'Chile', iso: 'CL' },
  { name: 'China', iso: 'CN' },
  { name: 'Christmas Island', iso: 'CX' },
  { name: 'Cocos (Keeling) Islands', iso: 'CC' },
  { name: 'Colombia', iso: 'CO' },
  { name: 'Comoros', iso: 'KM' },
  { name: 'Congo (DRC)', iso: 'CD' },
  { name: 'Congo', iso: 'CG' },
  { name: 'Cook Islands', iso: 'CK' },
  { name: 'Costa Rica', iso: 'CR' },
  { name: 'Côte d\'Ivoire', iso: 'CI' },
  { name: 'Croatia', iso: 'HR' },
  { name: 'Cuba', iso: 'CU' },
  { name: 'Curaçao', iso: 'CW' },
  { name: 'Cyprus', iso: 'CY' },
  { name: 'Czech Republic', iso: 'CZ' },
  { name: 'Denmark', iso: 'DK' },
  { name: 'Djibouti', iso: 'DJ' },
  { name: 'Dominica', iso: 'DM' },
  { name: 'Dominican Republic', iso: 'DO' },
  { name: 'Ecuador', iso: 'EC' },
  { name: 'Egypt', iso: 'EG' },
  { name: 'El Salvador', iso: 'SV' },
  { name: 'Equatorial Guinea', iso: 'GQ' },
  { name: 'Eritrea', iso: 'ER' },
  { name: 'Estonia', iso: 'EE' },
  { name: 'Ethiopia', iso: 'ET' },
  { name: 'Falkland Islands (Islas Malvinas)', iso: 'FK' },
  { name: 'Faroe Islands', iso: 'FO' },
  { name: 'Fiji Islands', iso: 'FJ' },
  { name: 'Finland', iso: 'FI' },
  { name: 'France', iso: 'FR' },
  { name: 'French Guiana', iso: 'GF' },
  { name: 'French Polynesia', iso: 'PF' },
  { name: 'French Southern and Antarctic Lands', iso: 'TF' },
  { name: 'Gabon', iso: 'GA' },
  { name: 'Gambia, The', iso: 'GM' },
  { name: 'Georgia', iso: 'GE' },
  { name: 'Germany', iso: 'DE' },
  { name: 'Ghana', iso: 'GH' },
  { name: 'Gibraltar', iso: 'GI' },
  { name: 'Greece', iso: 'GR' },
  { name: 'Greenland', iso: 'GL' },
  { name: 'Grenada', iso: 'GD' },
  { name: 'Guadeloupe', iso: 'GP' },
  { name: 'Guam', iso: 'GU' },
  { name: 'Guatemala', iso: 'GT' },
  { name: 'Guernsey', iso: 'GG' },
  { name: 'Guinea', iso: 'GN' },
  { name: 'Guinea-Bissau', iso: 'GW' },
  { name: 'Guyana', iso: 'GY' },
  { name: 'Haiti', iso: 'HT' },
  { name: 'Heard Island and McDonald Islands', iso: 'HM' },
  { name: 'Vatican City', iso: 'VA' },
  { name: 'Honduras', iso: 'HN' },
  { name: 'Hong Kong SAR', iso: 'HK' },
  { name: 'Hungary', iso: 'HU' },
  { name: 'Iceland', iso: 'IS' },
  { name: 'India', iso: 'IN' },
  { name: 'Indonesia', iso: 'ID' },
  { name: 'Iran', iso: 'IR' },
  { name: 'Iraq', iso: 'IQ' },
  { name: 'Ireland', iso: 'IE' },
  { name: 'Man, Isle of', iso: 'IM' },
  { name: 'Israel', iso: 'IL' },
  { name: 'Italy', iso: 'IT' },
  { name: 'Jamaica', iso: 'JM' },
  { name: 'Japan', iso: 'JP' },
  { name: 'Jersey', iso: 'JE' },
  { name: 'Jordan', iso: 'JO' },
  { name: 'Kazakhstan', iso: 'KZ' },
  { name: 'Kenya', iso: 'KE' },
  { name: 'Kiribati', iso: 'KI' },
  { name: 'North Korea', iso: 'KP' },
  { name: 'Korea', iso: 'KR' },
  { name: 'Kuwait', iso: 'KW' },
  { name: 'Kyrgyzstan', iso: 'KG' },
  { name: 'Laos', iso: 'LA' },
  { name: 'Latvia', iso: 'LV' },
  { name: 'Lebanon', iso: 'LB' },
  { name: 'Lesotho', iso: 'LS' },
  { name: 'Liberia', iso: 'LR' },
  { name: 'Libya', iso: 'LY' },
  { name: 'Liechtenstein', iso: 'LI' },
  { name: 'Lithuania', iso: 'LT' },
  { name: 'Luxembourg', iso: 'LU' },
  { name: 'Macao SAR', iso: 'MO' },
  { name: 'Macedonia, Former Yugoslav Republic of', iso: 'MK' },
  { name: 'Madagascar', iso: 'MG' },
  { name: 'Malawi', iso: 'MW' },
  { name: 'Malaysia', iso: 'MY' },
  { name: 'Maldives', iso: 'MV' },
  { name: 'Mali', iso: 'ML' },
  { name: 'Malta', iso: 'MT' },
  { name: 'Marshall Islands', iso: 'MH' },
  { name: 'Martinique', iso: 'MQ' },
  { name: 'Mauritania', iso: 'MR' },
  { name: 'Mauritius', iso: 'MU' },
  { name: 'Mayotte', iso: 'YT' },
  { name: 'Mexico', iso: 'MX' },
  { name: 'Micronesia', iso: 'FM' },
  { name: 'Moldova', iso: 'MD' },
  { name: 'Monaco', iso: 'MC' },
  { name: 'Mongolia', iso: 'MN' },
  { name: 'Montenegro', iso: 'ME' },
  { name: 'Montserrat', iso: 'MS' },
  { name: 'Morocco', iso: 'MA' },
  { name: 'Mozambique', iso: 'MZ' },
  { name: 'Myanmar', iso: 'MM' },
  { name: 'Namibia', iso: 'NA' },
  { name: 'Nauru', iso: 'NR' },
  { name: 'Nepal', iso: 'NP' },
  { name: 'Netherlands', iso: 'NL' },
  { name: 'New Caledonia', iso: 'NC' },
  { name: 'New Zealand', iso: 'NZ' },
  { name: 'Nicaragua', iso: 'NI' },
  { name: 'Niger', iso: 'NE' },
  { name: 'Nigeria', iso: 'NG' },
  { name: 'Niue', iso: 'NU' },
  { name: 'Norfolk Island', iso: 'NF' },
  { name: 'Northern Mariana Islands', iso: 'MP' },
  { name: 'Norway', iso: 'NO' },
  { name: 'Oman', iso: 'OM' },
  { name: 'Pakistan', iso: 'PK' },
  { name: 'Palau', iso: 'PW' },
  { name: 'Palestinian Authority', iso: 'PS' },
  { name: 'Panama', iso: 'PA' },
  { name: 'Papua New Guinea', iso: 'PG' },
  { name: 'Paraguay', iso: 'PY' },
  { name: 'Peru', iso: 'PE' },
  { name: 'Philippines', iso: 'PH' },
  { name: 'Pitcairn Islands', iso: 'PN' },
  { name: 'Poland', iso: 'PL' },
  { name: 'Portugal', iso: 'PT' },
  { name: 'Puerto Rico', iso: 'PR' },
  { name: 'Qatar', iso: 'QA' },
  { name: 'Réunion', iso: 'RE' },
  { name: 'Romania', iso: 'RO' },
  { name: 'Russia', iso: 'RU' },
  { name: 'Rwanda', iso: 'RW' },
  { name: 'Saint Barthélemy', iso: 'BL' },
  { name: 'Saint Helena, Ascension and Tristan da Cunha', iso: 'SH' },
  { name: 'St. Kitts and Nevis', iso: 'KN' },
  { name: 'St. Lucia', iso: 'LC' },
  { name: 'Saint Martin (French part)', iso: 'MF' },
  { name: 'St. Pierre and Miquelon', iso: 'PM' },
  { name: 'St. Vincent and the Grenadines', iso: 'VC' },
  { name: 'Samoa', iso: 'WS' },
  { name: 'San Marino', iso: 'SM' },
  { name: 'São Tomé and Príncipe', iso: 'ST' },
  { name: 'Saudi Arabia', iso: 'SA' },
  { name: 'Senegal', iso: 'SN' },
  { name: 'Serbia', iso: 'RS' },
  { name: 'Seychelles', iso: 'SC' },
  { name: 'Sierra Leone', iso: 'SL' },
  { name: 'Singapore', iso: 'SG' },
  { name: 'Sint Maarten (Dutch part)', iso: 'SX' },
  { name: 'Slovakia', iso: 'SK' },
  { name: 'Slovenia', iso: 'SI' },
  { name: 'Solomon Islands', iso: 'SB' },
  { name: 'Somalia', iso: 'SO' },
  { name: 'South Africa', iso: 'ZA' },
  { name: 'South Georgia and the South Sandwich Islands', iso: 'GS' },
  { name: 'South Sudan', iso: 'SS' },
  { name: 'Spain', iso: 'ES' },
  { name: 'Sri Lanka', iso: 'LK' },
  { name: 'Sudan', iso: 'SD' },
  { name: 'Suriname', iso: 'SR' },
  { name: 'Svalbard', iso: 'SJ' },
  { name: 'Swaziland', iso: 'SZ' },
  { name: 'Sweden', iso: 'SE' },
  { name: 'Switzerland', iso: 'CH' },
  { name: 'Syria', iso: 'SY' },
  { name: 'Taiwan', iso: 'TW' },
  { name: 'Tajikistan', iso: 'TJ' },
  { name: 'Tanzania', iso: 'TZ' },
  { name: 'Thailand', iso: 'TH' },
  { name: 'Democratic Republic of Timor-Leste', iso: 'TL' },
  { name: 'Togo', iso: 'TG' },
  { name: 'Tokelau', iso: 'TK' },
  { name: 'Tonga', iso: 'TO' },
  { name: 'Trinidad and Tobago', iso: 'TT' },
  { name: 'Tunisia', iso: 'TN' },
  { name: 'Turkey', iso: 'TR' },
  { name: 'Turkmenistan', iso: 'TM' },
  { name: 'Turks and Caicos Islands', iso: 'TC' },
  { name: 'Tuvalu', iso: 'TV' },
  { name: 'Uganda', iso: 'UG' },
  { name: 'Ukraine', iso: 'UA' },
  { name: 'United Arab Emirates', iso: 'AE' },
  { name: 'United Kingdom', iso: 'GB' },
  { name: 'U.S. Minor Outlying Islands', iso: 'UM' },
  { name: 'United States', iso: 'US' },
  { name: 'Uruguay', iso: 'UY' },
  { name: 'Uzbekistan', iso: 'UZ' },
  { name: 'Vanuatu', iso: 'VU' },
  { name: 'Bolivarian Republic of Venezuela', iso: 'VE' },
  { name: 'Vietnam', iso: 'VN' },
  { name: 'Virgin Islands, British', iso: 'VG' },
  { name: 'Virgin Islands', iso: 'VI' },
  { name: 'Wallis and Futuna', iso: 'WF' },
  { name: 'Western Sahara', iso: 'EH' },
  { name: 'Yemen', iso: 'YE' },
  { name: 'Zambia', iso: 'ZM' },
  { name: 'Zimbabwe', iso: 'ZW' },
]

const countryMap = new Map<CountryEnum, Country>(
  countrys.map(country => [country.iso, country]),
)

export function useUserCountry(): AsyncData<Country | null, null> {
  const endPointUrl = useRuntimeConfig().public.userCountry.endpoint

  return useFetch(endPointUrl, {
    server: false,
    transform: (data) => {
      const country = countryMap.get(data as CountryEnum)
      if (!country) {
        throw createError('Country not found')
      }
      return country
    },
  })
}
