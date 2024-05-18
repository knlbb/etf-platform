export interface LoginBody {
    email: string;
    password: string;
    twoFactorAuthenticationCode?: string;
  }
  
  export interface RegisterBody {
    email: string;
    password: string;
    referralCode?: string;
  }