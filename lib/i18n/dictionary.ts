export type Locale = "ja" | "en";

export const locales: Locale[] = ["ja", "en"];

export interface Dictionary {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  skipLinkLabel: string;
  header: {
    navAriaLabel: string;
    nav: {
      about: string;
      town: string;
      rooms: string;
      kansoshitsu: string;
      precautions: string;
      access: string;
      reservation: string;
    };
    contactLabel: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    langSwitchLabel: string;
    langSwitchAriaLabel: string;
  };
  footer: {
    footerHeading: string;
    operatorLabel: string;
    topLinkLabel: string;
  };
  hero: {
    imageAlt: string;
    tagline: string;
    scrollLabel: string;
  };
  facts: {
    heading: string;
    rows: { label: string; value: string }[];
  };
  philosophy: {
    headingLines: [string, string];
    lead: string;
    label: string;
  };
  about: {
    heading: string;
    body: string;
  };
  architecture: {
    heading: string;
    body: string;
    photoAltStaircase: string;
    photoAltCorridor: string;
  };
  townView: {
    heading: string;
    paragraphs: string[];
    photoAlt: string;
  };
  onsen: {
    heading: string;
    emphasis: string;
    voucher: string;
    intro: string;
    adjacentNote: string;
    photoAltOutdoor: string;
    photoAltIndoor: string;
    caption: string;
    caution: string;
  };
  rooms: {
    heading: string;
    lead: string;
    roomTypes: {
      id: string;
      title: string;
      roomCountLabel: string;
      roomCountValue: string;
      capacityLabel: string;
      capacityValue: string;
    }[];
    galleryCaption: string;
    photoAlt: string;
  };
  commonSpace: {
    heading: string;
    paragraphs: string[];
    photoAlt: string;
    caption: string;
  };
  bar: {
    heading: string;
    body: string;
    seasonNote: string;
    photoAltCounter: string;
    photoAltCocktail: string;
  };
  amenities: {
    heading: string;
    lead: string;
  };
  stayStyle: {
    heading: string;
    lead: string;
    steps: { id: string; number: string; heading: string; body?: string }[];
  };
  precautions: {
    heading: string;
    items: { id: string; heading: string; body: string }[];
  };
  access: {
    heading: string;
    areaLabel: string;
    adjacencyNote: string;
  };
  reservation: {
    heading: string;
    lead: string;
    jalanLabel: string;
    bookingLabel: string;
  };
  contact: {
    heading: string;
    lead: string;
    mailButtonLabel: string;
    mailSubject: string;
    mailBodyLines: string[];
  };
}
