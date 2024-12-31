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
