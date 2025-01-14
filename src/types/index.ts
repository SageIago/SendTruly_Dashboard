export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export interface LoginUserResponse {
  success: boolean;
  message: string;
  data: { user: UserData; token: string | null };
}

export interface CreateUserResponse {
  success: boolean;
  message: string;
  data: UserData | null;
  status_code: number;
}

export interface GetDashboardResponse {
  success: boolean;
  message: string;
  data: {
    usertoken: number;
    fname: string;
    lname: string;
    mail: string;
    country: string;
    role: string;
    is_verified: boolean;
    kyc_status: boolean;
    plan_info: {
      plan_type: string;
      enterprise_plan: false;
    };
    api_key: {
      api_key: "";
    };
    getAccountBalance: {
      account_balance: "";
      message: string;
      status_code: number;
    };
    reg_date: "";
    transactions: [];
  } | null;
  token: string;
}

export interface VerifyOTPResponse {
  success: boolean;
  message: string;
  data: UserData | null;
  bearer_token: string;
  token_type: string;
  status_code: number;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
}

export interface GetUserStatsDataResponse {
  amountSpent: string;
  totalContactCount: number;
  totalSmsCount: number;
  chartData: { current_date: []; total_messages: [] };
}

// Contact Response

export interface ContactsData {
  id: number;
  list_id: string;
  contact: string;
  number: string;
  created_at: Date;
  updated_at: Date;
}

export interface GetAllContactsResponse {
  success: boolean;
  message: string;
  data: {
    contacts: ContactsData[];
    total_contacts: number;
    current_page: number;
    last_page: number;
  };
}

export interface GetContactsByListTokenResponse {
  status: boolean;
  message: string;
  data: {
    list_name: string;
    list_token: number;
    contact_numbers: string[];
  };
}

export interface GetAllContactListsResponse {
  success: boolean;
  message: string;
  data: [
    {
      list_name: string;
      list_token: number;
      total_numbers: number;
      date_created: string;
    },
  ];
  status_code: number;
}

export interface CreateContactGroupResponse {
  status: boolean;
  message: string;
  data: {
    list: {
      id: number;
      list_name: string;
      user_id: string;
      created_at: string;
    };
  };
  status_code: number;
}

export interface AddContactToGroupResponse {
  status: boolean;
  message: string;
  data: {
    list: {
      id: number;
      list_name: string;
      user_id: string;
      created_at: string;
    };
  };
  status_code: number;
}

export interface DeleteListResponse {
  success: boolean;
  message: string;
  data: [];
}

// SMS Response
export interface GetSMSCostResponse {
  status: boolean;
  data: {
    estimated_price: number;
    currency: string;
    total_contacts: number;
    pages: number;
    total_characters: number;
    delivery_route: string;
  };
  message: string;
  status_code: number;
}

// Get the total_messages
export interface GetSentMessagesResponse {
  status: boolean;
  success: boolean;
  data: {
    message_token: string;
    message: string;
    list_name: string[];
    list_tokens: string[];
  }[];
  status_code: number;
}

export interface GetScheduledMessagesResponse {
  status: boolean;
  success: boolean;
  data: {
    message_token: string;
    message: string;
    list_name: string[];
    list_tokens: string[];
  }[];
  status_code: number;
}

export interface GetDraftedMessagesResponse {
  status: boolean;
  success: boolean;
  data: {
    message_token: string;
    message: string;
    list_name: string[];
    list_tokens: string[];
  }[];
  status_code: number;
}

export interface DeleteScheduledSMSResponse {
  success: boolean;
  message: string;
  data: string;
  status_code: number;
}

export interface DeleteDraftedSMSResponse {
  success: boolean;
  message: string;
  data: string;
  status_code: number;
}
