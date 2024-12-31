declare interface CreateUserParams {
  fname: string;
  lname: string;
  mail: string;
  pword: string;
  country: string;
  confirm_password?: string;
}

declare interface UpdateUserParams {
  id: string;
  updatedData: Partial<CreateUserParams>;
}

declare interface DeleteUserParams {
  id: string | undefined;
}

declare interface LoginUserParams {
  mail: string;
  pword: string | undefined;
}

declare interface GetDashboardInfoParams {
  token: string;
}

declare interface ResetPasswordParams {
  email_address: string;
}

declare interface VerifyEmailParams {
  email: string;
  otp: number;
}

// DASHBOARD PARAMS
declare interface GetUserDataParams {
  usertoken: string;
}

declare interface UserData {
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
    enterprise_plan: boolean | null;
  };
  api_key: string;
  getAccountBalance: string;
  reg_date: string;
}

// CONTACT PARAMS

declare interface CreateUserContactsParams {
  list_name: string;
  contact_numbers: string[];
  country: string;
  usertoken: string | null;
}

// GET THE ContactGroup BY PARAMS
declare interface ContactGroupParams {
  list_name: string;
  list_token: number;
  total_numbers: number;
  date_created: string;
}

declare interface GetContactsByListToken {
  list_token: string;
  usertoken: string;
}

declare interface DeleteContacts {
  list_token: string;
  usertoken: string;
}

// SMS PARAMS

declare interface SendSMSParams {
  sender_id: string;
  message: string;
  contacts: string[];
  is_drafted: boolean;
  delivery_route: number;
  message_type: string;
  scheduled: boolean;
  scheduled_data: {
    date_time: Date;
    schedule_type: string;
    schedule_number: string;
  };
  sms_cost: number;
  contact_numbers: string[];
}
