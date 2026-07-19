import type { Dictionary } from "./dictionary";

export const ja: Dictionary = {
  htmlLang: "ja",
  meta: {
    title: "三浦屋 MIURAYA｜蔵王温泉・高湯通り",
    description:
      "山形県山形市蔵王温泉・高湯通り。築70年以上の木造建築を活かした、全7室の素泊まり宿「三浦屋」の公式サイトです。",
    ogLocale: "ja_JP",
  },
  skipLinkLabel: "本文へスキップ",
  header: {
    navAriaLabel: "サイト内ナビゲーション",
    nav: {
      about: "三浦屋について",
      town: "蔵王温泉に浸る",
      rooms: "客室",
      kansoshitsu: "乾燥室",
      precautions: "ご宿泊前に",
      access: "アクセス",
      reservation: "ご予約",
    },
    contactLabel: "お問い合わせ",
    menuOpenLabel: "メニューを開く",
    menuCloseLabel: "メニューを閉じる",
    langSwitchLabel: "EN",
    langSwitchAriaLabel: "English page",
  },
  footer: {
    footerHeading: "フッター",
    operatorLabel: "運営：",
    topLinkLabel: "ページ先頭へ",
  },
  hero: {
    imageAlt: "高湯通りに面した三浦屋の外観。隣に下湯共同浴場が見える街並み",
    tagline: "温泉街に泊まり、歩き、浸る。",
    scrollLabel: "SCROLL",
  },
  facts: {
    heading: "宿の概要",
    rows: [
      { label: "所在地", value: "蔵王温泉・高湯通り" },
      { label: "客室数", value: "全7室・素泊まり" },
      { label: "浴場", value: "下湯共同浴場に隣接（館内に温泉なし）" },
      { label: "設備", value: "冷房設備なし・木造のため音が伝わる場合あり" },
      { label: "手続き", value: "セルフチェックイン／セルフチェックアウト" },
    ],
  },
  philosophy: {
    headingLines: ["泊まり、歩き、", "浸る。"],
    lead: "三浦屋は、宿の中だけで旅を完結させる場所ではありません。外湯へ歩き、店に立ち寄り、高湯通りを巡る。蔵王温泉の街そのものを楽しむための、小さな滞在拠点です。",
    label: "STAY. WALK. SOAK.",
  },
  about: {
    heading: "三浦屋について",
    body: "三浦屋は、蔵王温泉・高湯通りに残る旧旅館を活かして再生した、全7室の素泊まり宿です。外湯へ歩き、温泉街の店に立ち寄り、街を巡るための滞在拠点として運営しています。",
  },
  architecture: {
    heading: "建物と時間",
    body: "築70年以上の歳月を重ねてきた木造の建物。新しくつくり替えるのではなく、建物が重ねてきた時間を残しながら、現在の宿として使い続けています。",
    photoAltStaircase: "木造の階段。窓から差し込む光",
    photoAltCorridor: "館内の廊下。壁に掛けられた高湯通りの絵",
  },
  townView: {
    heading: "温泉街に泊まる",
    paragraphs: [
      "三浦屋で過ごす時間は、客室の中だけでは完結しません。",
      "共同浴場へ向かう人の足音、ほのかに漂う湯の香り、季節ごとに表情を変える高湯通り。朝の静けさのなかを歩き、湯に身をゆだね、夕暮れの街へ戻る。そんな何気ない往来の一つひとつが、蔵王温泉での滞在を形づくります。",
      "雪に包まれる冬も、新緑がまぶしい季節も、涼風が通る夏も、山々が色づく秋も。三浦屋を拠点に、この土地に流れる時間をゆっくりとお楽しみください。",
    ],
    photoAlt: "三浦屋の窓越しに見える、雪の積もる高湯通りの街並み",
  },
  onsen: {
    heading: "湯めぐり",
    emphasis: "三浦屋の館内に温泉浴場はありません。",
    voucher: "ご宿泊のお客様には、提携施設の大浴場を無料でご利用いただける入浴券をご用意しています。",
    intro: "三浦屋は、下湯共同浴場に隣接する高湯通りの宿です。温泉街には、下湯共同浴場、上湯共同浴場、川原湯共同浴場があります。",
    adjacentNote: "（三浦屋に隣接）",
    photoAltOutdoor: "提携施設の大浴場（露天）の一例",
    photoAltIndoor: "提携施設の大浴場（屋内）の一例",
    caption: "提携施設の大浴場（一例）。三浦屋の館内浴場ではありません。",
    caution: "各共同浴場の利用条件は変更される場合があります。ご利用前に最新の公式情報をご確認ください。",
  },
  rooms: {
    heading: "客室",
    lead: "全7室。畳数によって3つのタイプに分かれています。",
    roomTypes: [
      {
        id: "room-6jo",
        title: "6畳・1名用",
        roomCountLabel: "室数",
        roomCountValue: "2室",
        capacityLabel: "定員",
        capacityValue: "1名",
      },
      {
        id: "room-8jo",
        title: "8畳・2名用",
        roomCountLabel: "室数",
        roomCountValue: "4室",
        capacityLabel: "定員",
        capacityValue: "2名",
      },
      {
        id: "room-10jo",
        title: "10畳・3名用",
        roomCountLabel: "室数",
        roomCountValue: "1室",
        capacityLabel: "定員",
        capacityValue: "3名",
      },
    ],
    galleryCaption: "客室の一例",
    photoAlt: "館内の和室の一例",
  },
  commonSpace: {
    heading: "共用スペースと設備",
    paragraphs: [
      "トイレとシャワーは共用設備をご利用いただきます。",
      "1階には、宿泊者が滞在中に利用できる共用スペースを設けています。冷蔵庫、電子レンジ、お湯、水、お茶パックをご利用いただけます。",
    ],
    photoAlt: "1階の共用スペース。冷蔵庫・電子レンジ・お湯・お茶パックが置かれた一角",
    caption: "1階共用スペース",
  },
  bar: {
    heading: "喫茶・カクテルバー　乾燥室",
    body: "かつての乾燥室を改装した、高湯通りに面したラウンジ・バーです。街を歩く合間に立ち寄ることができ、コーヒーやカクテルなどをお楽しみいただけます。",
    seasonNote: "冬季のみの営業です。",
    photoAltCounter: "乾燥室のカウンター全景。棚に並ぶボトルと、壁に掛けられた高湯通りの絵",
    photoAltCocktail: "カウンターでカクテルを注ぐ様子",
  },
  amenities: {
    heading: "アメニティ",
    lead: "各客室にバスタオルをご用意しています。その他のアメニティはリクエスト制となっております。",
  },
  stayStyle: {
    heading: "滞在スタイル",
    lead: "事前の案内に沿ってご自身で手続きを行う、セルフチェックイン・セルフチェックアウト方式です。",
    steps: [
      { id: "check-in", number: "01", heading: "セルフチェックイン" },
      {
        id: "stay",
        number: "02",
        heading: "温泉街で過ごす",
        body: "温泉街へ出かける前後の時間を、ご自身のペースでお過ごしいただけます。",
      },
      { id: "check-out", number: "03", heading: "セルフチェックアウト" },
    ],
  },
  precautions: {
    heading: "ご宿泊前に知っていただきたいこと",
    items: [
      {
        id: "cooling",
        heading: "冷房設備について",
        body: "蔵王温泉は硫黄成分を含む温泉地で、設備が腐食の影響を受けやすいため、三浦屋の客室には冷房設備を設けておりません。夏季は網戸と自然換気、扇風機でお過ごしいただきます。暑さに敏感な方や冷房を必須とされる方は、あらかじめご留意ください。",
      },
      {
        id: "sound",
        heading: "木造建築の音について",
        body: "築年数を重ねた木造建築のため、廊下や階段、隣室などの音が伝わる場合があります。現代的なホテルと同等の防音性能はありません。",
      },
      {
        id: "shared-facilities",
        heading: "共用設備について",
        body: "トイレとシャワーは共用設備をご利用いただきます。館内に温泉浴場はありません。",
      },
      {
        id: "self-service",
        heading: "セルフ方式について",
        body: "チェックインおよびチェックアウトはセルフ方式です。",
      },
      {
        id: "yukata",
        heading: "浴衣について",
        body: "浴衣のご用意はありません。必要な室内着はご持参ください。",
      },
    ],
  },
  access: {
    heading: "アクセス",
    areaLabel: "蔵王温泉・高湯通り",
    adjacencyNote: "下湯共同浴場に隣接",
  },
  reservation: {
    heading: "ご予約について",
    lead: "じゃらん・Booking.comよりご予約いただけます。",
    jalanLabel: "じゃらんで予約する",
    bookingLabel: "Booking.comで予約する",
  },
  contact: {
    heading: "問い合わせ",
    lead: "このサイトでは、空室確認や予約の即時完了は行えません。ご宿泊や施設についてのご質問は、メールにてお問い合わせください。",
    mailButtonLabel: "メールで問い合わせる",
    mailSubject: "三浦屋についての問い合わせ",
    mailBodyLines: [
      "お名前：",
      "",
      "お問い合わせ内容：",
      "",
      "宿泊を検討している時期：",
      "",
      "宿泊予定人数：",
      "",
    ],
  },
};
