//
// CUSTOM VARIABLES
//
export const CUSTOM_VARIABLES = {
  CRYPTO_BALANCES: {
    ID: 2,
    NAME: 'crypto_balances'
  },
  KYC_TIER: {
    ID: 1,
    NAME: 'kyc_tier'
  }
}

//
// AB TESTS
//
export enum AB_TESTS {}

//
// EVENTS
// format: [event_category, event_action, ?event_name, ?event_value]
//

export const ADS_EVENTS = {
  CLICK_AD: ['navigation', 'click_ad'],
  CLICK_AD_TAX: ['navigation', 'click_ad_tax']
}

export const AB_TEST_EVENTS = {
  DISMISS_VERIFICATION: ['email_ab_test', 'dismiss_verification'],
  EMAIL_VERIFIED: ['email_ab_test', 'email_verified']
}

export const FIAT_DEPOSIT_EVENTS = {
  ACCEPT_YAPILY_AIS_AGREEMENT: ['deposit', 'click', 'yapily_agreement_accept_button'],
  ACCEPT_YAPILY_PIS_AGREEMENT: ['deposit', 'click', 'yapily_pis_agreement_accept'],
  DECLINE_YAPILY_AIS_AGREEMENT: ['deposit', 'click', 'yapily_agreement_decline_button'],
  DECLINE_YAPILY_PIS_AGREEMENT: ['deposit', 'click', 'yapily_pis_agreement_decline'],
  DEPOSIT_CANCEL: ['deposit', 'click', 'cancel_button'],
  DEPOSIT_CONFIRM: ['deposit', 'click', 'confirm_button'],
  DEPOSIT_CONTINUE: ['deposit', 'click', 'continue_button'],
  LINK_BANK_TRANSFER: ['deposit', 'click', 'bank_account_button'],
  LINK_WIRE_TRANSFER: ['deposit', 'click', 'wire_transfer_button'],
  SELECT_BANK_OPTION: ['deposit', 'click', 'bank_option_item'],
  SELECT_DEPOSIT_METHOD: ['deposit', 'click', 'select_deposit_method_button'],
  SELECT_YAPILY_INSTITUTION: ['deposit', 'click', 'yapily_bank_institution'],
  YAPILY_CONT_IN_BROWSER: ['deposit', 'click', 'yapily_ais_continue_in_browser'],
  YAPILY_CONT_IN_BROWSER_PIS: ['deposit', 'click', 'yapily_pis_continue_in_browser'],
  YODLEE_ADD_BANK_CONT: ['deposit', 'click', 'yodlee_add_bank_continue']
}

export const PREFERENCE_EVENTS = {
  GENERAL: {
    ENABLE_BTC_LINKS: 'enable_btc_links'
  },
  SECURITY: {
    VERIFY_DEVICE_ACCEPTED: ['preferences', 'security', 'verify_device_accepted'],
    VERIFY_DEVICE_EMAIL_SENT: ['preferences', 'security', 'verify_device_email_sent'],
    VERIFY_DEVICE_REJECTED: ['preferences', 'security', 'verify_device_rejected']
  }
}
export const SWAP_EVENTS = {
  ORDER_PREVIEW_ERROR: ['swap', 'order_form', 'order_preview_error'],
  USE_MAX: ['swap', 'order_form', 'use_max'],
  USE_MIN: ['swap', 'order_form', 'use_min']
}
export const TRANSACTION_EVENTS = {
  BITPAY_FAILURE: ['transactions', 'bitpay', 'bitpay_payment_failure'],
  BITPAY_SUCCESS: ['transactions', 'bitpay', 'bitpay_payment_success'],
  BITPAY_URL_DEEPLINK: ['transactions', 'bitpay', 'bitpay_url_deeplink'],
  EDIT_DESCRIPTION: ['transactions', 'edit_description'],
  PAYMENT_REQUEST: ['transactions', 'payment_request'],
  REQUEST: ['transactions', 'request'],
  SEND: ['transactions', 'send'],
  SEND_FAILURE: ['send_failure'],
  VIEW_TX_ON_EXPLORER: ['transactions', 'view_tx_explorer']
}

export const EXCHANGE_EVENTS = {
  BANNER_GET_STARTED: ['exchange', 'homepage', 'homepage_banner_click'],
  BUY_SELL_CONNECT_WALLET_CLICKED: ['exchange', 'buy_sell_page', 'connect_wallet_click'],
  BUY_SELL_LINKOUT_CLICKED: ['exchange', 'buy_sell_page', 'linkout_click'],
  CONNECT_NOW: ['exchange', 'link_page', 'connect_now_click'],
  LEARN_MORE: ['exchange', 'link_page', 'learn_more_click'],
  LINKED_WALLET_LINKOUT_CLICKED: ['exchange', 'homepage', 'linked_wallet_linkout_clicked'],
  PROMO: ['exchange', 'send_modal']
}

export const PRICE_CHART_EVENTS = {
  CLICK_BUY_BITCOIN: ['price_chart', 'footer_button', 'buy_bitcoin'],
  CLICK_SWAP_COIN: ['price_chart', 'footer_button', 'swap_coin']
}

export const SB_EVENTS = {
  CLICK_SUPPORT_ARTICLE: ['simple_buy', 'transfer_flyout', 'read_it_now']
}

export const ONE_CLICK_INTEREST = {
  CLICK: ['one_click_interest', 'interest_banner', 'click'],
  SEEN: ['one_click_interest', 'interest_banner', 'seen']
}

export const INTEREST_EVENTS = {
  DEPOSIT: {
    SEND_FAILURE: ['interest', 'deposit', 'send_failure'],
    SEND_ONE_CLICK: ['interest', 'deposit', 'send_one_click_success'],
    SEND_SUCCESS: ['interest', 'deposit', 'send_success']
  },
  HOME: {
    CLICK_SUPPORT_ARTICLE: ['interest', 'home', 'learn_more_click'],
    SUPPLY_INFORMATION: ['interest', 'home', 'supply_information'],
    VIEW_TX_SUMMARY: ['interest', 'home', 'view_tx_click']
  },
  MODAL: {
    DONT_SHOW_AGAIN: ['interest', 'deposit modal', 'dont show again'],
    START_EARNING: ['interest', 'deposit modal', 'start_earning']
  },
  SETTINGS: {
    SUPPLY_INFORMATION: ['interest', 'settings', 'supply_information']
  },
  WITHDRAWAL: {
    REQUEST_FAILURE: ['interest', 'withdrawal', 'request_failure'],
    REQUEST_SUCCESS: ['interest', 'withdrawal', 'request_success'],
    SUPPLY_INFORMATION: ['interest', 'withdrawal', 'supply_information']
  }
}

export const MOBILE_LOGIN = {
  LEGACY: ['mobile_login', 'login_via_mobile', 'scanned'],
  MOBILE_LOGIN: ['mobile_login', 'qr_code', 'scanned']
}
