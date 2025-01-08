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

declare interface CreateContactGroupParams {
  list_name: string;
}

declare interface AddContactToGroupParams {
  list_token: number;
  contact: ContactParams[];
}

// GET THE ContactGroup BY PARAMS
declare interface ContactParams {
  date_of_birth?: string;
  gender?: string;
  email?: string;
  number: string;
  name: string;
}

declare interface GetContactsByListToken {
  list_token: number;
}

declare interface DeleteContactsListParams {
  list_token: string;
}

// SMS PARAMS

declare interface SendSMSParams {
  sender_id: string;
  message: string;
  contacts?: string[];
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
}


declare interface GetSMSCostParams {
  contacts?: string[];
  contact_numbers?: string[];
}
