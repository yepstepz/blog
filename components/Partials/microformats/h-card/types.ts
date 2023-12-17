/**
<div class="h-card">
  <span class="p-name">Sally Ride</span>
  <span class="p-honorific-prefix">Dr.</span>
  <span class="p-given-name">Sally</span>
  <abbr class="p-additional-name">K.</abbr>
  <span class="p-family-name">Ride</span>
  <span class="p-honorific-suffix">Ph.D.</span>,
  <span class="p-nickname">sallykride</span> (IRC)
  <div class="p-org">Sally Ride Science</div>
  <img class="u-photo" src="http://example.com/sk.jpg"/>
  <a class="u-url" href="http://sally.example.com">w</a>,
  <a class="u-email" href="mailto:sally@example.com">e</a>
  <div class="p-tel">+1.818.555.1212</div>
  <div class="p-street-address">123 Main st.</div>
  <span class="p-locality">Los Angeles</span>,
  <abbr class="p-region" title="California">CA</abbr>,
  <span class="p-postal-code">91316</span>
  <div class="p-country-name">U.S.A</div>
  <time class="dt-bday">1951-05-26</time> birthday
  <div class="p-category">physicist</div>
  <div class="p-note">First American woman in space.</div>
</div>
 */

type hCardType = {
  pName?: string; //The full/formatted name of the person or organization
  pHonorificPrefix?: string; //e.g. Mrs., Mr. or Dr.
  pGivenName?: string; //given (often first) name
  pAdditionalName?: string; //other (e.g. middle) name
  pFamilyName?: string; //family (often last) name
  pSortString?: string; //string to sort by
  pHonorificSuffix?: string; //e.g. Ph.D, Esq.
  pNickname?: string; //nickname/alias/handle
  uEmail?: string; //email address
  uLogo?: string; //a logo representing the person or organization (e.g. a face icon)
  uPhoto?: string; //a photo of the person or organization
  uUrl?: string; //home page or other URL representing the person or organization
  uUid?: string; //universally unique identifier, preferably canonical URL
  pCategory?: string; //category/tag
  pAdr?: string; //postal address, optionally embed an h-adr
  pPostOfficeBox?: string; //post office box description if any
  pExtendedAddress?: string; //apartment/suite/room name/number if any
  pStreetAddress?: string; //street number + name
  pLocality?: string; //city/town/village
  pRegion?: string; //state/county/province
  pPostalCode?: string; //postal code, e.g. US ZIP
  pCountryName?: string; //country name
  pLabel?: string; //
  pGeo?: string; //
  pLatitude?: string; //decimal latitude
  pLongitude?: string; //decimal longitude
  pAltitude?: string; //decimal altitude
  pTel?: string; //telephone number
  pNote?: string; //additional notes
  dtBday?: string; //birth date
  uKey?: string; //cryptographic public key e.g. SSH or GPG
  pOrg?: string; //affiliated organization, optionally embed an h-card
  pJobTitle?: string; //job title, previously 'title' in hCard, disambiguated.
  pRole?: string; //description of role
  pSex?: string; //biological sex, new in vCard4 (RFC 6350)
  pGenderIdentity?: string; //gender identity, new in vCard4 (RFC 6350)
  dtAnniversary?: string; //
};

type hCardSettingsType = {
  isAuthor?: boolean;
  visible?: boolean;
  showCredentials?: boolean;
  showNickname?: boolean;
};

export type MicroCardType = hCardType & hCardSettingsType;
